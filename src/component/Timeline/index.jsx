import React, { useContext, useEffect, useRef } from "react";
import {
  Container,
  ContentSceneVideo,
  SceneItemVideo,
} from "./Timeline.styled";
import VideoEditingTimeline from "video-editing-timeline-react";
import ScenContext from "../../context/sceneContext";

const TimelineRender = () => {
  const { scene, setScene } = useContext(ScenContext);

  const config = {
    canvasWidth: 2000,
    canvasHeight: 30,
    minimumScale: 20,
    minimumScaleTime: 3,
  };
  const elementRef = useRef();

  useEffect(() => {
    let clickPosition = document.querySelectorAll(".contentScene");
    function getPositionClick(e) {
      const duration = Number(e.target.dataset.duration);
      const id = e.target.dataset.id;
      /*   console.log("layer", e.layerX);
      console.log("offset", e.offsetX);
      console.log("width", e.target.clientWidth); */

      let currentTime = (e.layerX / e.target.clientWidth) * duration;

      console.log("currentTime: " + currentTime);
      console.log(duration);

      let selectedScene = scene.scenes.find((s) => s.id == id);
      setScene((prevState) => ({
        ...prevState,
        currentScene: { ...selectedScene, currentTime },
      }));
    }
    clickPosition.forEach(function (element) {
      element.addEventListener("click", getPositionClick);

      return () => {
        element.removeEventListener("click", getPositionClick);
      };
    });
  }, [scene.scenes.length]);

  return (
    <Container>
      {/* <VideoEditingTimeline config={config} /> */}
      <ContentSceneVideo>
        {scene.scenes.length > 0 &&
          scene.scenes.map((s) => (
            <SceneItemVideo
              key={s.id}
              className="contentScene"
              ref={elementRef}
              data-duration={s.duration}
              data-id={s.id}
            ></SceneItemVideo>
          ))}
        <SceneItemVideo>ajouter</SceneItemVideo>
      </ContentSceneVideo>
    </Container>
  );
};

export default TimelineRender;
