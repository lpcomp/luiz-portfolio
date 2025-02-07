
import { ExperienceData } from '../../lib/types';
import experienceData from '../../lib/mocks/experiences.json';
import CardExpirence from "./components/cardExpirence";
const data: ExperienceData = experienceData;

const WorkExperience = () => {  

  return (
    <div className="w3-container w3-card w3-white w3-margin-bottom">
        <h2 className="w3-text-grey w3-padding-16">
            <i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>
            Work Experience
        </h2>
        {data.experiences.map((experience) => <CardExpirence experience={experience} />)}
    </div>
  );
}

export default WorkExperience;