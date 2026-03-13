import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Name: ${form.name}%0AEmail: ${form.email}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/917893084227?text=${text}`, "_blank");
  };

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-secondary-foreground mb-4">
            Contact Us
          </h1>
          <p className="text-secondary-foreground/80 font-body text-lg max-w-2xl mx-auto">
            Get in touch with Serene Derma Pharmaceuticals
          </p>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info + Map */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-secondary mb-6">Get In Touch</h2>
              <div className="space-y-5 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Phone size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-body">Phone</p>
                    <a href="tel:+917893084227" className="text-secondary font-heading font-semibold hover:text-primary transition-colors">
                      +91 7893084227
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-body">Email</p>
                    <a href="mailto:serenedermapharmaceutical@gmail.com" className="text-secondary font-heading font-semibold hover:text-primary transition-colors break-all text-sm">
                      serenedermapharmaceutical@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-body">Address</p>
                    <p className="text-secondary font-heading font-semibold">
                      LVS Heights, Bidrahalli, Bangalore – 560049
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-xl overflow-hidden shadow-md h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0!2d77.7!3d13.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBidrahalli%2C+Bangalore!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Serene Derma Location"
                />
              </div>
            </div>

            {/* Form */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-secondary mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-heading font-medium text-secondary mb-1.5">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-heading font-medium text-secondary mb-1.5">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-heading font-medium text-secondary mb-1.5">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-accent text-primary-foreground px-8 py-3 rounded-lg font-heading font-semibold transition-all duration-300 shadow-md hover:shadow-lg w-full justify-center"
                >
                  <Send size={16} />
                  Send via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
