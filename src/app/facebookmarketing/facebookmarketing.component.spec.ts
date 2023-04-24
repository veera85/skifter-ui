import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookmarketingComponent } from './facebookmarketing.component';

describe('FacebookmarketingComponent', () => {
  let component: FacebookmarketingComponent;
  let fixture: ComponentFixture<FacebookmarketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacebookmarketingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacebookmarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
