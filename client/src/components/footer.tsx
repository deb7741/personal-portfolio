import Icon from "@/components/icon";
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-2xl font-bold mb-4">Debjyoti Chowbey</div>
          <p className="text-gray-300 mb-6">Electronics Engineer & Digital Design Specialist</p>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://github.com/deb7741" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
              <Icon name="github" className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com/in/debjyotichowbey" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
              <Icon name="linkedin" className="h-5 w-5" />
            </a>
            <a href="mailto:chowbeydebjyoti@gmail.com" aria-label="Email" className="text-gray-300 hover:text-white transition-colors">
              <Icon name="envelope" className="h-5 w-5" />
            </a>
            <a href="tel:+917586923485" aria-label="Phone" className="text-gray-300 hover:text-white transition-colors">
              <Icon name="phone" className="h-5 w-5" />
            </a>
          </div>
          <div className="border-t border-gray-600 pt-8">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Debjyoti Chowbey. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
