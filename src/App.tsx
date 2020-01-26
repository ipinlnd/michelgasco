import React from "react";
import header from "./assets/bio.jpg";
import bio from "./assets/contact.jpg";
import music from "./assets/music.jpg";
import documentaries from "./assets/documentaries.jpg";
import concerts from "./assets/concerts.jpg";
import "./App.css";
import { loremIpsum } from "./texts";

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="HeaderImage">
        <h1 className="HeaderTitle">Michel Gasco</h1>
        <img src={header} />
      </div>
      <div className="Row">
        <div className="Section1">
          <img className="BackImage" src={bio} />
          <h1>Biography</h1>
          <div>
            <p>{loremIpsum}</p>
            <button>Read More</button>
          </div>
        </div>
        <div className="Section2">
          <img className="BackImage" src={music} />
          <h1>Music</h1>
          <div>
            <p>{loremIpsum}</p>
            <button>Read More</button>
          </div>
        </div>
      </div>
      <div className="Row">
        <div className="Section2">
          <img className="BackImage" src={documentaries} />
          <h1>Documentaries</h1>
          <div>
            <p>{loremIpsum}</p>
            <button>Read More</button>
          </div>
        </div>
        <div className="Section1">
          <img className="BackImage" src={concerts} />
          <h1>Concerts and news</h1>
          <div>
            <p>{loremIpsum}</p>
            <button>Read More</button>
          </div>
        </div>
      </div>
      <div className="Contact">
        <h1>Contact</h1>
        <h2>Email: micheloblues@yahoo.es</h2>
      </div>
    </div>
  );
};

export default App;
