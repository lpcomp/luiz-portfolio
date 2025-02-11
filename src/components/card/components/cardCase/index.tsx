import { Cases } from '@/lib/types';
import { Content } from './styles';

const CardCase = ({
  currentCases,
  openCases,
  id,
}: {
  currentCases: Array<Cases>;
  openCases: Array<string>;
  id: string;
}) => {
  return (
    <Content className='boxDadosPort'>
      {openCases.includes(id) &&
        currentCases.map((currentCase) => (
          <div className="dadosPort" key={currentCase.title}>
            <span className="tituPort">{currentCase.title}</span>
            <span className="descPort">{currentCase.description}</span>
            <a href={currentCase.link} target="_blank">
              <span className="linkPort">{currentCase.linkDesc}</span>
            </a>
          </div>
        ))}
    </Content>
  );
};

export default CardCase;
