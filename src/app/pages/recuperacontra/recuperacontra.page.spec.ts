import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecuperacontraPage } from './recuperacontra.page';

describe('RecuperacontraPage', () => {
  let component: RecuperacontraPage;
  let fixture: ComponentFixture<RecuperacontraPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RecuperacontraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
