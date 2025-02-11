import { ExperienceData } from '@/lib/types';
import Card from '@/components/card';
import experienceData from '@/lib/mocks/experiences.json';
const data: ExperienceData = experienceData;
import Title from '@/components/title';

const WorkExperience = () => {
  return (
    <section className="w3-container w3-card w3-white w3-margin-bottom wrap-section">
      <Title title='Work Experience' icon='fa-suitcase' />
      {data.experiences.map((experience) => (
        <Card data={experience} key={experience.id} />
      ))}
    </section>
  );
};

export default WorkExperience;
