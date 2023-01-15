import spinner from "./assets/spinner.gif";

const Loading = () => {
  return (
    <div className="loading">
      <img width="180px" src={spinner} alt="Loading..." />
    </div>
  );
};

export default Loading;

// className="text-center mx-auto"
