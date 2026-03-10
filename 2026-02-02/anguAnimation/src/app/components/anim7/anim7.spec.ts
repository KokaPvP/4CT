import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anim7 } from './anim7';

describe('Anim7', () => {
  let component: Anim7;
  let fixture: ComponentFixture<Anim7>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Anim7]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Anim7);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
