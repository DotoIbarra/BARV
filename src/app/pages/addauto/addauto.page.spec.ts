import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddautoPage } from './addauto.page';

describe('AddautoPage', () => {
  let component: AddautoPage;
  let fixture: ComponentFixture<AddautoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddautoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
