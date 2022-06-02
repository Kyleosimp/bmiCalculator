import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmiMetricComponent } from './bmi-metric.component';

describe('BmiMetricComponent', () => {
  let component: BmiMetricComponent;
  let fixture: ComponentFixture<BmiMetricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmiMetricComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BmiMetricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
