"use client"

import Image from "next/image";
import { cn } from "@/lib/utils"
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function ImageComponent({
  src,
  srcAlt,
  maskSrc,
  className,
}: {
  src: string;
  srcAlt : string
  maskSrc: string;
  className: string;
}) {

    const containerRef = useRef<HTMLDivElement | null>(null);

    useGSAP(() => {
      gsap.set(".image", { x: 100, opacity: 0 });
      gsap.to(".image", {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power4",
      });
    }, [containerRef.current]);


  return (
    <div ref={containerRef} className={cn(`image opacity-0 absolute aspect-1 mask-[url(${maskSrc})] mask-no-repeat drop-shadow-2xl`, className)}>
      <Image
        src={src}
        width={400}
        height={400}
        className="w-80 h-80 object-cover"
        alt={srcAlt}
      />
    </div>
  );
}


// w-[max(380px, 8.5rem)] inset-inset 