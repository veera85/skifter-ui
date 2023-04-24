import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubemarketingComponent } from './youtubemarketing.component';

describe('YoutubemarketingComponent', () => {
  let component: YoutubemarketingComponent;
  let fixture: ComponentFixture<YoutubemarketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoutubemarketingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YoutubemarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
