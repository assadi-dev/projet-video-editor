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
    function getPositionClick(e, i) {
      const duration = Number(e.target.dataset.duration);
      const id = e.target.dataset.id;
      let width = e.target.clientWidth;
      //console.log("layer", e.layerX);
      /*   console.log("layer", e.layerX);
      console.log("offset", e.offsetX);
      console.log("width", e.target.clientWidth); */

      let currentTime = (e.layerX / width) * duration;

      console.log("currentTime: " + currentTime);

      console.log(e.layerX);

      let selectedScene = scene.scenes.find((s) => s.id == id);
      setScene((prevState) => ({
        ...prevState,
        currentScene: { ...selectedScene, currentTime },
      }));

      setMarkerPosition(e.layerX + width * i);
      console.log(i);
    }
    clickPosition.forEach(function (element, i) {
      element.addEventListener("mouseup", (e) => getPositionClick(e, i));
      return () => element.removeEventListener("mouseup", getPositionClick);
    });
  }, [scene.scenes.length]);

  useEffect(() => {
    let scenContent = sceneParentRef.current;

    function setPosition(e) {
      setMarkerPosition(e.layerX);
    }
  }, []);

  return (
    <Container>
      {/* <VideoEditingTimeline config={config} /> */}
      <ContentSceneVideo ref={sceneParentRef}>
        <TimelineMarker position={markerPosition} />
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
