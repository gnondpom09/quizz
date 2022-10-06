import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Option, Question } from '../models/question.model';
import { Result } from '../models/result.model';
import { Step } from '../models/step.model';
import { QuestionService } from '../services/question/question.service';
import { ResultService } from '../services/result/result.service';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.scss'],
})
export class QuizzComponent implements OnInit, OnDestroy {
  questions!: Question[];

  question!: Question | undefined;

  steps: Step[] = [];

  score: number = 0;

  subscription: Subscription = new Subscription();

  constructor(
    private questionService: QuestionService,
    private router: Router,
    private resultService: ResultService
  ) {}

  ngOnInit(): void {
    this.questionService.getQuestions().subscribe((questions: Question[]) => {
      this.questions = questions;
      this.question = this.questions[0];
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  redirectToHome() {
    this.router.navigate(['/']);
  }

  getCurrentQuestion(questions: Question[], index: number) {
    this.question = this.questionService.getCurrentQuestion(questions, index);
  }

  nextQuestion(questions: Question[], step: Step) {
    this.saveAnswer(step);

    if (step.index === questions.length - 1) {
      this.viewResults();
    } else {
      this.getCurrentQuestion(questions, step.index + 1);
    }
  }

  viewResults() {
    this.router.navigate(['result']);
  }

  private saveAnswer(step: Step) {
    this.steps.push(step);

    this.score += this.getScore(step);

    console.log(this.score);

    const result: Result = {
      steps: this.steps,
      score: this.score,
    };

    this.resultService.setResult(result);

    this.saveBestScore();
  }

  private saveBestScore() {
    const bestScore: number = Number(localStorage.getItem('bestScore'));

    if (this.score > bestScore) {
      localStorage.setItem('bestScore', String(this.score));
    }
  }

  private getScore(step: Step): number {
    const answers: string[] = this.question?.answers
      ? this.question.answers
      : [];
    const choices: Option[] = step.choices.filter(
      (item: Option) => item.isChecked
    );
    const textAnswer: string = step.answer;

    if (this.question?.type !== 'text') {
      if (choices.every((value, index) => value.label === answers[index])) {
        return 1;
      }
    } else {
      if (answers.includes(textAnswer)) {
        return 1;
      }
    }
    return 0;
  }
}
