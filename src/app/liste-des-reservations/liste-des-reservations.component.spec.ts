import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDesReservationsComponent } from './liste-des-reservations.component';

describe('ListeDesReservationsComponent', () => {
  let component: ListeDesReservationsComponent;
  let fixture: ComponentFixture<ListeDesReservationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeDesReservationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeDesReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
