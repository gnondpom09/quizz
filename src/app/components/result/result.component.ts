import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Question } from '../../models/question.model';
import { Result } from '../../models/result.model';
import { QuestionService } from '../../services/question/question.service';
import { ResultService } from '../../services/result/result.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  result$!: Observable<Result>;

  questions$!: Observable<Question[]>;

  bestScore!: number;

  constructor(
    private resultService: ResultService,
    private questionService: QuestionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.result$ = this.resultService.result$;

    this.questions$ = this.questionService.getQuestions();

    this.bestScore = Number(localStorage.getItem('bestScore'));
  }

  redirectToHome() {
    console.log('toto');

    this.router.navigate(['/']);

    this.resultService.setResult({
      steps: [],
      score: 0,
    });
  }
}
