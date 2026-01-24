const Projects = () => {
  return (
    <section className="text-white py-2">
      <h1 className="text-4xl font-bold text-center mb-8">
        My Projects
      </h1>

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Card 1 */}
        <div className="bg-[radial-gradient(circle_at_50%_10%,rgba(255,255,255,0.03),transparent_70%),linear-gradient(135deg,#1B1B1B_0%,#0F0F0F_100%)] backdrop-blur border border-gray-500 rounded-2xl p-6 
                        transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
          <h2 className="text-xl font-semibold mb-2">CodixPro</h2>
          <p className="text-sm text-gray-400 mb-4">
            Personal tech platform showcasing projects and web solutions.
          </p>
          <a
            href="https://codixpro.vercel.app/"
            target="_blank"
            className="inline-block text-sm font-medium text-orange-400 hover:text-indigo-300"
          >
            Visit Project →
          </a>
        </div>

        {/* Card 2 */}
        <div className="bg-[radial-gradient(circle_at_50%_10%,rgba(255,255,255,0.03),transparent_70%),linear-gradient(135deg,#1B1B1B_0%,#0F0F0F_100%)] backdrop-blur border border-gray-500 rounded-2xl p-6 
                        transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
          <h2 className="text-xl font-semibold mb-2">Hackathon Project</h2>
          <p className="text-sm text-gray-400 mb-4">
            Team-based hackathon solution built under time constraints.
          </p>
          <a
            href="https://github.com/Asifekhlaque/Glitch1.0_ZeroDayHeroes"
            target="_blank"
            className="inline-block text-sm font-medium text-orange-400 hover:text-indigo-300"
          >
            View on GitHub →
          </a>
        </div>

        {/* Card 3 */}
        <div className="bg-[radial-gradient(circle_at_50%_10%,rgba(255,255,255,0.03),transparent_70%),linear-gradient(135deg,#1B1B1B_0%,#0F0F0F_100%)] backdrop-blur border border-gray-500 rounded-2xl p-6 
                        transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
          <h2 className="text-xl font-semibold mb-2">3D UI</h2>
          <p className="text-sm text-gray-400 mb-4">
            Three.js based interactive 3D interface experiment.
          </p>
          <a
            href="https://github.com/Asifekhlaque/ThreeJsPlanetProject"
            target="_blank"
            className="inline-block text-sm font-medium text-orange-400 hover:text-indigo-300"
          >
            Explore Code →
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;
