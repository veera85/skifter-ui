import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwssysopsadministatorComponent } from './awssysopsadministator.component';

describe('AwssysopsadministatorComponent', () => {
  let component: AwssysopsadministatorComponent;
  let fixture: ComponentFixture<AwssysopsadministatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwssysopsadministatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AwssysopsadministatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
