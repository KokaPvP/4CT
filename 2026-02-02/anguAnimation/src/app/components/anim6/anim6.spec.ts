import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anim6 } from './anim6';

describe('Anim6', () => {
  let component: Anim6;
  let fixture: ComponentFixture<Anim6>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Anim6]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Anim6);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
