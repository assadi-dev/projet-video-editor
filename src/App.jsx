import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import OwnerMedia from "./component/OwnerMedia";
import PreviewVideo from "./component/PreviewVideo";
import TimelineRender from "./component/Timeline";
import uuid from "react-uuid";
import { ScenContextProvider } from "./context/sceneContext";

function App() {
  const [count, setCount] = useState(0);

  const [scene, setScene] = useState({
    projectName: "Projet Test",
    seek: 0,
    maxDuration: 0,
    scenes: [
      {
        id: "",
        name: "",
        duration: 0,
        start: 0,
        end: 0,
        currentTime: 0,
      },
    ],
    currentScene: {
      id: "",
      name: "",
      duration: 0,
      start: 0,
      end: 0,
      currentTime: 0,
    },
  });

  return (
    <div className="App">
      <ScenContextProvider value={{ scene, setScene }}>
        <div className="wrapperMedia">
          <div className="headerRow">
            <OwnerMedia updateSene />
            <PreviewVideo />
          </div>
        </div>
        <div className="workzone">
          <TimelineRender />
        </div>
      </ScenContextProvider>
    </div>
  );
}

export default App;
