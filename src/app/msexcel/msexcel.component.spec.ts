import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsexcelComponent } from './msexcel.component';

describe('MsexcelComponent', () => {
  let component: MsexcelComponent;
  let fixture: ComponentFixture<MsexcelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsexcelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MsexcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
