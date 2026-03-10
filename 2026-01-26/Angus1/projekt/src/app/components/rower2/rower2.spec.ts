import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rower2 } from './rower2';

describe('Rower2', () => {
  let component: Rower2;
  let fixture: ComponentFixture<Rower2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Rower2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rower2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
