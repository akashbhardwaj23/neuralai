"use client"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";


export default function About() {
    const containerRef = useRef(null)
    useGSAP(() => {
        gsap.to('.border-container', {
            opacity : 1,
            borderWidth : 2,
            borderStyle : "dashed",
            borderColor : "black",
            duration : 0.4,
            ease : "power4"
        })
}, {scope : containerRef})


  return (
    <div ref={containerRef} className="relative">
      <div className="absolute w-full top-20 text-background">
        <div className="absolute left-1/4">
          <h1 className={`text-7xl font-silkscreen`}>About</h1>
        </div>

        <span className="border-b-2 border-dashed border-black h-20 w-20" />

        <div className="absolute top-40 left-1/5 max-w-4xl">
          <div className="opacity-0 border-container rounded-md font-silkscreen shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-black p-4">
            <p>
              Welcome to Neural AI, your gateway to understanding the
              fascinating world of Artificial Intelligence. We believe that AI
              is not just a buzzword, but a transformative force shaping our
              future. Our mission is to demystify complex AI concepts, share the
              latest breakthroughs, and explore the ethical implications of this
              groundbreaking technology. Join us as we navigate the neural
              pathways of innovation.
            </p>
          </div>
          <div className="opacity-0 border-container rounded-md font-silkscreen shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-black p-4">
            <p>
            At Neural AI, we are passionate about exploring the endless possibilities of Artificial Intelligence. From the foundational principles of neural networks to the cutting-edge advancements in machine learning and deep learning, our goal is to provide clear, engaging, and insightful content for enthusiasts, professionals, and curious minds alike.

We believe in fostering a community where knowledge is shared, ideas are sparked, and the future of AI is discussed with curiosity and responsibility. Dive in with us as we unravel the intricate workings of AI and envision a smarter tomorrow.
            </p>
          </div>

          <div className="opacity-0 border-container rounded-md font-silkscreen shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-black p-4 mb-10">
            <p>Neural AI was created with a singular vision: to be a central resource for anyone eager to learn about, discuss, and engage with Artificial Intelligence. Whether you're a seasoned AI developer, a student taking your first steps into machine learning, or simply curious about how AI impacts your daily life, you'll find a welcoming space here.

We strive to break down barriers to understanding AI by providing accessible articles, thought-provoking insights, and discussions on the latest trends and ethical considerations. Join our growing community and embark on a journey of discovery into the intelligence that is redefining our world.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
