import { useState } from "react";
import Icon, { type IconName } from "@/components/icon";

interface Project {
  title: string;
  where: string;
  period: string;
  icon: IconName;
  accent: string;
  description: string;
  technologies: string[];
  details: { heading: string; icon: IconName; items: string[] }[];
}

const projects: Project[] = [
  {
    title: "Device-Aware Spiking Neural Networks",
    where: "IISc Bangalore",
    period: "Aug 2026 — Present",
    icon: "microchip",
    accent: "from-violet-600 to-indigo-600",
    description:
      "Characterised a subthreshold neuron and current-mode synapse in 180 nm CMOS, injected the measured non-idealities into a 2-layer SNN on MNIST, and recovered almost all of the lost accuracy with hardware-aware retraining.",
    technologies: ["180 nm CMOS", "Cadence Virtuoso", "Python / snntorch"],
    details: [
      {
        heading: "Circuit results",
        icon: "cogs",
        items: ["2.17 pJ/spike", "8.5% neuron mismatch", "23.3% synapse mismatch", "~3.5-bit effective weights"],
      },
      {
        heading: "Network results",
        icon: "trophy",
        items: ["Ideal 97.51% → silicon 87.81%", "9.36 of 9.70 points recovered", "97.17% ± 0.30% final accuracy", "5 held-out mismatch realisations"],
      },
    ],
  },
  {
    title: "Analog Ising Machine",
    where: "IISc Bangalore",
    period: "2026",
    icon: "laptop-code",
    accent: "from-fuchsia-600 to-purple-600",
    description:
      "Current-mode CMOS primitives in 65 nm that map NP-hard combinatorial problems — 3-SAT, Max-Cut and prime factorization — onto circuit dynamics, using current coupling and spin-threshold detection.",
    technologies: ["65 nm CMOS", "Current-mode", "Spin-threshold detection"],
    details: [
      { heading: "Problems mapped", icon: "cogs", items: ["3-SAT", "Max-Cut", "Prime factorization"] },
      { heading: "Output", icon: "file", items: ["IMPEDE — submitted to AsianHOST 2026"] },
    ],
  },
  {
    title: "Ultrasound Analog Front-End",
    where: "IISc Bangalore",
    period: "2026 — Present",
    icon: "microchip",
    accent: "from-sky-600 to-blue-600",
    description:
      "Designing the receive signal chain of a low-power ultrasound imaging front-end in 180 nm CMOS: a variable-gain amplifier and a 10-bit SAR ADC.",
    technologies: ["180 nm CMOS", "VGA", "10-bit SAR ADC"],
    details: [
      { heading: "Blocks", icon: "cogs", items: ["Variable-Gain Amplifier", "10-bit SAR ADC"] },
      { heading: "Output", icon: "file", items: ["Energy-efficient receiver with analog envelope-based feature extraction — submitted to DATE 2027"] },
    ],
  },
  {
    title: "16K-Point FFT Spectrometer",
    where: "Raman Research Institute — SARAS",
    period: "Jul 2025 — Jan 2026",
    icon: "telescope",
    accent: "from-emerald-600 to-teal-600",
    description:
      "Full-precision 16K-point spectrometer on a Xilinx RFSoC ZCU216 using a parallel FFT architecture in Verilog, built to recover the faint spectral signature of neutral hydrogen from the early universe.",
    technologies: ["Verilog", "RFSoC ZCU216", "Parallel FFT"],
    details: [
      { heading: "Highlights", icon: "cogs", items: ["16,384-point full-precision FFT", "RF data-acquisition chain", "21-cm cosmology backend"] },
    ],
  },
  {
    title: "Low-Power Two-Stage Op-Amp (45 nm)",
    where: "Tezpur University",
    period: "Sep 2024 — May 2025",
    icon: "award",
    accent: "from-blue-600 to-indigo-700",
    description:
      "Full-custom op-amp addressing short-channel effects and gate leakage in 45 nm, verified post-layout across all PVT corners. Best B.Tech Thesis, Class of 2025, and the basis for two first-author IEEE papers.",
    technologies: ["45 nm CMOS", "Cadence Virtuoso", "Quantus"],
    details: [
      { heading: "Specifications", icon: "cogs", items: ["DC gain: 67 dB", "GBW: 3.7 MHz", "Power: < 10 µW"] },
      { heading: "Recognition", icon: "trophy", items: ["Best B.Tech Thesis 2025", "IEEE DevIC 2025", "IEEE GCON 2026"] },
    ],
  },
  {
    title: "CCD Sensor Characterisation",
    where: "Tezpur University",
    period: "May 2024 — Jun 2024",
    icon: "telescope",
    accent: "from-amber-500 to-orange-600",
    description:
      "Characterised dark current, thermal noise and hot-pixel distributions, and built an automated Python calibration pipeline improving low-light signal fidelity.",
    technologies: ["Python", "Image Sensors", "Noise Analysis"],
    details: [
      { heading: "Pipeline", icon: "cogs", items: ["Dark-current mapping", "Thermal-noise profiling", "Hot-pixel detection", "Automated calibration"] },
    ],
  },
];

export default function PortfolioSection() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative">
      <div className="absolute inset-0 bg-white/60"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold mb-4">Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Circuits, systems and research I've built
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <article key={project.title} className="fade-in bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col">
              <div className={`bg-gradient-to-r ${project.accent} px-6 py-5 text-white flex items-center gap-4`}>
                <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center">
                  <Icon name={project.icon} className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-white/80">{project.where} • {project.period}</p>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>
              </div>
              <div className="p-6 sm:p-8 flex flex-col flex-1">
                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-800">
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  aria-expanded={expanded === index}
                  onClick={() => setExpanded(expanded === index ? null : index)}
                  className="mt-auto self-start inline-flex items-center px-5 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Icon name={expanded === index ? "chevron-up" : "chevron-down"} className="h-4 w-4 mr-2" />
                  {expanded === index ? "Hide" : "View"} Details
                </button>

                {expanded === index && (
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 p-5 bg-gray-50 rounded-xl border-l-4 border-blue-500">
                    {project.details.map((d) => (
                      <div key={d.heading}>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <Icon name={d.icon} className="h-4 w-4 mr-2 text-blue-600" />
                          {d.heading}
                        </h4>
                        <ul className="space-y-1">
                          {d.items.map((item) => (
                            <li key={item} className="text-sm text-gray-600 flex items-start">
                              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
