import { useState } from 'react';
import { Experience } from '../../../../lib/types/index';
import isNotEmptyString from '../../../../lib/utils/isNotEmptyString';
import CardCase from '../cardCase';

const CardExpirence = ({ experience }: {experience: Experience}) => {
    const [openCases, setOpenCases] = useState<string[]>([]);
    
    const showOrHideCase = (id: string) => {

        setOpenCases((prevCases) => prevCases.includes(id) ?
            prevCases.filter((caseId) => caseId !== id) : [...prevCases, id]
        );
    }
                    
  return (
    <div className="w3-container">
        <h5 className="w3-opacity">
            <b>{experience.title}</b>
        </h5>
        <h6 className="w3-text-teal">
            <i className="fa fa-calendar fa-fw w3-margin-right"></i>{`${experience.start_date} - `}
            <span className={`${isNotEmptyString(experience.end_date) ? '' : 'w3-tag w3-teal'} w3-round`}>{isNotEmptyString(experience.end_date) ? experience.end_date : 'Current'}</span>
        </h6>
        <div className="wrap-text-description">
            <span className="descTxt">{experience.description}</span>
            {experience?.cases?.length !== 0 && (
                <div className="boxBtPlus" onClick={() => showOrHideCase(experience.id)}>
                    <i className={`fa fa-${openCases.includes(experience.id) ? 'minus' : 'plus'}-square-o btPlus`} />                    
                </div>
            )}            
        </div>

        <CardCase currentCases={experience.cases} openCases={openCases} id={experience.id} />
        <hr />
    </div>
  );
}

export default CardExpirence;