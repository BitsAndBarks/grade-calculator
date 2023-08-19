import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HauptstudiumComponent } from './hauptstudium.component';

describe('HauptstudiumComponent', () => {
  let component: HauptstudiumComponent;
  let fixture: ComponentFixture<HauptstudiumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HauptstudiumComponent]
    });
    fixture = TestBed.createComponent(HauptstudiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
