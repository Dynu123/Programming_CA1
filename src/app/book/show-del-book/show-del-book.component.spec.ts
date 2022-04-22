import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDelBookComponent } from './show-del-book.component';

describe('ShowDelBookComponent', () => {
  let component: ShowDelBookComponent;
  let fixture: ComponentFixture<ShowDelBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDelBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDelBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
