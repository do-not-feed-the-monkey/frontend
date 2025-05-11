import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanicIndicatorComponent } from './panic-indicator.component';

describe('PanicIndicatorComponent', () => {
  let component: PanicIndicatorComponent;
  let fixture: ComponentFixture<PanicIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanicIndicatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanicIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
