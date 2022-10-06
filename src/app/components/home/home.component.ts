import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Question } from '../../models/question.model';
import { QuestionService } from '../../services/question/question.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  isLoading = true;

  questions!: Question[];

  bestScore: number = 0;

  subscription: Subscription = new Subscription();

  constructor(
    private router: Router,
    private questionService: QuestionService
  ) {}

  ngOnInit(): void {
    this.subscription = this.questionService
      .getQuestions()
      .subscribe((questions: Question[]) => {
        setTimeout(() => {
          this.questions = questions;
          this.isLoading = false;
        }, 1000);
      });

    this.bestScore = Number(localStorage.getItem('bestScore'));
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  start() {
    this.router.navigate(['quizz']);
  }
}
