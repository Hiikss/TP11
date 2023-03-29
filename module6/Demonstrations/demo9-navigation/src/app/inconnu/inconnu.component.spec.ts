import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InconnuComponent } from './inconnu.component';

describe('InconnuComponent', () => {
  let component: InconnuComponent;
  let fixture: ComponentFixture<InconnuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InconnuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InconnuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
