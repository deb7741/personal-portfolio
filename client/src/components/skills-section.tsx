import { useState } from 'react';
import Icon, { type IconName } from "@/components/icon";

export default function SkillsSection() {
  const skillCategories: { title: string; icon: IconName; skills: { name: string; level: number }[] }[] = [
    {
      title: "Circuit Design",
      icon: "microchip",
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
      icon: "tools",
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
      icon: "code",
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
      icon: "laptop-code",
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
    <section id="skills" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50"></div>
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-20 fade-in">
          <h2 className="text-4xl font-bold mb-6">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Circuit design, simulation tools, and programming languages I work with
          </p>
        </div>

        {/* Interactive Skills Overview */}
        <div className="mb-16 fade-in">
          <div className="bg-white rounded-xl p-10 shadow-lg">
            <h3 className="text-2xl font-semibold text-center mb-8">Technical Expertise Overview</h3>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {skillCategories.map((category, index) => (
                <button
                  key={index}
                  type="button"
                  aria-pressed={selectedCategory === index}
                  onClick={() => setSelectedCategory(index)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all ${
                    selectedCategory === index
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Icon name={category.icon} className="h-4 w-4 mr-2 -mt-0.5" />
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
                      <span className="text-sm text-gray-500 font-semibold">{skill.level}%</span>
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="fade-in">
              <div className="bg-white rounded-xl p-6 card-hover shadow-lg h-full">
                <div className="flex flex-col items-center text-center mb-4">
                  <div className="text-blue-600 mb-3">
                    <Icon name={category.icon} className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="text-center">
                      <span className="text-xs font-medium text-gray-700 block mb-1 skill-progress-text">{skill.name}</span>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-500 mt-1 block skill-progress-text font-semibold">{skill.level}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}