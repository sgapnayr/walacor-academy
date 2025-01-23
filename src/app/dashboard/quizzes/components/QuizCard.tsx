import React from "react";
import { Quiz } from "@/app/types/quizTypes";

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
      className="relative rounded-lg shadow-sm p-6 bg-white hover:shadow-md transition-shadow cursor-pointer group"
      style={{ height: "250px" }}
    >
      <h2 className="text-lg font-semibold text-gray-800">{quiz.title}</h2>
      <p className="text-sm text-gray-600 mt-2">{quiz.description}</p>
      <div className="absolute bottom-4 left-4 text-sm text-gray-600">
        Reward: <span className="font-bold text-green-600">{quiz.reward}</span>
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onOpenModal(quiz);
        }}
        className="absolute bottom-4 right-4 bg-[#00b3dd] text-white text-sm rounded-md px-4 py-2 shadow hover:bg-blue-700 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        Open Quiz
      </button>
    </div>
  );
}
