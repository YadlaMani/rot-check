"use client";

import React from "react";
import { motion } from "framer-motion";
import { Trophy, Rocket } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function ScoreCard({ score, totalQuestions, onRestart }) {
  const percentage = (score / totalQuestions) * 100;

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}>
      <Card className="backdrop-blur-sm bg-white/10 border-blue-500/20 shadow-xl text-blue-100">
        <CardHeader>
          <CardTitle className="text-3xl text-center flex items-center justify-center gap-3">
            <Trophy className="h-8 w-8 text-yellow-400" />
            Quiz Complete!
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-200">
            {percentage}%
          </motion.div>
          <p className="text-xl mb-6">
            You scored <span className="font-bold">{score}</span> out of{" "}
            {totalQuestions}
          </p>
          <div className="p-4 rounded-lg bg-blue-900/20 mb-6">
            {percentage === 100
              ? "Sheeeesh! You're absolutely goated! 🐐"
              : percentage >= 80
              ? "No cap fr fr, you're bussin! 🔥"
              : percentage >= 60
              ? "Not bad fam, but you can do better! 💪"
              : "Touch grass and try again! 🌱"}
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button
            onClick={onRestart}
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 rounded-lg text-lg font-semibold transition-all transform hover:scale-105">
            Run it back
            <Rocket className="ml-2 h-5 w-5" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
