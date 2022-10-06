import { Step } from './step.model';

export interface Result {
  userId?: string;
  steps: Step[];
  score: number;
}
