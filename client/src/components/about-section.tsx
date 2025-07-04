export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a passionate developer with a strong background in creating innovative web solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 fade-in">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed mb-6">
                With over 5 years of experience in web development, I've had the privilege of working with 
                diverse clients and teams to bring digital visions to life. My journey started with a 
                Computer Science degree, but my passion for creating beautiful, user-centric applications 
                has driven me to continuously learn and adapt to new technologies.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                I specialize in full-stack development with a particular love for React, Node.js, and 
                modern web technologies. When I'm not coding, you'll find me exploring new design trends, 
                contributing to open-source projects, or mentoring aspiring developers.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I believe in writing clean, maintainable code and creating experiences that not only 
                look great but also perform exceptionally well. Every project is an opportunity to 
                learn something new and push the boundaries of what's possible on the web.
              </p>
            </div>
          </div>
          
          <div className="fade-in">
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <i className="fas fa-map-marker-alt text-blue-600 mr-3"></i>
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-graduation-cap text-blue-600 mr-3"></i>
                  <span>BS Computer Science</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-code text-blue-600 mr-3"></i>
                  <span>5+ Years Experience</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-coffee text-blue-600 mr-3"></i>
                  <span>Coffee Enthusiast</span>
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
