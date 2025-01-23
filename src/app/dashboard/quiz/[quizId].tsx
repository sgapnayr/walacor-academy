"use client";

import { useRouter } from "next/router";
import { useQuizById } from "../../hooks/useQuizzes";

const QuizPlayer = () => {
  const router = useRouter();
  const { quizId } = router.query;
  const quiz = useQuizById(quizId as string);

  if (!quiz) return <div>Quiz not found</div>;

  return (
    <div>
      <h1>{quiz.title}</h1>
      {quiz.questions.map((q) => (
        <div key={q.id}>
          <p>{q.text}</p>
          {q.options.map((option) => (
            <div key={option.id}>
              <input type="radio" id={option.id} name={q.id} />
              <label htmlFor={option.id}>{option.text}</label>
            </div>
          ))}
        </div>
      ))}
      <button onClick={() => console.log("Submit Answers")}>Submit</button>
    </div>
  );
};

export default QuizPlayer;
