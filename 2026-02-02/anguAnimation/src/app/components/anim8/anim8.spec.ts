import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anim8 } from './anim8';

describe('Anim8', () => {
  let component: Anim8;
  let fixture: ComponentFixture<Anim8>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Anim8]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Anim8);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
