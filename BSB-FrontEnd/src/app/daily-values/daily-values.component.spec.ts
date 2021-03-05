import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyValuesComponent } from './daily-values.component';

describe('DailyValuesComponent', () => {
  let component: DailyValuesComponent;
  let fixture: ComponentFixture<DailyValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyValuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
