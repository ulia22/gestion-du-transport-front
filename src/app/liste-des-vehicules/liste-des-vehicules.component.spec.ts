import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDesVehiculesComponent } from './liste-des-vehicules.component';

describe('ListeDesVehiculesComponent', () => {
  let component: ListeDesVehiculesComponent;
  let fixture: ComponentFixture<ListeDesVehiculesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeDesVehiculesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeDesVehiculesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
