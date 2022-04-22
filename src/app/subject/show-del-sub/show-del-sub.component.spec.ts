import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDelSubComponent } from './show-del-sub.component';

describe('ShowDelSubComponent', () => {
  let component: ShowDelSubComponent;
  let fixture: ComponentFixture<ShowDelSubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDelSubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDelSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
