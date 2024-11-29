"use client";
import React, { useState, useEffect } from "react";
import { Trophy, Timer, Brain, Sparkles } from "lucide-react";
import questions from "@/utils/question";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const QuizPage = () => {
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);

  useEffect(() => {
    const shuffledQuestions = questions.questions.sort(
      () => Math.random() - 0.5
    );
    setQuizQuestions(shuffledQuestions.slice(0, 10));
  }, []);

  const handleAnswerClick = (selectedOption) => {
    setSelectedAnswer(selectedOption);
    const isCorrect =
      quizQuestions[currentQuestionIndex].correctOption === selectedOption;
    setIsAnswerCorrect(isCorrect);

    if (isCorrect) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestionIndex < quizQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null);
        setIsAnswerCorrect(null);
      } else {
        setShowScore(true);
      }
    }, 1000);
  };

  if (!quizQuestions.length) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-blue-950 to-black flex items-center justify-center">
        <div className="animate-pulse flex items-center gap-2 text-blue-200 text-xl font-semibold">
          <Brain className="animate-spin" />
          Loading questions...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-blue-950 to-black p-8 flex gap-8">
      <div className="video-container w-[25%] h-screen sticky top-8">
        <div className="rounded-2xl overflow-hidden shadow-2xl bg-black/20 backdrop-blur-sm">
          <video
            src="/subwaysurferz.mp4"
            autoPlay
            loop
            muted
            className="w-full h-auto rounded-2xl"
          />
        </div>
      </div>

      <div className="flex-1 flex flex-col">
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
                      className="py-4 hover:bg-black hover:text-white"
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
              <TensorElement score={score} />
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
      <div className="rounded-2xl overflow-hidden static bottom-0 right-0 shadow-xl">
        <img
          src={`/incredibles/${score + 1}.jpeg`}
          alt="Score representation"
          className="w-full h-48 rounded-2xl"
        />
      </div>
    </div>
  );
};

function TensorElement({ score: score }) {
  if (score <= 2) {
    return (
      <>
        <div
          class="tenor-gif-embed"
          data-postid="27635363"
          data-share-method="host"
          data-aspect-ratio="1.78771"
          data-width="100%">
          <a href="https://tenor.com/view/thofinn-gif-27635363">Thofinn GIF</a>
          from <a href="https://tenor.com/search/thofinn-gifs">Thofinn GIFs</a>
        </div>{" "}
        <script
          type="text/javascript"
          async
          src="https://tenor.com/embed.js"></script>
      </>
    );
  } else if (score <= 4) {
    return (
      <>
        <div
          class="tenor-gif-embed"
          data-postid="22500292"
          data-share-method="host"
          data-aspect-ratio="1"
          data-width="100%">
          <a href="https://tenor.com/view/theres-still-time-mr-grooberson-paul-rudd-ghostbusters-afterlife-we-have-enough-time-gif-22500292">
            Theres Still Time Mr Grooberson GIF
          </a>
          from{" "}
          <a href="https://tenor.com/search/theres+still+time-gifs">
            Theres Still Time GIFs
          </a>
        </div>{" "}
        <script
          type="text/javascript"
          async
          src="https://tenor.com/embed.js"></script>
      </>
    );
  } else if (score <= 6) {
    return (
      <>
        <div
          class="tenor-gif-embed"
          data-postid="11157824601050747846"
          data-share-method="host"
          data-aspect-ratio="0.891566"
          data-width="100%">
          <a href="https://tenor.com/view/shrek-shrek-rizz-rizz-gif-11157824601050747846">
            Shrek Shrek Rizz GIF
          </a>
          from <a href="https://tenor.com/search/shrek-gifs">Shrek GIFs</a>
        </div>{" "}
        <script
          type="text/javascript"
          async
          src="https://tenor.com/embed.js"></script>
      </>
    );
  } else if (score <= 8) {
    return (
      <>
        <div
          class="tenor-gif-embed"
          data-postid="2243382899312612755"
          data-share-method="host"
          data-aspect-ratio="1.34228"
          data-width="100%">
          <a href="https://tenor.com/view/aizen-drinking-sip-drink-bleach-gif-2243382899312612755">
            Aizen Drinking GIF
          </a>
          from <a href="https://tenor.com/search/aizen-gifs">Aizen GIFs</a>
        </div>{" "}
        <script
          type="text/javascript"
          async
          src="https://tenor.com/embed.js"></script>
      </>
    );
  } else {
    return (
      <>
        <div
          class="tenor-gif-embed"
          data-postid="1750056094467610487"
          data-share-method="host"
          data-aspect-ratio="1.79137"
          data-width="100%">
          <a href="https://tenor.com/view/april-fools-joke-dog-its-fine-this-is-not-gif-1750056094467610487">
            April Fools Joke GIF
          </a>
          from{" "}
          <a href="https://tenor.com/search/april+fools-gifs">
            April Fools GIFs
          </a>
        </div>{" "}
        <script
          type="text/javascript"
          async
          src="https://tenor.com/embed.js"></script>
      </>
    );
  }
}

export default QuizPage;
