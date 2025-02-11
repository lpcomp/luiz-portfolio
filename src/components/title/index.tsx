
const Title = ({title, icon}: {title: string, icon: string}) => {
  return (
        <h2 className="w3-text-grey w3-padding-16">
            <i className={`fa ${icon} fa-fw w3-margin-right w3-xxlarge w3-text-teal`}></i>
            {title}
        </h2>
  );
}

export default Title;