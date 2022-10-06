import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Option, Question } from '../../models/question.model';

@Component({
  selector: 'app-radio-choices',
  templateUrl: './radio-choices.component.html',
  styleUrls: ['./radio-choices.component.scss'],
})
export class RadioChoicesComponent implements OnInit {
  @Input() quizzForm!: FormGroup;

  @Input() question!: Question;

  @Output() eventClick: EventEmitter<any> = new EventEmitter<any>();

  form!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    if (this.question.options && this.question.options.length > 0) {
      this.addRadioButtons(this.question.options);
      this.updateValues(this.question.options);
    }
  }

  get choices() {
    return this.quizzForm.controls['choices'] as FormArray;
  }

  private addRadioButtons(choices: Option[]) {
    choices.forEach((choice: Option) => {
      this.choices.push(
        new FormGroup({
          label: new FormControl(choice.label),
          isChecked: new FormControl(choice.isChecked),
        })
      );
    });
  }

  updateValues(options: Option[]) {
    this.choices.setValue(options);
  }

  onSelect(item: any) {
    console.log(item);
    console.log(this.choices);
  }
}
