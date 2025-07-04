import { useState } from 'react';

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Circuit Design",
      icon: "fas fa-microchip",
      skills: [
        { name: "Op-Amps", level: 95 },
        { name: "ADC/DAC", level: 85 },
        { name: "Bandgap References", level: 90 },
        { name: "LNAs", level: 80 },
        { name: "Filters", level: 85 }
      ]
    },
    {
      title: "EDA Tools",
      icon: "fas fa-tools",
      skills: [
        { name: "Cadence Virtuoso", level: 95 },
        { name: "Spectre", level: 90 },
        { name: "Quantus", level: 85 },
        { name: "ModelSim", level: 88 },
        { name: "Synopsys DC", level: 80 }
      ]
    },
    {
      title: "Programming",
      icon: "fas fa-code",
      skills: [
        { name: "Python", level: 90 },
        { name: "MATLAB", level: 95 },
        { name: "Verilog", level: 88 },
        { name: "SystemVerilog", level: 85 },
        { name: "SKILL", level: 80 }
      ]
    },
    {
      title: "Digital Design",
      icon: "fas fa-laptop-code",
      skills: [
        { name: "FPGA", level: 85 },
        { name: "RTL Design", level: 90 },
        { name: "FSMs", level: 88 },
        { name: "DSP", level: 85 },
        { name: "Mixed Signal", level: 82 }
      ]
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Circuit design, simulation tools, and programming languages I work with
          </p>
        </div>

        {/* Interactive Skills Overview */}
        <div className="mb-16 fade-in">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-center mb-8">Technical Expertise Overview</h3>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {skillCategories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(index)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all ${
                    selectedCategory === index
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <i className={`${category.icon} mr-2`}></i>
                  {category.title}
                </button>
              ))}
            </div>
            <div className="max-w-2xl mx-auto">
              <h4 className="text-xl font-semibold mb-6 text-center">
                {skillCategories[selectedCategory].title} Skills
              </h4>
              <div className="space-y-4">
                {skillCategories[selectedCategory].skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="fade-in">
              <div className="bg-white rounded-xl p-8 card-hover shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="text-blue-600 mr-4">
                    <i className={`${category.icon} text-3xl`}></i>
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Research & Technical Skills */}
        <div className="mt-16 fade-in">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-center">Research & Technical Competencies</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-blue-600 mb-3">
                  <i className="fas fa-satellite-dish text-4xl"></i>
                </div>
                <h4 className="font-semibold mb-2">Radio Astronomy</h4>
                <p className="text-gray-600 text-sm">SARAS 3 telescope backend design for 21-cm signal detection</p>
              </div>
              <div className="text-center">
                <div className="text-blue-600 mb-3">
                  <i className="fas fa-microscope text-4xl"></i>
                </div>
                <h4 className="font-semibold mb-2">VLSI Research</h4>
                <p className="text-gray-600 text-sm">Low-power analog circuit design and optimization</p>
              </div>
              <div className="text-center">
                <div className="text-blue-600 mb-3">
                  <i className="fas fa-users text-4xl"></i>
                </div>
                <h4 className="font-semibold mb-2">Leadership</h4>
                <p className="text-gray-600 text-sm">Astronomy Club coordination and STEM outreach</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}