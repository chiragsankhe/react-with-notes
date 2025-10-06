const ErrorMessage = ({ foodItems, name }) => {
  return (
    <>
      {foodItems.length === 0 ? (
        <p className="text-danger"> {name} still hungry.</p>
      ) : (
        <p className="text-success">
          {/* {foodItems.join(", ") */}
           {name}, like this food 😋 
        </p>
      )}
    </>
  );
};

export default ErrorMessage;
