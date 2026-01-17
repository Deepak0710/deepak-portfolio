const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container max-w-3xl mx-auto">
        <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
          About
        </p>
        
        <h2 className="section-heading">
          A bit about me
        </h2>
        
        <div className="space-y-6 body-text text-lg">
          <p>
            Hello! I'm Deepak, a passionate data engineer with hands-on experience in 
            healthcare analytics, specializing in Medicaid project data analysis and reporting. 
            I focus on datamart testing, ensuring data integrity and quality across complex systems.
          </p>
          
          <p>
            Proficient in Python, SQL, and Snowflake with expertise in federal report validation 
            and data mart analysis. I have strong experience in requirements analysis, functional 
            testing, and ETL processes. I bridge the gap between data engineering and quality assurance.
          </p>
          
          <p>
            I also work with Tableau for data visualization and analysis, helping translate 
            complex data requirements into actionable insights. My background includes machine 
            learning projects and automation solutions, always striving to deliver data-driven results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
