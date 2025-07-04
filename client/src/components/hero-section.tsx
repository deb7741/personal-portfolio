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
              Electronics Engineer & Digital Design Specialist
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              I'm passionate about precision electronics design and cutting-edge research. Currently working as a Research Assistant at Raman Research Institute on the SARAS 3 radio telescope project, designing digital spectrometer backends to detect ultra-faint cosmic signals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#portfolio" className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                View My Work
                <i className="fas fa-arrow-right ml-2"></i>
              </a>
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-600 hover:text-white transition-all">
                Get In Touch
              </a>
            </div>
            <div className="flex space-x-6 mt-8">
              <a href="https://github.com/deb7741" className="text-gray-600 hover:text-blue-600 transition-colors">
                <i className="fab fa-github text-2xl"></i>
              </a>
              <a href="https://linkedin.com/in/debjyotichowbey" className="text-gray-600 hover:text-blue-600 transition-colors">
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a href="mailto:chowbeydebjyoti@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                <i className="fas fa-envelope text-2xl"></i>
              </a>
              <a href="tel:+917586923485" className="text-gray-600 hover:text-blue-600 transition-colors">
                <i className="fas fa-phone text-2xl"></i>
              </a>
            </div>
          </div>
          <div className="fade-in flex justify-center lg:justify-end">
            <img 
              src="@assets/WhatsApp Image 2025-06-17 at 09.18.33_632750ac_1751659569827.jpg" 
              alt="Debjyoti Chowbey - Professional headshot" 
              className="rounded-2xl shadow-2xl w-80 h-80 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
