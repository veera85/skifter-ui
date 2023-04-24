import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogarchiveComponent } from './blogarchive.component';

describe('BlogarchiveComponent', () => {
  let component: BlogarchiveComponent;
  let fixture: ComponentFixture<BlogarchiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogarchiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogarchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
