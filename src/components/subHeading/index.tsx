

const SubHeading = ({title, icon}: {title:string; icon:string;}) => {
  return (
    <p className="w3-large w3-text-theme">      
      <i className={`fa ${icon} fa-fw w3-margin-right w3-text-teal`} />
      <b>{title}</b>      
    </p>
  );
}

export default SubHeading;