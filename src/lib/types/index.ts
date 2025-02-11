type SkillType = {
  title: string;
  skills: Array<string>;
};

type Skills = {
  languages: SkillType;
  frontEndLibs: SkillType;
  frontEndTools: SkillType;
  mobileDevelopment: SkillType;
  backEnd: SkillType;
  projectManagement: SkillType;
  projectVersioning: SkillType;
  others: SkillType;
}

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

type ContactItemProps = {
  icon: string;
  text: string;
  link?: string;
};

type ContactInfoComposition = {
  Item: React.FC<ContactItemProps>;
};

export type {
  Skills,
  ExperienceData, 
  Experience, 
  Cases, 
  EducationData, 
  Education, 
  ContactInfoComposition, 
  ContactItemProps 
};
