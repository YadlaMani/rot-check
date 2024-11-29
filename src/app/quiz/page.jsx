"use client";
import React from "react";
import questions from "@/utils/question";
import { useState, useEffect } from "react";
const QuizPage = () => {
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  useEffect(() => {
    const shuffledQuestions = questions.questions.sort(
      () => Math.random() - 0.5
    );
    setQuizQuestions(shuffledQuestions.slice(0, 10));
  }, []);
  const handleAnswerClick = (selectedOption) => {
    if (quizQuestions[currentQuestionIndex].correctOption === selectedOption) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowScore(true);
    }
  };

  if (!quizQuestions.length) {
    return <div>Loading questions...</div>;
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>{score}</h1>
      {!showScore ? (
        <div>
          <h2>
            Question {currentQuestionIndex + 1} of {quizQuestions.length}
          </h2>
          <p>{quizQuestions[currentQuestionIndex].question}</p>
          <div>
            {quizQuestions[currentQuestionIndex].options.map(
              (option, index) => (
                <button
                  key={index}
                  style={{
                    margin: "10px",
                    padding: "10px 20px",
                    fontSize: "16px",
                    cursor: "pointer",
                  }}
                  onClick={() => handleAnswerClick(option)}
                >
                  {option}
                </button>
              )
            )}
          </div>
        </div>
      ) : (
        <div>
          <h2>Quiz Completed!</h2>
          <p>
            Your score: {score} out of {quizQuestions.length}
          </p>
        </div>
      )}
    </div>
  );
};

export default QuizPage;
