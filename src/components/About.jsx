import React from 'react';

const About = () => {
  return (
    <section className="bg-violet-100 text-gray-800 py-10 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 rounded-xl mx-auto mt-10 max-w-7xl shadow-md">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-purple-700 mb-6">About Listo</h2>

      <p className="text-base sm:text-lg md:text-xl leading-relaxed text-center text-gray-700 max-w-3xl mx-auto">
        <span className="font-semibold text-purple-700">Listo</span> is a simple yet powerful ToDo app built with React and Vite. Designed to keep your daily tasks organized in one place, Listo offers a smooth, fast, and user-friendly experience. Whether you're planning your day, managing tasks, or tracking progress — Listo helps you stay productive and in control.
      </p>

      <div className="flex justify-center mt-8">
        <ul className="text-sm sm:text-base md:text-lg list-disc list-inside text-purple-700 space-y-2 text-left">
          <li>🚀 Add, edit, and delete tasks effortlessly</li>
          <li>✅ Mark tasks as completed</li>
          <li>💾 Persistent storage using localStorage</li>
          <li>🎯 Clean and responsive UI</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
