import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimitsViewComponent } from './limits-view.component';

describe('LimitsViewComponent', () => {
  let component: LimitsViewComponent;
  let fixture: ComponentFixture<LimitsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LimitsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LimitsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
