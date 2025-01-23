export interface Question {
  id: string;
  text: string;
  options: Option[];
  correctAnswerId: string;
}

export interface Option {
  id: string;
  text: string;
}

export interface Quiz {
  id: string;
  title: string;
  description?: string;
  reward: string;
  questions: Question[];
}

export interface QuizResult {
  quizId: string;
  userId: string;
  answers: { questionId: string; selectedOptionId: string }[];
  score: number;
  passed: boolean;
}
