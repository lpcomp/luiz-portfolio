import Title from "@/components/title";
import Card from "@/components/card";
import { EducationData } from "@/lib/types";
import educationsData from '@/lib/mocks/educations.json';
const data: EducationData = educationsData;


const Education = () => {
  return (
    <section className="w3-container w3-card w3-white wrap-section">
      <Title title='Education' icon='fa-certificate' />
      {data.educations.map((education) => (
        <Card data={education} key={education.id} />
      ))}
    </section>
  );
}

export default Education;