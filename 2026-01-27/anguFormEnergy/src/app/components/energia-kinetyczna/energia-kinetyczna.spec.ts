import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergiaKinetyczna } from './energia-kinetyczna';

describe('EnergiaKinetyczna', () => {
  let component: EnergiaKinetyczna;
  let fixture: ComponentFixture<EnergiaKinetyczna>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnergiaKinetyczna]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnergiaKinetyczna);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
