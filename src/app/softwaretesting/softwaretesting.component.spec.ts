import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwaretestingComponent } from './softwaretesting.component';

describe('SoftwaretestingComponent', () => {
  let component: SoftwaretestingComponent;
  let fixture: ComponentFixture<SoftwaretestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftwaretestingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftwaretestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
