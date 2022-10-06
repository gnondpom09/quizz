export interface Option {
  label: string;
  isChecked: boolean;
}

export interface Question {
  index: number;
  text: string;
  options: Option[];
  answers: string[];
  type: string;
}
