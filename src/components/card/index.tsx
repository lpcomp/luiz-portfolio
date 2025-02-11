import { useState } from 'react';
import { Experience, Education } from '@/lib/types/index';
import Title from './components/title';
import Period from './components/period';
import Description from './components/description';
import CardCase from './components/cardCase';

type CardProps<T> = {
  data: T;
}

const Card = <T extends Experience | Education>({ data }: CardProps<T>) => {
  const [openCases, setOpenCases] = useState<string[]>([]);

  const showOrHideCase = (id: string) => {
    setOpenCases((prevCases) =>
      prevCases.includes(id)
        ? prevCases.filter((caseId) => caseId !== id)
        : [...prevCases, id]
    );
  };

  return (
    <div className="w3-container">
      <Title title={data.title} />
      <Period
        start={data.start_date}
        end={data.end_date}
      />
      <Description
        description={data.description}
        casesLength={data?.cases?.length}
        id={data.id}
        openCases={openCases}
        showOrHideCase={showOrHideCase}
      />
      <CardCase
        currentCases={data.cases}
        openCases={openCases}
        id={data.id}
      />
      <hr />
    </div>
  );
};

export default Card;
