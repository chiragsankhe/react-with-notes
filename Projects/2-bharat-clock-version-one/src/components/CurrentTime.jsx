const CurrentTime = () => {
  let date = new Date();

  return (
    <p>
      <></>
      this is the Current time : {date.toLocaleDateString()} -{" "}
      {date.toLocaleTimeString()}.
    </p>
  );
};
export default CurrentTime;
