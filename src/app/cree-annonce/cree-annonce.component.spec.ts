import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreeAnnonceComponent } from './cree-annonce.component';

describe('CreeAnnonceComponent', () => {
  let component: CreeAnnonceComponent;
  let fixture: ComponentFixture<CreeAnnonceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreeAnnonceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreeAnnonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
