interface SkillCategory {
  category: string;
  items: string[];
}

const skillCategories: SkillCategory[] = [
  {
    category: "Programming & Analytics",
    items: ["Python (Pandas, NumPy, Scikit-learn)", "SQL", "ETL Processes"]
  },
  {
    category: "Data Visualization",
    items: ["Tableau", "Excel", "Jupyter Notebooks"]
  },
  {
    category: "Database & Cloud",
    items: ["Snowflake", "MySQL", "PostgreSQL"]
  },
  {
    category: "Testing & Domain",
    items: ["Requirements Analysis", "Functional Testing", "Data Mart Analysis", "Federal Report Validation", "Medicaid Analytics"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="container max-w-3xl mx-auto">
        <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
          Skills
        </p>
        
        <h2 className="section-heading">
          What I work with
        </h2>
        
        <div className="grid sm:grid-cols-2 gap-12">
          {skillCategories.map((category, index) => (
            <div key={index}>
              <h3 className="font-heading text-xl text-foreground mb-4">
                {category.category}
              </h3>
              
              <ul className="space-y-2">
                {category.items.map((skill, skillIndex) => (
                  <li 
                    key={skillIndex}
                    className="text-muted-foreground flex items-center gap-3"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
