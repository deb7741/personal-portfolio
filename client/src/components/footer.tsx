import Icon from "@/components/icon";
import { socials } from "@/lib/profile";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-2xl font-bold mb-4">Debjyoti Chowbey</div>
          <p className="text-gray-300 mb-6">Analog &amp; Mixed-Signal IC Design • Research Associate, IISc Bangalore</p>
          <div className="flex justify-center space-x-6 mb-8">
            {socials.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Icon name={link.icon} className="h-5 w-5" />
              </a>
            ))}
          </div>
          <div className="border-t border-gray-600 pt-8">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Debjyoti Chowbey. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
