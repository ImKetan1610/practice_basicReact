import React, { useState, useEffect } from "react";
import "./App.css";
import Loading from "./Components/Loading";
import Tours from "./Components/Tours";

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTours();
  }, []);

  const removeTours = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    try {
      let response = await fetch("https://course-api.com/react-tours-project");
      let data = await response.json();
      // console.log(data)
      setLoading(false);
      setTours(data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No Tours Available Right Now. Please Refresh the Page</h2>
          <button className="btn" onClick={() => fetchTours()}>
            Refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="App">
      <Tours tours={tours} removeTours={removeTours} />
    </main>
  );
}

export default App;
