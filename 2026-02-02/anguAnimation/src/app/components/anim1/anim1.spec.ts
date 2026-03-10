import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anim1 } from './anim1';

describe('Anim1', () => {
  let component: Anim1;
  let fixture: ComponentFixture<Anim1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Anim1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Anim1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
