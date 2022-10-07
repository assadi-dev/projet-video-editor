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
      path: "",
      split: [
        {
          id: "",
          sceneId: "",
          name: "",
          start: 0,
          end: 0,
          currentTime: 0,
          width: 245,
          duration: 0,
        },
      ],
    },
  ],
  currentScene: {
    id: "",
    name: "",
    duration: 0,
    path: "",
    currentSplit: "",
    split: [
      {
        id: "",
        name: "",
        start: 0,
        end: 0,
        currentTime: 0,
        width: 245,
        duration: 0,
        sceneId: "",
      },
    ],
  },
});

export const ScenContextProvider = ScenContext.Provider;

export default ScenContext;
