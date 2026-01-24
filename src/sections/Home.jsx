import React from "react";



const Home = ({ onSkillClick }) => {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center h-[90vh] text-white overflow-hidden"
    >

      <div className="z-10 flex flex-col items-center px-4 text-center">
        <p className="text-sm font-medium text-[#FF6A00]">FULL STACK DEVELOPER . GRAPHIC DESIGNER</p>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Hi, I'm <span className="text-[#FF6A00]">Asif Ekhlaque.</span>
        </h1>
        <p className=" text-md  mt-2 text-gray-200 ">
          I turn imagination into reality through design and code with a focus on user experience and accessibility.
        </p>

        <div className="mt-6 flex gap-5">
          <button onClick={onSkillClick} className="bg-[#FF6A00] text-white px-6 py-2.5 rounded-full hover:border-2 hover:bg-transparent hover:border-[#FF6A00] hover:text-white transition-all duration-200">
            Skills & Work
          </button>

          <button className="bg-gray-200 text-[#FF6A00] px-6 py-2.5 rounded-full  hover:border-2 hover:bg-transparent hover:border-[#FF6A00] hover:text-white transition-all duration-200">
            <a href="https://drive.google.com/file/d/1It33TSZiVv2f8O1yRHaGTvyvbts9L72N/view?usp=sharing" target="_blank" rel="noopener noreferrer">Download CV</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
