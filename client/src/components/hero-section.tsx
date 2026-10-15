import Icon from "@/components/icon";
import { socials } from "@/lib/profile";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-100 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Hi, I'm <span className="gradient-text">Debjyoti Chowbey</span>
            </h1>
            <h2 className="text-2xl lg:text-3xl text-gray-600 mb-6 font-light">
              Analog &amp; Mixed-Signal IC Design Researcher
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Research Associate at the Indian Institute of Science (IISc), Bangalore. I design analog and
              mixed-signal circuits — from subthreshold op-amps and SAR ADCs to current-mode Ising machines and
              silicon neurons — so that sensing and computation can happen in the analog domain, at the edge, at
              ultra-low power.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#portfolio" className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                View My Work
                <Icon name="arrow-right" className="h-4 w-4 ml-2" />
              </a>
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-600 hover:text-white transition-all">
                Get In Touch
              </a>
            </div>
            <div className="flex space-x-6 mt-8">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  {...(s.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Icon name={s.icon} className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
          <div className="fade-in flex justify-center lg:justify-end">
            <img
              src={`${import.meta.env.BASE_URL}headshot.webp`}
              alt="Debjyoti Chowbey"
              width={320}
              height={320}
              fetchPriority="high"
              className="rounded-2xl shadow-2xl w-64 h-64 sm:w-80 sm:h-80 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
