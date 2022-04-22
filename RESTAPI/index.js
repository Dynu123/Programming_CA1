const Joi = require('joi');
const { query, json } = require('express');
const express = require('express');
const app  = express();
app.use(express.json());
const mysql = require('mysql');
const { parse } = require('ipaddr.js');

//connect to the sql database
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'Library'
});

connection.connect((err)=>{
    if (!err) 
    console.log('DB Connection succeeded')
    else 
    console.log('DB connection failed' + JSON.stringify(err, undefined, 2));
});


//handle CORS
app.use(function (req, res, next) {
    //Enabling CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
      next();
    });


    // API for root method
app.get("/", (req, res) => {
    res.send("get root method");
})

// API for get all books
app.get("/api/books", (req, res) => {
    const queryString = "SELECT * FROM Books"
    connection.query(queryString, (err, rows, fields) => {
        if (err) {
            console.log(err.message)
            return
        }
        res.send(rows)
    })
})


// API for  Get a book
app.get("/api/books/:id", (req, res) => {
    const queryString = "SELECT * FROM Books WHERE id = ?"
    connection.query(queryString, [req.params.id], (err, rows, fields) => {
        if (err) {
            console.log(err.message)
            return
        }
        res.json(rows[0])
    })
})

// API for  Delete a book
app.delete("/api/books/:id", (req, res) => {
    const queryString = "DELETE FROM Books WHERE id = ?"
    connection.query(queryString, [req.params.id], (err, rows, fields) => {
        if (err) {
            console.log(err.message)
            return
        }
        res.json("Book deleted successfully!")
    })
})

// API for adding a new book
app.post("/api/books", (req, res) => {
    const schema = Joi.object({
        id: Joi.number().optional(),
        name: Joi.string().required(),
        author: Joi.string().required(),
        subject: Joi.string().required(),
        issueDate: Joi.date().optional(),
        issuedTo: Joi.string().optional(),
        description: Joi.string().optional()
    });

    const result = schema.validate(req.body);
    if (result.error) {
        res.json(result.error.details[0].message.toString()).status(400);
        return;
    }

    const body = req.body;
    const queryString = 'INSERT INTO Books(name, author, subject, issueDate, issuedTo, description, id) VALUES (?, ?, ?, ?, ?, ?, default)'
    connection.query(queryString, [body.name, body.author, body.subject, body.issueDate, body.issuedTo, body.description], (err, rows, fields) => {
        if (err) {
            res.json(err.message)
            return
        }
       res.json('New book added successfully!')
    })

})

// API for editing a book
app.put("/api/books", (req, res) => {
    const schema = Joi.object({
        id: Joi.number().optional(),
        name: Joi.string().required(),
        author: Joi.string().required(),
        subject: Joi.string().required(),
        issueDate: Joi.date().optional(),
        issuedTo: Joi.string().optional(),
        description: Joi.string().optional()
    });

    const result = schema.validate(req.body);
    if (result.error) {
        res.json(result.error.details[0].message.toString()).status(400);
        return;
    }
    const body = req.body
    const queryString = 'UPDATE Books SET name = ? , author = ? , subject = ? , issueDate = ? , issuedTo = ?, description = ? WHERE id = ? '
    connection.query(queryString, [body.name, body.author, body.subject, body.issueDate, body.issuedTo, body.description, body.id], (err, rows, fields) => {
        if (err) {
            res.json({message: err.message});
            return
        }
       res.json('Book details updated successfully!')
    })

})


// listen on port 3000
app.listen(3000, () => console.log("Listening on port 3000..."))