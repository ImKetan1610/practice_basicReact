import spinner from "./assets/spinner.gif";
import "./loading.css";

const Loading = () => {
  return (
    <div className="loading">
      <img width="180px" src={spinner} alt="Loading..." />
      <br />
      <h3>Loading...</h3>
    </div>
  );
};

export default Loading;

// className="text-center mx-auto"
