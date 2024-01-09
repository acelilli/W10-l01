import Alert from "react-bootstrap/Alert";

function Welcome() {
  return (
    <>
      {["success"].map((variant) => (
        <Alert key={variant} variant={variant} className="text-center">
          <h3>Check out for our Christmas sales!</h3>
        </Alert>
      ))}
    </>
  );
}

export default Welcome;
