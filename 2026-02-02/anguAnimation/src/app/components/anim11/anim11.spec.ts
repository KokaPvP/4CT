import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anim11 } from './anim11';

describe('Anim11', () => {
  let component: Anim11;
  let fixture: ComponentFixture<Anim11>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Anim11]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Anim11);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
