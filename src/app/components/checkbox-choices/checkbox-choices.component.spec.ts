import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxChoicesComponent } from './checkbox-choices.component';

describe('CheckboxChoicesComponent', () => {
  let component: CheckboxChoicesComponent;
  let fixture: ComponentFixture<CheckboxChoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboxChoicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckboxChoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
