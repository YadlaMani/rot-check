"use client";

import Image from "next/image";
import { StaticImageData } from "next/image";

export function FloatingImage({ src, alt, style, className = "" }) {
  return (
    <div className={`absolute ${className}`} style={style}>
      <div className="relative h-80 w-80 rounded-lg  shadow-2xl hover:opacity-60 transition-opacity duration-300">
        <Image
          src={src}
          alt={alt}
          fill
          style={{ objectFit: "contain", borderRadius: "10px" }}
          className="rounded-lg"
        />
      </div>
    </div>
  );
}
