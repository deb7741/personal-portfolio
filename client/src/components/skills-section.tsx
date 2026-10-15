import { useState } from "react";
import Icon, { type IconName } from "@/components/icon";

const skillCategories: { title: string; icon: IconName; skills: string[] }[] = [
  {
    title: "Analog & Mixed-Signal",
    icon: "microchip",
    skills: [
      "Two-stage / subthreshold op-amps (45 nm)",
      "Variable-gain amplifier (180 nm)",
      "10-bit SAR ADC (180 nm)",
      "Current-mode circuits",
      "Full-custom layout",
      "PVT-corner & post-layout verification",
    ],
  },
  {
    title: "Neuromorphic & Analog Computing",
    icon: "laptop-code",
    skills: [
      "Current-mode Ising machines",
      "Spin-threshold detection",
      "Subthreshold I&F silicon neurons",
      "Translinear circuits",
      "Winner-Take-All networks",
      "Device-aware SNN modeling (snntorch)",
      "Monte-Carlo mismatch characterisation",
    ],
  },
  {
    title: "EDA & Digital",
    icon: "tools",
    skills: [
      "Cadence Virtuoso (ADE L/XL, Layout XL)",
      "Innovus",
      "Quantus",
      "Vivado / ISE",
      "Verilog RTL & synthesis",
      "Static timing analysis",
      "Clock-domain crossing",
      "RFSoC ZCU216",
    ],
  },
  {
    title: "Programming & Security",
    icon: "code",
    skills: ["Python", "MATLAB", "C", "Verilog HDL", "VHDL", "Linux", "Git", "EM / power side-channel analysis", "AES-128, TLS 1.3"],
  },
];

export default function SkillsSection() {
  const [selected, setSelected] = useState(0);
  const category = skillCategories[selected];

  return (
    <section id="skills" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50"></div>
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold mb-6">Skills &amp; Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Circuit design, EDA tools and programming I use day to day
          </p>
        </div>

        <div className="fade-in bg-white rounded-xl p-6 sm:p-10 shadow-lg">
          <div className="flex flex-wrap justify-center gap-3 mb-10" role="tablist">
            {skillCategories.map((c, index) => (
              <button
                key={c.title}
                type="button"
                role="tab"
                aria-selected={selected === index}
                onClick={() => setSelected(index)}
                className={`inline-flex items-center px-5 py-3 rounded-lg font-medium transition-all ${
                  selected === index ? "bg-blue-600 text-white shadow-lg" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <Icon name={c.icon} className="h-4 w-4 mr-2" />
                {c.title}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-3" role="tabpanel" aria-label={category.title}>
            {category.skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full bg-blue-50 text-blue-900 border border-blue-100 text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center fade-in">
          <p className="text-sm text-gray-500 mb-3">Relevant coursework</p>
          <p className="text-gray-700">Device Physics • Mixed-Signal Circuit Design • Digital System Design • DSP • VHDL</p>
        </div>
      </div>
    </section>
  );
}
