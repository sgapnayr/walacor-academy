"use client";

import React, { useState } from "react";
import Dashboard from "@/app/layouts/dashboard";
import Modal from "@/app/components/Modal";
import { mockQuizzes } from "@/app/json/mockQuizzes";
import { Quiz } from "@/app/types/quizTypes";
import QuizCard from "./components/QuizCard";
import QuizModalContent from "./components/QuizModalContent";

const QuizzesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedQuiz, setSelectedQuiz] = useState<Quiz | null>(null);

  const handleOpenModal = (quiz: Quiz) => {
    setSelectedQuiz(quiz);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedQuiz(null);
  };

  return (
    <Dashboard pageDescription="Browse and manage your quizzes here.">
      <div className="flex flex-wrap gap-6 p-6">
        {mockQuizzes.map((quiz) => (
          <QuizCard key={quiz.id} quiz={quiz} onOpenModal={handleOpenModal} />
        ))}
      </div>

      {selectedQuiz && (
        <Modal
          isOpen={isModalOpen}
          title={selectedQuiz.title}
          content={<QuizModalContent quiz={selectedQuiz} />}
          onCancel={handleCloseModal}
          confirmText="Start Quiz"
          onConfirm={() => {
            console.log(`Starting quiz: ${selectedQuiz.title}`);
            handleCloseModal();
          }}
          cancelText="Close"
        />
      )}
    </Dashboard>
  );
};

export default QuizzesPage;
