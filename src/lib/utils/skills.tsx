import Data from '@/lib/mocks/skills.json';

type SkillType = {
  title: string;
  skills: Array<string>;
};

interface Skills {
  languages: SkillType;
  frontEndLibs: SkillType;
  frontEndTools: SkillType;
  mobileDevelopment: SkillType;
  backEnd: SkillType;
  projectManagement: SkillType;
  projectVersioning: SkillType;
  others: SkillType;
}

const handleSkills = () => {
  const skillsData: Skills = Data;

  return (
    <>
      {Object.keys(skillsData).map((category) => {
        const skillCategory = skillsData[category as keyof Skills];
        return (
          <section key={category}>
            <h5 aria-label={category}>{skillCategory.title}</h5>
            <ul>
              {skillCategory.skills.map((skill, index) => (
                <li aria-label={skill} key={index}>
                  {skill}
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </>
  );
};

export default handleSkills;
