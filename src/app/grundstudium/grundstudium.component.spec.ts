import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrundstudiumComponent } from './grundstudium.component';

describe('GrundstudiumComponent', () => {
  let component: GrundstudiumComponent;
  let fixture: ComponentFixture<GrundstudiumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrundstudiumComponent]
    });
    fixture = TestBed.createComponent(GrundstudiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
