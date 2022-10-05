import React, { useContext, useEffect, useRef, useState } from "react";
import {
  Container,
  ContentSceneVideo,
  SceneItemVideo,
} from "./Timeline.styled";
import VideoEditingTimeline from "video-editing-timeline-react";
import ScenContext from "../../context/sceneContext";
import TimelineMarker from "./TimelineMarker";

const TimelineRender = () => {
  const { scene, setScene } = useContext(ScenContext);
  const [markerPosition, setMarkerPosition] = useState(0);

  const config = {
    canvasWidth: 2000,
    canvasHeight: 30,
    minimumScale: 20,
    minimumScaleTime: 3,
  };
  const elementRef = useRef();
  const sceneParentRef = useRef();

  useEffect(() => {
    let clickPosition = document.querySelectorAll(".contentScene");
    function getPositionClick(e) {
      const duration = Number(e.target.dataset.duration);
      const id = e.target.dataset.id;
      let width = e.target.clientWidth + 2;
      let index = e.target.dataset.index;
      //console.log("layer", e.layerX);
      /*   console.log("layer", e.layerX);
      console.log("offset", e.offsetX);
      console.log("width", e.target.clientWidth); */

      let currentTime = (e.layerX / width) * duration;

      console.log("currentTime: " + currentTime);

      setMarkerPosition(e.layerX + width * index);

      let selectedScene = scene.scenes.find((s) => s.id == id);
      setScene((prevState) => ({
        ...prevState,
        currentScene: { ...selectedScene, currentTime },
      }));
    }
    clickPosition.forEach(function (element, i) {
      element.addEventListener("mouseup", getPositionClick);
      return () => element.removeEventListener("mouseup", getPositionClick);
    });
  }, [scene.scenes.length]);

  return (
    <Container>
      {/* <VideoEditingTimeline config={config} /> */}
      <ContentSceneVideo>
        <TimelineMarker position={markerPosition} />
        {scene.scenes.length > 0 &&
          scene.scenes.map((s, i) => (
            <SceneItemVideo
              key={s.id}
              className="contentScene"
              ref={elementRef}
              data-duration={s.duration}
              data-id={s.id}
              data-index={i}
            ></SceneItemVideo>
          ))}
        <SceneItemVideo>ajouter</SceneItemVideo>
      </ContentSceneVideo>
    </Container>
  );
};

export default TimelineRender;
