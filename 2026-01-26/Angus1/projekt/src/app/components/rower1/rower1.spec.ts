import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rower1 } from './rower1';

describe('Rower1', () => {
  let component: Rower1;
  let fixture: ComponentFixture<Rower1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Rower1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rower1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
