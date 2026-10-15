import Icon, { type IconName } from "@/components/icon";
import { EMAIL } from "@/lib/profile";

const facts: { icon: IconName; text: string }[] = [
  { icon: "map-marker", text: "Bangalore, India" },
  { icon: "microchip", text: "Research Associate @ IISc Bangalore" },
  { icon: "graduation-cap", text: "B.Tech ECE, Tezpur University (2025)" },
  { icon: "award", text: "CGPA 8.06/10 — Rank 4 in Department" },
  { icon: "star", text: "GATE EC 2025 & 2026 — 96th+ percentile" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Analog and mixed-signal circuits for edge sensing and non-von-Neumann computing
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 fade-in">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed mb-6">
                I'm a Research Associate at the Circuits &amp; Security Research Lab (CSRL), DESE, Indian Institute of
                Science, working with Dr. Debayan Das. I design analog and mixed-signal integrated circuits — from
                transistor-level primitives to silicon-ready receive chains — and bring that circuit-design skill to
                emerging, non-von-Neumann computing architectures.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                In 45–180 nm CMOS I have worked on conventional signal paths (subthreshold op-amps, a variable-gain
                amplifier, a 10-bit SAR ADC for an ultrasound front-end) and on analog compute circuits (a current-mode
                Ising annealer, and LIF neurons and synapses for device-aware spiking neural networks). Before IISc, I
                built a 16K-point FFT spectrometer on an RFSoC for the SARAS radio-cosmology project at Raman Research
                Institute.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I graduated from Tezpur University in 2025, where my low-power 45 nm op-amp won the Best B.Tech Thesis
                award and led to two first-author IEEE papers. I'm now seeking a PhD at the intersection of
                mixed-signal design and analog computing.
              </p>
            </div>
          </div>

          <div className="fade-in">
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Quick Facts</h3>
              <ul className="space-y-4">
                {facts.map((f) => (
                  <li key={f.text} className="flex items-center">
                    <Icon name={f.icon} className="h-4 w-4 text-blue-600 mr-3" />
                    <span>{f.text}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <a
                  href={`mailto:${EMAIL}?subject=${encodeURIComponent("CV request")}`}
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Icon name="envelope" className="h-4 w-4 mr-2" />
                  Request my CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
