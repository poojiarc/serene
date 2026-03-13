import { Shield, Microscope, Award, FlaskConical, CheckCircle2 } from "lucide-react";

const About = () => {
  return (
    <div>
      {/* Hero Banner */}
      <section className="relative py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-secondary-foreground mb-4">
            About Serene Derma
          </h1>
          <p className="text-secondary-foreground/80 font-body text-lg max-w-2xl mx-auto">
            A pharmaceutical company dedicated to dermatological and cosmetic solutions
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding bg-card">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/about-dermatology.jpg"
                alt="Dermatology consultation"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-primary font-heading font-semibold text-sm uppercase tracking-widest mb-3">Who We Are</p>
              <h2 className="font-heading text-3xl font-bold text-secondary mb-6">
                Empowering Life & Well-Being
              </h2>
              <div className="space-y-4 text-foreground/80 font-body leading-relaxed">
                <p>
                  Serene Derma is a pharmaceutical company focused on the marketing of Dermatological and Cosmetic pharmaceutical products for fulfilling all patient's needs. Serene Derma is built with dreams of empowering life and well-being.
                </p>
                <p>
                  It is a young, dynamic, and energetic company that has a multi-skilled team of professionals whose motto is "the height of success depends on the depth of desire".
                </p>
                <p>
                  Our business focuses on the marketing of Dermatological and Cosmetic segment pharmaceutical products, producing a wide range of quality, affordable medicines trusted by healthcare professionals and patients.
                </p>
                <p>
                  All our products are manufactured in WHO-GMP approved manufacturing facilities equipped with state-of-the-art equipment. Serene Derma is committed to supplying quality medications used for the treatment of various skin diseases, and we maintain a robust product portfolio across major therapeutic areas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="section-padding section-alt">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-primary font-heading font-semibold text-sm uppercase tracking-widest mb-3">Our Expertise</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-6">
              Dermatology Expertise
            </h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-6 text-foreground/80 font-body leading-relaxed">
            <p>
              At our dermatology pharmaceutical company, science and skin health come together under the guidance of experienced dermatologists. Founded and led by qualified skin specialists, our mission is to develop safe, effective, and clinically proven dermatological solutions that address real skin concerns with medical precision.
            </p>
            <p>
              Every product we create is the result of extensive dermatological research, rigorous clinical evaluation, and evidence-based formulation. Our team of dermatologists, scientists, and pharmaceutical experts work together to ensure each formula uses scientifically validated ingredients meeting the highest standards of safety, quality, and efficacy.
            </p>
            <p>
              We follow strict pharmaceutical manufacturing protocols and multi-stage testing procedures to guarantee authenticity and reliability. From laboratory research to clinical trials and dermatological testing, every stage of development is carefully monitored to ensure treatments deliver visible and trustworthy results.
            </p>
            <p className="text-primary font-semibold italic">
              Because healthy skin deserves solutions backed by science and tested by experts.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-card">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Microscope, title: "Clinical Research", desc: "Extensive dermatological research and evidence-based formulation" },
              { icon: Shield, title: "Quality Assurance", desc: "WHO-GMP approved facilities with multi-stage testing" },
              { icon: FlaskConical, title: "Science-Driven", desc: "Scientifically validated ingredients for proven results" },
              { icon: Award, title: "Expert Leadership", desc: "Founded and led by qualified dermatologists" },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-shadow duration-300 text-center"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon size={28} className="text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-secondary mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-body">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="section-padding section-alt">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-heading text-3xl font-bold text-secondary mb-8 text-center">Our Commitment</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Quality medications for skin diseases",
              "WHO-GMP approved manufacturing",
              "Clinically proven formulations",
              "Evidence-based dermatological solutions",
              "Affordable medicines for all",
              "Trusted by healthcare professionals",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 bg-card p-4 rounded-lg shadow-sm">
                <CheckCircle2 size={20} className="text-primary shrink-0" />
                <span className="text-foreground/80 font-body text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
