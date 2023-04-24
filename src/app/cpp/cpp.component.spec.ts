import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CppComponent } from './cpp.component';

describe('CppComponent', () => {
  let component: CppComponent;
  let fixture: ComponentFixture<CppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
