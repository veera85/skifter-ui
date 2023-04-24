import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontenddevelopmentComponent } from './frontenddevelopment.component';

describe('FrontenddevelopmentComponent', () => {
  let component: FrontenddevelopmentComponent;
  let fixture: ComponentFixture<FrontenddevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontenddevelopmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontenddevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
