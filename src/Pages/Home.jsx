import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
      <h2>Count</h2>
      <input 
      type="text" 
      placeholder="Enter your todo"
      />
      <button>Add Todo</button>
    </div>
  );
};

export default Home;
