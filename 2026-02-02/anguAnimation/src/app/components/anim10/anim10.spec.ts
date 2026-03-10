import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anim10 } from './anim10';

describe('Anim10', () => {
  let component: Anim10;
  let fixture: ComponentFixture<Anim10>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Anim10]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Anim10);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
