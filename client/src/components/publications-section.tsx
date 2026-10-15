import Icon, { type IconName } from "@/components/icon";

const publications = [
  {
    title: "A 45 nm Subthreshold CMOS Op-Amp with Adaptive Biasing for Ultra-Low Power Implantable Applications",
    authors: "D. Chowbey et al.",
    venue: "IEEE GCON 2026",
    status: "Published",
    doi: "10.1109/GCON69192.2026.11648889",
  },
  {
    title: "Low-Power CMOS Operational Amplifier Design in 45 nm Technology",
    authors: "D. Chowbey, R. K. Baruah",
    venue: "IEEE DevIC 2025",
    status: "Published",
    doi: "10.1109/DevIC63749.2025.11012572",
  },
  {
    title: "Trusted to Leak Secrets: Power and EM Side-Channel Key Recovery from TLS 1.3 on a Smart-Grid IED Representative Device",
    authors: "D. Chowbey et al.",
    venue: "IEEE Transactions on Smart Grid",
    status: "Under review",
  },
  {
    title: "IMPEDE: Ising-based Prime Factorization Circuit Using Current Coupling and Spin-Threshold Detection",
    authors: "Samarth ST, D. Chowbey et al.",
    venue: "AsianHOST 2026",
    status: "Submitted",
  },
  {
    title: "Energy-Efficient Ultrasound Receiver with Analog Envelope-Based Feature Extraction",
    authors: "S. Suvankar, D. Chowbey et al.",
    venue: "DATE 2027",
    status: "Submitted",
  },
] as { title: string; authors: string; venue: string; status: string; doi?: string }[];

const awards: { title: string; description: string; year: string; icon: IconName }[] = [
  { title: "Best B.Tech Thesis", description: "Dept. of ECE, Tezpur University", year: "2025", icon: "trophy" },
  { title: "GATE EC 2025 & 2026", description: "Qualified both years — 96th+ percentile", year: "2025–26", icon: "certificate" },
  { title: "Rank 4, ECE Department", description: "Top 5% of cohort, CGPA 8.06/10", year: "2025", icon: "medal" },
  { title: "2nd Place — IEEE Texplorer", description: "Oral research presentation, Tezpur University", year: "2025", icon: "award" },
];

const stats = [
  { value: "2", label: "Peer-reviewed papers", color: "text-blue-400" },
  { value: "3", label: "Under review / submitted", color: "text-green-400" },
  { value: "45–180 nm", label: "CMOS nodes", color: "text-yellow-400" },
  { value: "2.17 pJ", label: "Per spike (SNN neuron)", color: "text-purple-400" },
];

export default function PublicationsSection() {
  return (
    <section id="publications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold mb-4">Research &amp; Impact</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Publications and recognition</p>
        </div>

        <div className="mb-16 fade-in space-y-4">
          {publications.map((p) => (
            <article key={p.title} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 lg:p-8 border border-blue-100 flex gap-5">
              <div className="text-blue-600 mt-1 hidden sm:block">
                <Icon name="file" className="h-7 w-7" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${p.status === "Published" ? "bg-green-100 text-green-800" : "bg-amber-100 text-amber-800"}`}>
                    {p.status}
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">{p.venue}</span>
                </div>
                <h3 className="text-lg lg:text-xl font-bold mb-2 text-gray-900">{p.title}</h3>
                <p className="text-gray-600 mb-3">{p.authors}</p>
                {p.doi && (
                  <a
                    href={`https://doi.org/${p.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-blue-700 hover:underline"
                  >
                    <Icon name="external-link" className="h-4 w-4 mr-1" />
                    DOI: {p.doi}
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="fade-in">
          <h3 className="text-2xl font-semibold mb-8">Awards &amp; Recognition</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {awards.map((award) => (
              <div key={award.title} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                <div className="flex items-start">
                  <div className="text-blue-600 mr-4 mt-1">
                    <Icon name={award.icon} className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2 gap-3">
                      <h4 className="text-lg font-semibold text-gray-900">{award.title}</h4>
                      <span className="text-sm text-gray-500 font-medium shrink-0">{award.year}</span>
                    </div>
                    <p className="text-gray-700">{award.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 fade-in">
          <div className="bg-gray-800 text-white rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-8 text-center">At a Glance</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className={`text-3xl font-bold mb-2 ${s.color}`}>{s.value}</div>
                  <p className="text-gray-300">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
