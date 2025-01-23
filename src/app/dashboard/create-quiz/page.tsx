"use client";

import { useState } from "react";
import { Quiz } from "../../types/quizTypes";
import SidebarLayout from "@/app/layouts/sidebar";

const QuizForm = () => {
  const [quiz, setQuiz] = useState<Quiz>({
    id: "",
    title: "",
    description: "",
    questions: [],
  });

  const handleAddQuestion = () => {
    setQuiz({
      ...quiz,
      questions: [
        ...quiz.questions,
        {
          id: `q${quiz.questions.length + 1}`,
          text: "",
          options: [],
          correctAnswerId: "",
        },
      ],
    });
  };

  return (
    <div>
      <h1>Create Quiz</h1>
      <input
        type="text"
        placeholder="Quiz Title"
        value={quiz.title}
        onChange={(e) => setQuiz({ ...quiz, title: e.target.value })}
      />
      <textarea
        placeholder="Quiz Description"
        value={quiz.description}
        onChange={(e) => setQuiz({ ...quiz, description: e.target.value })}
      />
      <button onClick={handleAddQuestion}>Add Question</button>
      {quiz.questions.map((q, idx) => (
        <div key={q.id}>
          <input
            type="text"
            placeholder={`Question ${idx + 1}`}
            value={q.text}
            onChange={(e) => {
              const updatedQuestions = [...quiz.questions];
              updatedQuestions[idx].text = e.target.value;
              setQuiz({ ...quiz, questions: updatedQuestions });
            }}
          />
        </div>
      ))}
      <button onClick={() => console.log(quiz)}>Save Quiz</button>
      <SidebarLayout />
    </div>
  );
};

export default QuizForm;
