"use client";
import { useRouter } from "next/navigation";
export default function HomePage() {
  const router = useRouter();

  function navigateToQuizPage() {
    router.push("/quiz");
  }

  return (
    <div>
      <h1>Rot-Check</h1>
      <button onClick={navigateToQuizPage}>Go to quiz</button>
    </div>
  );
}
