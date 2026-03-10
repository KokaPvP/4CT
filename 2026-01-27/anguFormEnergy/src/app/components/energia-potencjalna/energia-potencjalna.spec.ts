import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergiaPotencjalna } from './energia-potencjalna';

describe('EnergiaPotencjalna', () => {
  let component: EnergiaPotencjalna;
  let fixture: ComponentFixture<EnergiaPotencjalna>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnergiaPotencjalna]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnergiaPotencjalna);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
