import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentmarketingComponent } from './contentmarketing.component';

describe('ContentmarketingComponent', () => {
  let component: ContentmarketingComponent;
  let fixture: ComponentFixture<ContentmarketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentmarketingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentmarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
