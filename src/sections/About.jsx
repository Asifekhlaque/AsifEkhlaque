import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 md:px-16 py-16">

      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mt-12 mb-20">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          We Build <span className="text-orange-500">Digital Experiences</span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
          Not just websites. Not just apps.  
          I build digital experiences that connect people to the world around them.
        </p>
      </div>

      {/* Story Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 mb-20">
        <div>
          <h2 className="text-3xl font-bold mb-5">My Story</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            I am Asif Ekhlaque, a passionate developer with a strong focus on
            creating visually stunning and user-friendly digital experiences.
            I started my journey as a volnteer in 2023 from Bhumi. Then I joined GDG Patna as a core team member.<br/>And now I am working as a freelance developer.
          </p>
        </div>

        <div className="bg-gray-800/40 backdrop-blur rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">What Drives Us</h3>
          <ul className="space-y-3 text-gray-300">
            <li>✨ Passion for clean & scalable code</li>
            <li>🎯 Focus on real-life problem solving</li>
            <li>📈 Growth mindset & continuous learning</li>
            <li>🤝 Strong teamwork & collaboration</li>
          </ul>
        </div>
      </div>

      {/* What We Do Cards */}
      <div className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          What We Do Best
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              title: "Web Development",
              desc: "Modern, fast, and scalable websites using the latest technologies.",
            },
            {
              title: "UI/UX Design",
              desc: "Clean, user-focused designs that feel simple and intuitive.",
            },
            {
              title: "Graphics Design and Video Editing",
              desc: "Visual storytelling through graphics and video editing.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-800/50 p-6 rounded-2xl hover:scale-105 transition-transform duration-300 shadow-md"
            >
              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>
              <p className="text-gray-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-20">
        {[
          { number: "10+", label: "Projects Completed" },
          { number: "5+", label: "Technologies Used" },
          { number: "100%", label: "Learning Driven" },
          { number: "∞", label: "Ideas Ahead" },
        ].map((stat, index) => (
          <div key={index}>
            <h3 className="text-4xl font-bold text-orange-500 mb-2">
              {stat.number}
            </h3>
            <p className="text-gray-400">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
      <div className="bg-gray-900 p-6 rounded-2xl">
  <h1 className="text-4xl font-bold mb-10 text-white">My Education</h1>

  <div className="grid md:grid-cols-2 gap-8">

    {/* Education Card 1 */}
    <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 hover:scale-105 transition-transform duration-300 shadow-lg">
      <h2 className="text-2xl font-semibold text-orange-600">
        Masters of Computer Applications (MCA)
      </h2>

      <p className="text-gray-300 mt-2">
        Amity University, Patna
      </p>

      <p className="text-gray-400 mt-1">
        2025 – Present
      </p>

      <p className="text-sm text-gray-400 mt-4">
        Focused on Web Development, Data Structures, DBMS, and Software Engineering.
      </p>
    </div>

    {/* Education Card 2 */}
    <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 hover:scale-105 transition-transform duration-300 shadow-lg">
      <h2 className="text-2xl font-semibold text-orange-500">
        Bachelor of Computer Applications (BCA)
      </h2>

      <p className="text-gray-300 mt-2">
        Aryabhat Knowledge University, Patna
      </p>

      <p className="text-gray-400 mt-1">
        2022 – 2025
      </p>

      <p className="text-sm text-gray-400 mt-4">
        Focused on Web Development, Data Structures, DBMS, and Software Engineering.
      </p>
    </div>


    <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 hover:scale-105 transition-transform duration-300 shadow-lg">
      <h2 className="text-2xl font-semibold text-orange-400">
        Intermediary and Maticulation
      </h2>

      <p className="text-gray-300 mt-2">
        Kendriya Vidyalaya ,Patna
      </p>

      <p className="text-gray-400 mt-1">
        2020 – 2022
      </p>

      <p className="text-sm text-gray-400 mt-4">
        Completed Intermediate and Maticulation.
      </p>
    </div>

  </div>
</div>

    </div>
  );
};

export default About;
