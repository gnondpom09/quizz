import { Option } from './question.model';

export interface Step {
  index: number;
  question: string;
  choices: Option[];
  answer: string;
}
