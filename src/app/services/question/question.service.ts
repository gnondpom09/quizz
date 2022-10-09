import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import {
  BehaviorSubject,
  catchError,
  map,
  Observable,
  of,
  retry,
  throwError,
} from 'rxjs';
import { Quizz } from '../../models/quizz.model';
import { Question } from '../../models/question.model';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  private JSON_URL = 'assets/questions.json';

  constructor(private http: HttpClient) {
    this.getQuestions();
  }

  getQuizz(): Observable<Quizz> {
    return this.http.get(this.JSON_URL).pipe(
      map((res: any) => res),
      catchError(this.handleError)
    );
  }

  getQuestions(): Observable<Question[]> {
    return this.http.get(this.JSON_URL).pipe(
      map((res: any) => {
        return res.questions;
      }),
      catchError(this.handleError)
    );
  }

  getCurrentQuestion(questions: Question[], index: number): Question {
    return questions.find((item) => item.index === index) as Question;
  }

  private handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => {
      return errorMessage;
    });
  }
}
