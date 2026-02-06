const Skills = () => {
  const skills = ["React", "Flutter", "Node.js", "MongoDB", "Firebase", "REST API"];

  return (
    <section id="skills" className="section dark">
      <h2>Skills</h2>
      <div className="skills">
        {skills.map((skill, index) => (
          <span key={index}>{skill}</span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
