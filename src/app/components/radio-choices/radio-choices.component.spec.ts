import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioChoicesComponent } from './radio-choices.component';

describe('RadioChoicesComponent', () => {
  let component: RadioChoicesComponent;
  let fixture: ComponentFixture<RadioChoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadioChoicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadioChoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
