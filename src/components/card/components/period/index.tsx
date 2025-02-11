import isNotEmptyString from '@/lib/utils/isNotEmptyString';

const Period = ({ start, end }: { start: string; end: string }) => {
  return (
    <h6 className="w3-text-teal">
      <i className="fa fa-calendar fa-fw w3-margin-right"></i>
      {`${start} - `}
      <span
        className={`${isNotEmptyString(end) ? '' : 'w3-tag w3-teal'} w3-round`}
      >
        {isNotEmptyString(end) ? end : 'Current'}
      </span>
    </h6>
  );
};

export default Period;
