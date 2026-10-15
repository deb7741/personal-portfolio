import { useState } from 'react';
import Icon from "@/components/icon";

export default function PortfolioSection() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const projects = [
    {
      title: "Low-Power CMOS Operational Amplifier Design",
      description: "Designed and optimized a low-power two-stage Op-Amp in 45 nm CMOS achieving 67 dB gain, 3.7 MHz GBW, and 2 V/µs slew rate under 10 µW. Awarded 'Best Project' among 60 students. Published in IEEE DevIC 2025.",
      image: "https://www.electronics-tutorials.ws/wp-content/uploads/2013/08/opamp1.gif",
      technologies: ["Cadence Virtuoso", "45nm CMOS", "Post-Layout Sim"],
      techColors: ["bg-blue-100 text-blue-800", "bg-green-100 text-green-800", "bg-purple-100 text-purple-800"],
      technicalDetails: {
        specifications: [
          "Gain: 67 dB",
          "GBW: 3.7 MHz", 
          "Slew Rate: 2 V/µs",
          "Power: 10 µW",
          "CMRR: 90 dB",
          "PSRR: 140 dB"
        ],
        tools: ["Cadence Virtuoso", "ADE L/XL", "Layout XL", "Spectre", "Quantus"],
        achievements: ["Best Project Award", "IEEE DevIC 2025 Publication", "Top 5% Class Performance"]
      }
    },
    {
      title: "8-bit ALU Design using Verilog",
      description: "Developed an 8-bit ALU supporting 16 operations including arithmetic, logic, shift, and compare with 4-bit opcode decoder. Simulated using Xilinx ISE and ModelSim with comprehensive verification.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["Verilog", "Xilinx ISE", "FPGA"],
      techColors: ["bg-blue-100 text-blue-800", "bg-red-100 text-red-800", "bg-yellow-100 text-yellow-800"],
      technicalDetails: {
        specifications: [
          "16 Operations Supported",
          "8-bit Data Width",
          "4-bit Opcode Decoder",
          "Zero/Carry Flag Logic",
          "Optimized Timing Paths"
        ],
        tools: ["Xilinx ISE", "ModelSim", "Verilog HDL", "FPGA Implementation"],
        achievements: ["Full Functional Verification", "Timing Closure Achieved", "Resource Optimization"]
      }
    },
    {
      title: "CCD Sensor Characterization",
      description: "Characterized dark current response of Apogee Alta F6 CCD, reducing thermal noise by 15% via temperature control. Built Python automation pipeline for data calibration and hot pixel correction.",
      image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["Python", "MaximDL", "Sensor Analysis"],
      techColors: ["bg-blue-100 text-blue-800", "bg-orange-100 text-orange-800", "bg-indigo-100 text-indigo-800"],
      technicalDetails: {
        specifications: [
          "15% Noise Reduction",
          "Temperature Control",
          "Dark Frame Mapping",
          "Hot Pixel Correction",
          "Automated Calibration"
        ],
        tools: ["Python", "MaximDL", "Apogee Alta F6", "Data Analysis"],
        achievements: ["Improved Photometric Accuracy", "Automation Pipeline", "Thermal Optimization"]
      }
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative">
      <div className="absolute inset-0 bg-white/60"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 fade-in">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Research projects and circuit designs that showcase my expertise in electronics engineering
          </p>
        </div>
        
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div key={index} className="fade-in">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 project-layout">
                  <div className="relative">
                    <img
                      src={project.image}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      width={800}
                      height={400}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <div className="p-6 sm:p-8 lg:p-10">
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">{project.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className={`px-3 py-1 rounded-full text-sm font-medium ${project.techColors[techIndex]}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <button
                      type="button"
                      aria-expanded={expandedProject === index}
                      onClick={() => setExpandedProject(expandedProject === index ? null : index)}
                      className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Icon name={expandedProject === index ? "chevron-up" : "chevron-down"} className="h-4 w-4 mr-2" />
                      {expandedProject === index ? 'Hide' : 'View'} Technical Details
                    </button>

                    {/* Collapsible Technical Details */}
                    {expandedProject === index && (
                      <div className="mt-6 p-6 bg-gray-50 rounded-xl border-l-4 border-blue-500 collapse-enter-active">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 collapsible-content">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3">
                              <Icon name="cogs" className="h-4 w-4 mr-2 text-blue-600" />
                              Specifications
                            </h4>
                            <ul className="space-y-1">
                              {project.technicalDetails.specifications.map((spec, specIndex) => (
                                <li key={specIndex} className="text-sm text-gray-600 flex items-center">
                                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 flex-shrink-0"></span>
                                  {spec}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3">
                              <Icon name="tools" className="h-4 w-4 mr-2 text-green-600" />
                              Tools Used
                            </h4>
                            <ul className="space-y-1">
                              {project.technicalDetails.tools.map((tool, toolIndex) => (
                                <li key={toolIndex} className="text-sm text-gray-600 flex items-center">
                                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2 flex-shrink-0"></span>
                                  {tool}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3">
                              <Icon name="trophy" className="h-4 w-4 mr-2 text-yellow-600" />
                              Achievements
                            </h4>
                            <ul className="space-y-1">
                              {project.technicalDetails.achievements.map((achievement, achievementIndex) => (
                                <li key={achievementIndex} className="text-sm text-gray-600 flex items-center">
                                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2 flex-shrink-0"></span>
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        
                        {/* Special content for Op-Amp project */}
                        {index === 0 && (
                          <div className="mt-6 p-4 bg-white rounded-lg border">
                            <h5 className="font-semibold text-gray-900 mb-3">
                              <Icon name="file" className="h-4 w-4 mr-2 text-red-600" />
                              IEEE DevIC 2025 Publication
                            </h5>
                            <p className="text-sm text-gray-600 mb-3">
                              "Low-Power CMOS Operational Amplifier Design in 45nm Technology" - 
                              D. Chowbey, R.K. Baruah
                            </p>
                            <div className="flex flex-wrap gap-3">
                              <a 
                                href="https://doi.org/10.1109/DevIC63749.2025.11012572"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-3 py-2 bg-red-600 text-white text-xs font-medium rounded hover:bg-red-700 transition-colors"
                              >
                                <Icon name="external-link" className="h-4 w-4 mr-1" />
                                View Paper (DOI)
                              </a>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
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
