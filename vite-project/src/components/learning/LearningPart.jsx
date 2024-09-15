import React from "react";
import pro from "../../../public/pro.svg";

const LearningPart = () => {
  return (
    <section className="flex gap-20 ">
      <div className="bg-blue-300 h-auto mt-4 w-96 p-4 rounded-xl">
        {/* Set the image height and width with proper aspect ratio control */}
        <img
          className="h-64 w-full object-cover rounded-xl mb-4"
          src={pro}
          alt="Python Programming"
        />

        <h1 className="text-xl font-bold mb-2">Python Programming</h1>

        <p className="text-sm text-gray-700">
          Python is a powerful, high-level programming language designed for
          simplicity and readability. Its clean syntax, which uses indentation
          to define code blocks, makes it easy to learn and write, especially
          for beginners. Python supports multiple programming paradigms,
          including procedural, object-oriented, and functional programming,
          making it highly versatile.
        </p>
      </div>
      <div className="bg-blue-300 h-auto mt-4 w-96 p-4 rounded-xl">
        {/* Set the image height and width with proper aspect ratio control */}
        <img
          className="h-64 w-full object-cover rounded-xl mb-4"
          src={pro}
          alt="Python Programming"
        />

        <h1 className="text-xl font-bold mb-2">Python Programming</h1>

        <p className="text-sm text-gray-700">
          Python is a powerful, high-level programming language designed for
          simplicity and readability. Its clean syntax, which uses indentation
          to define code blocks, makes it easy to learn and write, especially
          for beginners. Python supports multiple programming paradigms,
          including procedural, object-oriented, and functional programming,
          making it highly versatile.
        </p>
      </div>
    </section>
  );
};

export default LearningPart;
