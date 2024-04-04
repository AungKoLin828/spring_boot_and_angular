import { ComponentFixture, TestBed } from '@angular/core/testing';
import {ListsStudentComponent} from './lists-student.component'

describe('ListsStudentComponent', () => {
  let component: ListsStudentComponent;
  let fixture: ComponentFixture<ListsStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListsStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
