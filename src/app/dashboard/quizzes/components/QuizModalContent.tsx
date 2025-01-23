import React from "react";
import { Quiz } from "@/app/types/quizTypes";

export default function QuizModalContent({ quiz }: { quiz: Quiz }) {
  return (
    <div>
      <p className="text-gray-600 mb-4">{quiz.description}</p>
      <ul className="space-y-4">
        {quiz.questions.map((question) => (
          <li key={question.id}>
            <h4 className="font-medium text-gray-800">{question.text}</h4>
            <ul className="pl-4 mt-2 space-y-2">
              {question.options.map((option) => (
                <li key={option.id} className="text-gray-600">
                  - {option.text}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
