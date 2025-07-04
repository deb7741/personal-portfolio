export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Circuit Design",
      icon: "fas fa-microchip",
      skills: ["Op-Amps", "ADC/DAC", "Bandgap References", "LNAs", "Filters"]
    },
    {
      title: "EDA Tools",
      icon: "fas fa-tools",
      skills: ["Cadence Virtuoso", "Spectre", "Quantus", "ModelSim", "Synopsys DC"]
    },
    {
      title: "Programming",
      icon: "fas fa-code",
      skills: ["Python", "MATLAB", "Verilog", "SystemVerilog", "SKILL"]
    },
    {
      title: "Digital Design",
      icon: "fas fa-laptop-code",
      skills: ["FPGA", "RTL Design", "FSMs", "DSP", "Mixed Signal"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Circuit design, simulation tools, and programming languages I work with
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="fade-in">
              <div className="bg-white rounded-xl p-8 card-hover">
                <div className="text-blue-600 mb-4">
                  <i className={`${category.icon} text-3xl`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="skill-badge px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
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
