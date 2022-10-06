import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Question } from '../../models/question.model';

import { Option } from '../../models/question.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit, OnChanges {
  @Input() question!: Question;

  @Output() eventNext: EventEmitter<any> = new EventEmitter<any>();

  quizzForm!: FormGroup;

  index!: number;

  constructor(private fb: FormBuilder) {
    this.quizzForm = this.fb.group({
      answer: new FormControl('', Validators.required),
      choices: new FormArray([]),
    });
  }

  ngOnInit(): void {
    console.log(this.question);

    if (this.question.options && this.question.options.length > 0) {
      this.addRadioButtons(this.question.options);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.updateValues(changes['question'].currentValue.options);
  }

  get choices() {
    return this.quizzForm.controls['choices'] as FormArray;
  }

  private addRadioButtons(choices: Option[]) {
    choices.forEach((choice: Option) => {
      this.choices.push(
        new FormGroup({
          label: new FormControl(choice.label),
          isChecked: new FormControl(false),
        })
      );
    });
  }

  updateValues(options: Option[]) {
    this.choices.patchValue(options);
  }

  async selectRadioButton(event: any, index: number) {
    await this.resetRadioBtnValues();

    this.quizzForm.value.choices[index].isChecked = !event.value.isChecked;
  }

  selectCheckbox(event: any, index: number) {
    this.quizzForm.value.choices[index].isChecked = event.checked;
  }

  next(question: Question) {
    if (question.type === 'text') {
      this.eventNext.emit({
        index: question.index,
        question: question.text,
        answer: this.quizzForm.value.answer,
        choices: [],
      });
    } else {
      this.eventNext.emit({
        index: question.index,
        question: question.text,
        choices: this.quizzForm.value.choices,
        answer: '',
      });
    }

    this.quizzForm.reset();
  }

  private async resetRadioBtnValues() {
    await this.quizzForm.value.choices.reduce(
      async (previous: Option, current: Option) => {
        await previous;
        current.isChecked = false;
      },
      Promise.resolve()
    );
  }
}
