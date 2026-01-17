interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    title: "Analyst Trainee",
    company: "Data Analysis and Reporting Team, Hyderabad",
    period: "October 2024 - Present",
    description: "Working on Medicaid project specializing in data analysis and reporting with focus on federal report validation and data mart analysis. Validate federal reports and data mart integrity using Tableau by analyzing requirements and writing comprehensive functional test scenarios. Develop and execute Python scripts for loading data into staging and mart environments within Snowflake."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-card">
      <div className="container max-w-3xl mx-auto">
        <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
          Experience
        </p>
        
        <h2 className="section-heading">
          Where I've worked
        </h2>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="group"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-3">
                <h3 className="font-heading text-2xl text-foreground">
                  {exp.title}
                </h3>
                <span className="text-sm text-muted-foreground mt-1 sm:mt-0">
                  {exp.period}
                </span>
              </div>
              
              <p className="text-accent font-medium mb-3">
                {exp.company}
              </p>
              
              <p className="body-text">
                {exp.description}
              </p>
              
              {index < experiences.length - 1 && (
                <div className="mt-12 border-b border-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
