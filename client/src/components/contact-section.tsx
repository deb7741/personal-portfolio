import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the form data to your backend
    // For now, we'll just show a success message
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Interested in collaboration or research opportunities? Let's connect and discuss exciting projects
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="fade-in">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">Send me a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    required 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleInputChange}
                    required 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    placeholder="Project Inquiry"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={5} 
                    value={formData.message}
                    onChange={handleInputChange}
                    required 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-blue-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  <i className="fas fa-paper-plane mr-2"></i>
                  Send Message
                </button>
              </form>
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="fade-in">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Let's connect</h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                  I'm always interested in research collaborations, internship opportunities, 
                  and exciting electronics projects. Whether you have questions about my work 
                  or want to discuss potential partnerships, feel free to reach out.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <i className="fas fa-envelope text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-gray-600">debjyoti.chowbey@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <i className="fas fa-phone text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-gray-600">+91 75869 23485</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <i className="fas fa-map-marker-alt text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-gray-600">India</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <i className="fas fa-clock text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold">Response Time</h4>
                    <p className="text-gray-600">Usually within 24 hours</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-8">
                <h4 className="font-semibold mb-4">Follow me</h4>
                <div className="flex space-x-4">
                  <a href="https://github.com/deb7741" 
                     className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://linkedin.com/in/debjyotichowbey" 
                     className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="mailto:debjyoti.chowbey@gmail.com" 
                     className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all">
                    <i className="fas fa-envelope"></i>
                  </a>
                  <a href="tel:+917586923485" 
                     className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all">
                    <i className="fas fa-phone"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
