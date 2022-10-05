import { createContext } from "react";

const ScenContext = createContext({
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

export const ScenContextProvider = ScenContext.Provider;

export default ScenContext;
