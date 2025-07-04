export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-2xl font-bold mb-4">Debjyoti Chowbey</div>
          <p className="text-gray-300 mb-6">Electronics Engineer & Digital Design Specialist</p>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://github.com/deb7741" className="text-gray-300 hover:text-white transition-colors">
              <i className="fab fa-github text-xl"></i>
            </a>
            <a href="https://linkedin.com/in/debjyotichowbey" className="text-gray-300 hover:text-white transition-colors">
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a href="mailto:debjyoti.chowbey@gmail.com" className="text-gray-300 hover:text-white transition-colors">
              <i className="fas fa-envelope text-xl"></i>
            </a>
            <a href="tel:+917586923485" className="text-gray-300 hover:text-white transition-colors">
              <i className="fas fa-phone text-xl"></i>
            </a>
          </div>
          <div className="border-t border-gray-600 pt-8">
            <p className="text-gray-400 text-sm">
              © 2025 Debjyoti Chowbey. All rights reserved. Built with ❤️ and hosted on GitHub Pages.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
