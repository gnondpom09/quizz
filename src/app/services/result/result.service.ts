import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Result } from '../../models/result.model';

@Injectable({
  providedIn: 'root',
})
export class ResultService {
  private resultSubject: BehaviorSubject<Result> = new BehaviorSubject<Result>({
    steps: [],
    score: 0,
  });

  public result$: Observable<Result> = this.resultSubject.asObservable();

  private result: Result;

  constructor() {
    this.result = {
      steps: [],
      score: 0,
    };
  }

  setResult(result: Result) {
    this.result = result;
    this.resultSubject.next(this.result);
  }
}
