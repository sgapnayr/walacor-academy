import React from "react";
import { Quiz } from "@/app/types/quizTypes";
import Button from "@/app/components/Button";

export default function QuizCard({
  quiz,
  onOpenModal,
}: {
  quiz: Quiz;
  onOpenModal: (quiz: Quiz) => void;
}) {
  return (
    <div
      onClick={() => onOpenModal(quiz)}
      className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-col justify-between"
    >
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-light tracking-tight text-gray-900 flex flex-col">
          {quiz.title}
          <div className="border-b w-full mt-2" />
        </h5>
        <p className="mb-3 font-normal text-gray-700">{quiz.description}</p>
      </div>
      <div className="p-5 flex justify-between items-center">
        <span className="text-sm text-gray-600">
          Reward:{" "}
          <span className="font-bold text-green-600">{quiz.reward}</span>
        </span>
        <Button
          variant="primary"
          size="sm"
          onClick={() => {
            onOpenModal(quiz);
          }}
          className="inline-flex items-center"
        >
          Start Quiz
          <svg
            className="w-3.5 h-3.5 ml-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
}
