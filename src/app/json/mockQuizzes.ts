export const mockQuizzes = [
  {
    id: "quiz1",
    title: "Sample Quiz",
    description: "Test your knowledge with this sample quiz!",
    reward: "$5",
    questions: [
      {
        id: "q1",
        text: "What is 2 + 2?",
        options: [
          { id: "o1", text: "3" },
          { id: "o2", text: "4" },
          { id: "o3", text: "5" },
        ],
        correctAnswerId: "o2",
      },
      {
        id: "q2",
        text: "What is the capital of France?",
        options: [
          { id: "o1", text: "Rome" },
          { id: "o2", text: "Paris" },
          { id: "o3", text: "Berlin" },
        ],
        correctAnswerId: "o2",
      },
    ],
  },
  {
    id: "quiz2",
    title: "Science Basics",
    description: "A quick quiz to test your basic science knowledge.",
    reward: "$10",
    questions: [
      {
        id: "q1",
        text: "What planet is known as the Red Planet?",
        options: [
          { id: "o1", text: "Earth" },
          { id: "o2", text: "Mars" },
          { id: "o3", text: "Jupiter" },
        ],
        correctAnswerId: "o2",
      },
      {
        id: "q2",
        text: "What is the chemical symbol for water?",
        options: [
          { id: "o1", text: "O2" },
          { id: "o2", text: "H2O" },
          { id: "o3", text: "CO2" },
        ],
        correctAnswerId: "o2",
      },
    ],
  },
  {
    id: "quiz3",
    title: "History Quiz",
    description: "How well do you know your history? Find out here!",
    reward: "$8",
    questions: [
      {
        id: "q1",
        text: "Who was the first president of the United States?",
        options: [
          { id: "o1", text: "Abraham Lincoln" },
          { id: "o2", text: "George Washington" },
          { id: "o3", text: "Thomas Jefferson" },
        ],
        correctAnswerId: "o2",
      },
      {
        id: "q2",
        text: "What year did World War II end?",
        options: [
          { id: "o1", text: "1945" },
          { id: "o2", text: "1939" },
          { id: "o3", text: "1950" },
        ],
        correctAnswerId: "o1",
      },
    ],
  },
];
