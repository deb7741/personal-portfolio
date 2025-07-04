export default function PortfolioSection() {
  const projects = [
    {
      title: "Low-Power CMOS Operational Amplifier Design",
      description: "Designed and optimized a low-power two-stage Op-Amp in 45 nm CMOS achieving 67 dB gain, 3.7 MHz GBW, and 2 V/µs slew rate under 10 µW. Awarded 'Best Project' among 60 students. Published in IEEE DevIC 2025.",
      image: "https://www.electronics-tutorials.ws/wp-content/uploads/2013/08/opamp1.gif",
      technologies: ["Cadence Virtuoso", "45nm CMOS", "Post-Layout Sim"],
      techColors: ["bg-blue-100 text-blue-800", "bg-green-100 text-green-800", "bg-purple-100 text-purple-800"]
    },
    {
      title: "8-bit ALU Design using Verilog",
      description: "Developed an 8-bit ALU supporting 16 operations including arithmetic, logic, shift, and compare with 4-bit opcode decoder. Simulated using Xilinx ISE and ModelSim with comprehensive verification.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["Verilog", "Xilinx ISE", "FPGA"],
      techColors: ["bg-blue-100 text-blue-800", "bg-red-100 text-red-800", "bg-yellow-100 text-yellow-800"]
    },
    {
      title: "CCD Sensor Characterization",
      description: "Characterized dark current response of Apogee Alta F6 CCD, reducing thermal noise by 15% via temperature control. Built Python automation pipeline for data calibration and hot pixel correction.",
      image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["Python", "MaximDL", "Sensor Analysis"],
      techColors: ["bg-blue-100 text-blue-800", "bg-orange-100 text-orange-800", "bg-indigo-100 text-indigo-800"]
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Research projects and circuit designs that showcase my expertise in electronics engineering
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="fade-in">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
                <img 
                  src={project.image} 
                  alt={`${project.title} Project`} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className={`px-2 py-1 rounded text-sm ${project.techColors[techIndex]}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
        
        
      </div>
    </section>
  );
}
