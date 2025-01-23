import { mockQuizzes } from "../json/mockQuizzes";

export const useQuizzes = () => {
  // Placeholder for Walacor hook
  return mockQuizzes;
};

export const useQuizById = (id: string) => {
  // Placeholder for fetching a single quiz
  return mockQuizzes.find((quiz) => quiz.id === id);
};
