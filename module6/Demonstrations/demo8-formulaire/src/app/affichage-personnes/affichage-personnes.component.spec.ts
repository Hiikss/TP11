import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichagePersonnesComponent } from './affichage-personnes.component';

describe('AffichagePersonnesComponent', () => {
  let component: AffichagePersonnesComponent;
  let fixture: ComponentFixture<AffichagePersonnesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichagePersonnesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffichagePersonnesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
