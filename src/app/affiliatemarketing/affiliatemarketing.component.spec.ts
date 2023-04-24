import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiliatemarketingComponent } from './affiliatemarketing.component';

describe('AffiliatemarketingComponent', () => {
  let component: AffiliatemarketingComponent;
  let fixture: ComponentFixture<AffiliatemarketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffiliatemarketingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffiliatemarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
