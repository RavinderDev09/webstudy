import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyTrackingComponent } from './study-tracking.component';

describe('StudyTrackingComponent', () => {
  let component: StudyTrackingComponent;
  let fixture: ComponentFixture<StudyTrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudyTrackingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudyTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
