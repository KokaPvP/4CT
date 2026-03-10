import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anim2 } from './anim2';

describe('Anim2', () => {
  let component: Anim2;
  let fixture: ComponentFixture<Anim2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Anim2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Anim2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
