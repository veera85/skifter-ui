import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptoppcserviceComponent } from './laptoppcservice.component';

describe('LaptoppcserviceComponent', () => {
  let component: LaptoppcserviceComponent;
  let fixture: ComponentFixture<LaptoppcserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaptoppcserviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaptoppcserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
