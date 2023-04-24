import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasiccomputerComponent } from './basiccomputer.component';

describe('BasiccomputerComponent', () => {
  let component: BasiccomputerComponent;
  let fixture: ComponentFixture<BasiccomputerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasiccomputerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasiccomputerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
