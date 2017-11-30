import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDesReservationsVehiculesComponent } from './liste-des-reservations-vehicules.component';

describe('ListeDesReservationsVehiculesComponent', () => {
  let component: ListeDesReservationsVehiculesComponent;
  let fixture: ComponentFixture<ListeDesReservationsVehiculesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeDesReservationsVehiculesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeDesReservationsVehiculesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
