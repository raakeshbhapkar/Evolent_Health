import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayEmpComponent } from './display-emp.component';

describe('DisplayEmpComponent', () => {
  let component: DisplayEmpComponent;
  let fixture: ComponentFixture<DisplayEmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayEmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
