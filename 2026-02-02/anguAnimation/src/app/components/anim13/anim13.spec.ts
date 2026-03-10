import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anim13 } from './anim13';

describe('Anim13', () => {
  let component: Anim13;
  let fixture: ComponentFixture<Anim13>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Anim13]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Anim13);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
