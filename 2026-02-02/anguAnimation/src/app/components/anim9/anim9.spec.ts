import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anim9 } from './anim9';

describe('Anim9', () => {
  let component: Anim9;
  let fixture: ComponentFixture<Anim9>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Anim9]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Anim9);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
