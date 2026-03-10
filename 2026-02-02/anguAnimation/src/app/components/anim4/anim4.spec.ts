import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anim4 } from './anim4';

describe('Anim4', () => {
  let component: Anim4;
  let fixture: ComponentFixture<Anim4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Anim4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Anim4);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
