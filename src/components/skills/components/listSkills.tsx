
import { Skills } from '@/lib/types';
import Data from '@/lib/mocks/skills.json';
const skillsData: Skills = Data;

const ListSkills = () => {  

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

export default ListSkills;
