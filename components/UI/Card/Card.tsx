function Card(props: any) {
  const { variant, children, ...rest } = props;

  return (
    <div
      className={`rounded bg-blue-50 h-full  }`}>
      {children}
    </div>
  );
}

export default Card;
