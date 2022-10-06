import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { interval, map, Observable, takeWhile } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {
  private startAt = 120;

  @Output() eventEndTimer: EventEmitter<void> = new EventEmitter<void>();

  countDown$!: Observable<number>;

  constructor() {}

  ngOnInit(): void {
    this.countDown$ = this.runTimer();
  }

  private runTimer(): Observable<number> {
    return interval(1000).pipe(
      map((value) => this.startAt - value),
      takeWhile((x) => {
        if (x === 0) {
          this.eventEndTimer.emit();
        }
        return x >= 0;
      })
    );
  }
}
