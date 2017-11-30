import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserverUnVehiculesDeSocieteComponent } from './reserver-un-vehicules-de-societe.component';

describe('ReserverUnVehiculesDeSocieteComponent', () => {
  let component: ReserverUnVehiculesDeSocieteComponent;
  let fixture: ComponentFixture<ReserverUnVehiculesDeSocieteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReserverUnVehiculesDeSocieteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserverUnVehiculesDeSocieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
