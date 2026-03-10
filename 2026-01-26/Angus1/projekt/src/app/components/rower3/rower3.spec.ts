import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rower3 } from './rower3';

describe('Rower3', () => {
  let component: Rower3;
  let fixture: ComponentFixture<Rower3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Rower3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rower3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
