import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddviajePage } from './addviaje.page';

describe('AddviajePage', () => {
  let component: AddviajePage;
  let fixture: ComponentFixture<AddviajePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddviajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
