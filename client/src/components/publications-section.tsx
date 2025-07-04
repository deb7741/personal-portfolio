export default function PublicationsSection() {
  const publications = [
    {
      title: "Low-Power CMOS Operational Amplifier Design in 45nm Technology",
      authors: "D. Chowbey, R.K. Baruah",
      venue: "IEEE Devices for Integrated Circuit (DevIC)",
      year: "2025",
      location: "Kalyani, India",
      doi: "10.1109/DevIC63749.2025.11012572",
      type: "Conference Paper",
      status: "Published",
      abstract: "This paper presents the design and optimization of a low-power two-stage operational amplifier in 45nm CMOS technology achieving 67 dB gain, 3.7 MHz GBW, and 2 V/µs slew rate under 10 µW power consumption."
    }
  ];

  const awards = [
    {
      title: "Best Project Award",
      description: "Final Year Thesis among 60 students in Class of 2025",
      category: "Academic Excellence",
      year: "2025",
      icon: "fas fa-trophy"
    },
    {
      title: "GATE EC 2025 Qualified", 
      description: "Qualified Graduate Aptitude Test in Engineering - Electronics",
      category: "National Examination",
      year: "2025",
      icon: "fas fa-certificate"
    },
    {
      title: "Top 5% in ECE Department",
      description: "Academic performance ranking in Electronics Engineering",
      category: "Academic Achievement",
      year: "2025",
      icon: "fas fa-medal"
    },
    {
      title: "2nd Place - IEEE Texplorer Research Fair",
      description: "Research presentation and technical innovation competition",
      category: "Research Competition",
      year: "2024",
      icon: "fas fa-award"
    }
  ];

  return (
    <section id="publications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold mb-4">Publications & Recognition</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Research contributions and academic achievements in electronics engineering
          </p>
        </div>

        {/* Publications */}
        <div className="mb-16 fade-in">
          <h3 className="text-2xl font-semibold mb-8">Research Publications</h3>
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium mr-3 ${
                        pub.status === 'Published' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {pub.status}
                      </span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                        {pub.type}
                      </span>
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">{pub.title}</h4>
                    <p className="text-gray-700 mb-2">
                      <span className="font-medium">Authors:</span> {pub.authors}
                    </p>
                    <p className="text-gray-600 mb-2">
                      <span className="font-medium">Published in:</span> {pub.venue}, {pub.location} ({pub.year})
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {pub.abstract}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href={`https://doi.org/${pub.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <i className="fas fa-external-link-alt mr-2"></i>
                    View Paper (DOI)
                  </a>
                  <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">
                    <i className="fas fa-quote-left mr-2"></i>
                    Cite
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Awards and Recognition */}
        <div className="fade-in">
          <h3 className="text-2xl font-semibold mb-8">Awards & Recognition</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {awards.map((award, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                <div className="flex items-start">
                  <div className="text-blue-600 mr-4 mt-1">
                    <i className={`${award.icon} text-2xl`}></i>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">{award.title}</h4>
                      <span className="text-sm text-gray-500 font-medium">{award.year}</span>
                    </div>
                    <p className="text-gray-700 mb-2">{award.description}</p>
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                      {award.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Research Metrics */}
        <div className="mt-16 fade-in">
          <div className="bg-gray-800 text-white rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-8 text-center">Research Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">1</div>
                <p className="text-gray-300">Published Papers</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">95%</div>
                <p className="text-gray-300">Op-Amp Efficiency</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400 mb-2">67dB</div>
                <p className="text-gray-300">Achieved Gain</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">10µW</div>
                <p className="text-gray-300">Power Consumption</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}