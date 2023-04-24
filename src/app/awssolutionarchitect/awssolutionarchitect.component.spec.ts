import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwssolutionarchitectComponent } from './awssolutionarchitect.component';

describe('AwssolutionarchitectComponent', () => {
  let component: AwssolutionarchitectComponent;
  let fixture: ComponentFixture<AwssolutionarchitectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwssolutionarchitectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AwssolutionarchitectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
