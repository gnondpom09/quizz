import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { ResultComponent } from './result/result.component';
import { QuestionComponent } from './question/question.component';
import { RadioChoicesComponent } from './radio-choices/radio-choices.component';
import { CheckboxChoicesComponent } from './checkbox-choices/checkbox-choices.component';
import { TimerComponent } from './timer/timer.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [
    HomeComponent,
    ResultComponent,
    QuestionComponent,
    RadioChoicesComponent,
    CheckboxChoicesComponent,
    TimerComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatCheckboxModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatGridListModule,
  ],
  exports: [
    HomeComponent,
    QuestionComponent,
    ResultComponent,
    FormsModule,
    ReactiveFormsModule,
    RadioChoicesComponent,
    CheckboxChoicesComponent,
    TimerComponent,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatCheckboxModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatGridListModule,
  ],
})
export class ComponentsModule {}
