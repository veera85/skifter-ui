import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommercemarketingComponent } from './ecommercemarketing.component';

describe('EcommercemarketingComponent', () => {
  let component: EcommercemarketingComponent;
  let fixture: ComponentFixture<EcommercemarketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcommercemarketingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcommercemarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
