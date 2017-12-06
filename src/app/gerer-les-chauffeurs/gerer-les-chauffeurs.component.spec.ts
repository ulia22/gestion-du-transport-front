import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GererLesChauffeursComponent } from './gerer-les-chauffeurs.component';

describe('GererLesChauffeursComponent', () => {
  let component: GererLesChauffeursComponent;
  let fixture: ComponentFixture<GererLesChauffeursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GererLesChauffeursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GererLesChauffeursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
