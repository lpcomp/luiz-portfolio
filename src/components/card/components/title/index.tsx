const Title = ({ title }: { title: string }) => {
  return (
    <h5 className="w3-opacity">
      <b>{title}</b>
    </h5>
  );
};

export default Title;
