import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightSideSectionComponent } from './right-side-section.component';

describe('RightSideSectionComponent', () => {
  let component: RightSideSectionComponent;
  let fixture: ComponentFixture<RightSideSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RightSideSectionComponent]
    });
    fixture = TestBed.createComponent(RightSideSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
