function MainHeading({ p, h }: { p: string; h: string }) {
  return (
    <div className="main-heading">
      <p>{p}</p>
      <h4>{h}</h4>
    </div>
  );
}

export default MainHeading;
