import React from "react";
import bio from "./assets/bio.jpg";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="HeaderImage">
        <h1 className="HeaderTitle">Michel Gasco</h1>
        <img src={bio} />
      </div>
      <div className="Section">
        <h1 className="SectionHeader">Biography</h1>
      </div>
    </div>
  );
};

export default App;
