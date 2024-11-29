"use client";

import { useRouter } from "next/navigation";
import { Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FloatingImage } from "@/components/FloatingImage";
import image1 from "../../public/image.png";
import image2 from "../../public/image2.png";
import image3 from "../../public/image3.png";
import image4 from "../../public/image4.png";
import image5 from "../../public/image5.png";
import image6 from "../../public/image6.png";

const images = [
  {
    src: image1,
    alt: "Book and glasses",
    style: { left: "5%", top: "15%", transform: "rotate(-5deg)" },
  },
  {
    src: image4,
    alt: "doctor",
    style: { left: "30%", top: "5%", transform: "rotate(3deg)" },
  },
  {
    src: image3,
    alt: "networking yo",
    style: { left: "55%", top: "10%", transform: "rotate(-2deg)" },
  },
  {
    src: image2,
    alt: "Chill Guy",
    style: { right: "15%", bottom: "10%", transform: "rotate(4deg)" },
  },
  {
    src: image5,
    alt: "Frog",
    style: { right: "5%", top: "5%", transform: "rotate(-3deg)" },
  },
  {
    src: image6,
    alt: "Studying desk",
    style: { left: "15%", bottom: "5%", transform: "rotate(2deg)" },
  },
];

export default function HomePage() {
  const router = useRouter();

  function navigateToQuizPage() {
    router.push("/quiz");
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-black via-blue-950 to-black">
      {/* Fixed Position Images */}
      {images.map((image, index) => (
        <FloatingImage
          key={index}
          src={image.src}
          alt={image.alt}
          style={image.style}
          className="animate-gentle-float"
        />
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <div className="bg-black/50 p-8 rounded-2xl backdrop-blur-sm">
          <h1 className="text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-200">
            Rot-Check
          </h1>
          <p className="text-blue-200 max-w-md mb-8 text-xl">
            Challenge yourself with our interactive quiz and test your knowledge
          </p>
          <Button
            onClick={navigateToQuizPage}
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 rounded-lg text-lg font-semibold transition-all transform hover:scale-105">
            Start Quiz
            <Rocket className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
