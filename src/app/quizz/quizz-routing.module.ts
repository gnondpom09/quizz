import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionComponent } from '../components/question/question.component';
import { QuizzComponent } from './quizz.component';

const routes: Routes = [
  {
    path: 'question',
    component: QuizzComponent,
    children: [
      {
        path: ':id',
        component: QuestionComponent,
      },
    ],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'question',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizzRoutingModule {}
