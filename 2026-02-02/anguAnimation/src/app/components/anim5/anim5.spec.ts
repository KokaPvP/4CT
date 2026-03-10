import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anim5 } from './anim5';

describe('Anim5', () => {
  let component: Anim5;
  let fixture: ComponentFixture<Anim5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Anim5]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Anim5);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
