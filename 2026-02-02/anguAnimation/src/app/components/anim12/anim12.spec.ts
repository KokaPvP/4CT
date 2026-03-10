import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anim12 } from './anim12';

describe('Anim12', () => {
  let component: Anim12;
  let fixture: ComponentFixture<Anim12>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Anim12]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Anim12);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
