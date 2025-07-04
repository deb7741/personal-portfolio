export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Electronics Engineer with expertise in VLSI design, analog circuits, and precision digital systems
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 fade-in">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed mb-6">
                I'm a final year B.Tech student in Electronics and Communication Engineering at Tezpur University, 
                graduating in 2025 with a CGPA of 8.06. Currently working as a Research Assistant at the prestigious 
                Raman Research Institute on the SARAS 3 project, designing digital spectrometer backends for detecting 
                ultra-faint 21-cm signals from Cosmic Dawn.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                My expertise spans analog circuit design, VLSI systems, and digital signal processing. I have hands-on 
                experience with Cadence Virtuoso, MATLAB, Python, and FPGA design. I've published research on low-power 
                CMOS operational amplifier design and have been recognized with the "Best Project" award for my final 
                year thesis among 60 students.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Beyond academics, I've served as coordinator of the Astronomy Club, leading 200+ participants in 
                astrophotography sessions. I'm passionate about precision electronics, space research, and mentoring 
                fellow students in analog design fundamentals.
              </p>
            </div>
          </div>
          
          <div className="fade-in">
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <i className="fas fa-map-marker-alt text-blue-600 mr-3"></i>
                  <span>India</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-graduation-cap text-blue-600 mr-3"></i>
                  <span>B.Tech ECE, Tezpur University</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-award text-blue-600 mr-3"></i>
                  <span>CGPA: 8.06/10</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-telescope text-blue-600 mr-3"></i>
                  <span>Research @ Raman Research Institute</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-star text-blue-600 mr-3"></i>
                  <span>GATE EC 2025 Qualified</span>
                </div>
              </div>
              
              <div className="mt-8">
                <a href="#" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                  <i className="fas fa-download mr-2"></i>
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
