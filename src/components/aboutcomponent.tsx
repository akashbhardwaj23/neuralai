"use client"
import { cn } from "@/lib/utils"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";



export function AboutComponent({
    text,
    className
}: {
    text : string,
    className? : string
}){

    const containerRef = useRef(null);
    useGSAP(
      () => {
        gsap.to(".border-container", {
          opacity: 1,
          borderWidth: 2,
          borderStyle: "dashed",
          borderColor: "black",
          duration: 0.4,
          ease: "power4",
        });
      },
      { scope: containerRef }
    );
  

    return (
        <div ref={containerRef} className={cn("opacity-0 border-container rounded-md font-silkscreen shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-black p-4", className)}>
            <p>
              {text}
            </p>
          </div>
    )
}