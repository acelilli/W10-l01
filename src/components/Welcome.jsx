import Alert from "react-bootstrap/Alert";

function Welcome(content4) {
  return (
    <>
      {["success"].map((variant) => (
        <Alert key={variant} variant={variant}>
          Check out for our Christmas sales!
        </Alert>
      ))}
    </>
  );
}

export default Welcome;
