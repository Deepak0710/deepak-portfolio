import { Award } from 'lucide-react';

interface Certification {
  name: string;
  issuer: string;
}

const certifications: Certification[] = [
  {
    name: "Data Analytics Essentials",
    issuer: "Cisco"
  },
  {
    name: "Data Structures and Algorithms",
    issuer: "NPTEL"
  },
  {
    name: "AI/ML Foundations",
    issuer: "Online Course"
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 px-6 bg-muted/30">
      <div className="container max-w-3xl mx-auto">
        <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
          Certifications
        </p>
        
        <h2 className="section-heading">
          Professional Credentials
        </h2>
        
        <div className="grid gap-6">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="flex items-center gap-4 p-4 rounded-lg bg-background border border-border"
            >
              <div className="p-2 rounded-full bg-accent/10">
                <Award className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-heading text-lg text-foreground">
                  {cert.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {cert.issuer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
