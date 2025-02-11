import { Content } from "./styles";

const Description = ({
  description,
  casesLength,
  id,
  openCases,
  showOrHideCase,
}: {
  description: string;
  casesLength: number;
  id: string;
  openCases: string[];
  showOrHideCase: (id: string) => void;
}) => {
  return (
    <Content>
      <span className="descTxt">{description}</span>
      {casesLength !== 0 && (
        <div className="boxBtPlus" onClick={() => showOrHideCase(id)}>
          <i
            className={`fa fa-${openCases.includes(id) ? 'minus' : 'plus'}-square-o btPlus`}
          />
        </div>
      )}
    </Content>
  );
};

export default Description;
