import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishBmiComponent } from './english-bmi.component';

describe('EnglishBmiComponent', () => {
  let component: EnglishBmiComponent;
  let fixture: ComponentFixture<EnglishBmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnglishBmiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnglishBmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
