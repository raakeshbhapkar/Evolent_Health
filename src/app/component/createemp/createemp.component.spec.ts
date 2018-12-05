import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateempComponent } from './createemp.component';

describe('CreateempComponent', () => {
  let component: CreateempComponent;
  let fixture: ComponentFixture<CreateempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
