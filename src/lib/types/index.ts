type Cases = {
    title: string;
    description: string;
    link?: string;
    linkDesc?: string;
}

type Experience = {
    id: string;
    title: string;
    start_date: string;
    end_date: string;
    description: string;
    cases: Array<Cases>
}

type ExperienceData = {
    experiences: Experience[];
}

export type {
    ExperienceData,
    Experience,
    Cases
}