import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordByDateComponent } from './record-by-date.component';

describe('RecordByDateComponent', () => {
  let component: RecordByDateComponent;
  let fixture: ComponentFixture<RecordByDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordByDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
