import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OracledbaComponent } from './oracledba.component';

describe('OracledbaComponent', () => {
  let component: OracledbaComponent;
  let fixture: ComponentFixture<OracledbaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OracledbaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OracledbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
