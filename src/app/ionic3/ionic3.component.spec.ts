import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ionic3Component } from './ionic3.component';

describe('Ionic3Component', () => {
  let component: Ionic3Component;
  let fixture: ComponentFixture<Ionic3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ionic3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ionic3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
