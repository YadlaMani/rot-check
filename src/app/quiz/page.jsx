"use client";
import React, { useState, useEffect } from "react";
import { Video } from "lucide-react";
import questions from "@/utils/question";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"; // shadcn card
import { Button } from "@/components/ui/button"; // shadcn button
import { Progress } from "@/components/ui/progress"; // shadcn progress bar

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
    return (
      <div className="flex h-screen items-center justify-center text-xl font-semibold text-gray-700">
        Loading questions...
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white py-10 flex">
      <div className="video-container w-[30%]">
        <video
          src="/subwaysurferz.mp4" // Path to the video in the public folder
          autoPlay
          loop
          muted
          className="w-full h-auto"></video>
      </div>

      <div className="container mx-auto max-w-4xl px-6">
        {!showScore ? (
          <Card className="shadow-lg bg-white text-black">
            <CardHeader>
              <CardTitle className="text-2xl">
                Question {currentQuestionIndex + 1} of {quizQuestions.length}
              </CardTitle>
              <CardDescription className="text-gray-600">
                {quizQuestions[currentQuestionIndex].question}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {quizQuestions[currentQuestionIndex].options.map(
                  (option, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="py-4 hover:bg-blue-500 hover:text-white"
                      onClick={() => handleAnswerClick(option)}>
                      {option}
                    </Button>
                  )
                )}
              </div>
            </CardContent>
            <CardFooter>
              <Progress
                value={
                  ((currentQuestionIndex + 1) / quizQuestions.length) * 100
                }
                className="w-full"
              />
            </CardFooter>
          </Card>
        ) : (
          <Card className="shadow-lg bg-white text-black">
            <CardHeader>
              <CardTitle className="text-2xl">Quiz Completed!</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg">
                Your score: <span className="font-bold">{score}</span> out of{" "}
                {quizQuestions.length}
              </p>
              <div
                class="tenor-gif-embed"
                data-postid="27635363"
                data-share-method="host"
                data-aspect-ratio="1.78771"
                data-width="100%">
                <a href="https://tenor.com/view/thofinn-gif-27635363">
                  Thofinn GIF
                </a>
                from{" "}
                <a href="https://tenor.com/search/thofinn-gifs">Thofinn GIFs</a>
              </div>{" "}
              <script
                type="text/javascript"
                async
                src="https://tenor.com/embed.js"></script>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button
                variant="default"
                onClick={() => {
                  setScore(0);
                  setCurrentQuestionIndex(0);
                  setShowScore(false);
                }}>
                Restart Quiz
              </Button>
            </CardFooter>
          </Card>
        )}
      </div>

      <div>
        <img src={`/incredibles/${score + 1}.jpeg`}></img>
      </div>

      {/* <div className="video-container w-[30%]">
        <video
          src="/manicraft.mp4" // Path to the video in the public folder
          autoPlay
          loop
          muted
          className="w-full h-auto"></video>
      </div> */}
    </div>
  );
};

export default QuizPage;
