import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiuxdesignerComponent } from './uiuxdesigner.component';

describe('UiuxdesignerComponent', () => {
  let component: UiuxdesignerComponent;
  let fixture: ComponentFixture<UiuxdesignerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiuxdesignerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiuxdesignerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
