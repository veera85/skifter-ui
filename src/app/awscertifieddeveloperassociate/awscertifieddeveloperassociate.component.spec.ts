import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwscertifieddeveloperassociateComponent } from './awscertifieddeveloperassociate.component';

describe('AwscertifieddeveloperassociateComponent', () => {
  let component: AwscertifieddeveloperassociateComponent;
  let fixture: ComponentFixture<AwscertifieddeveloperassociateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwscertifieddeveloperassociateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AwscertifieddeveloperassociateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
