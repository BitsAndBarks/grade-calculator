import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorBachelorComponent } from './calculator-bachelor.component';

describe('CalculatorBachelorComponent', () => {
  let component: CalculatorBachelorComponent;
  let fixture: ComponentFixture<CalculatorBachelorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculatorBachelorComponent]
    });
    fixture = TestBed.createComponent(CalculatorBachelorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
