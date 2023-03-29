import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaisiePersonneComponent } from './saisie-personne.component';

describe('SaisiePersonneComponent', () => {
  let component: SaisiePersonneComponent;
  let fixture: ComponentFixture<SaisiePersonneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaisiePersonneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaisiePersonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
