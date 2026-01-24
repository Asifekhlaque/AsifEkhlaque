const Projects = () => {
  return (
    <div className="text-center text-white h-[60vh] ">
      <h1 className="text-4xl font-bold mb-6">My Projects</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-5 rounded-xl">
          <a href="https://codixpro.vercel.app/" target="_blank">
            <h2 className="text-xl font-semibold mb-2">CodixPro</h2>
          </a>
        </div>

        <div className="bg-gray-800 p-5 rounded-xl">
          <a href="https://github.com/Asifekhlaque/Glitch1.0_ZeroDayHeroes" target="_blank">
            <h2 className="text-xl font-semibold mb-2">Hackthon Project</h2>
          </a>
        </div>

        <div className="bg-gray-800 p-5 rounded-xl">
          <a href="https://github.com/Asifekhlaque/ThreeJsPlanetProject" target="_blank">
            <h2 className="text-xl font-semibold mb-2">3D UI</h2>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
