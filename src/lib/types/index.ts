type Cases = {
  title: string;
  description: string;
  link?: string;
  linkDesc?: string;
};

type Education = Experience & {

}

type Experience = {
  id: string;
  title: string;
  start_date: string;
  end_date: string;
  description: string;
  cases: Array<Cases>;
};

type ExperienceData = {
  experiences: Experience[];
};

type EducationData = {
  educations: Education[];
};

export type { ExperienceData, Experience, Cases, EducationData, Education };
