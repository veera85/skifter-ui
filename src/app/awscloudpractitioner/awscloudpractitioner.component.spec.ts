import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwscloudpractitionerComponent } from './awscloudpractitioner.component';

describe('AwscloudpractitionerComponent', () => {
  let component: AwscloudpractitionerComponent;
  let fixture: ComponentFixture<AwscloudpractitionerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwscloudpractitionerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AwscloudpractitionerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
