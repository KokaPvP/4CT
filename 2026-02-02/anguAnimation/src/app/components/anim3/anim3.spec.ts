import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anim3 } from './anim3';

describe('Anim3', () => {
  let component: Anim3;
  let fixture: ComponentFixture<Anim3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Anim3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Anim3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
