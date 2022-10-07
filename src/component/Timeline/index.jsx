import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import {
  AddItemVideo,
  Container,
  ContentSceneVideo,
  SceneItemVideo,
  TimeLineBtn,
  TimeLineRowBtn,
} from "./Timeline.styled";
import VideoEditingTimeline from "video-editing-timeline-react";
import ScenContext from "../../context/sceneContext";
import TimelineMarker from "./TimelineMarker";
import { SplitIcone } from "../Icone/Timeline.icone";
import uuid from "react-uuid";
import { addToArrayPosition } from "../../utils/array";

const TimelineRender = () => {
  const { scene, setScene } = useContext(ScenContext);
  const [markerPosition, setMarkerPosition] = useState(0);
  const [currentElement, setCurrentElement] = useState({
    id: "",
    width: 0,
    mousePos: 0,
  });

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
      const id = e.target.dataset.splitId;
      const sceneId = e.target.dataset.sceneId;
      let width = e.target.clientWidth;
      let index = e.target.dataset.index;
      console.log("layer", e.layerX);
      /*   console.log("layer", e.layerX);
      console.log("offset", e.offsetX);*/
      console.log("width", width);

      let allWidthContent = [];

      for (let count = 0; count < clickPosition.length; count++) {
        if (index != count) {
          allWidthContent.push(e.target.clientWidth);
        }
      }
      let sumWidth = allWidthContent.reduce((a, b) => a + b);

      console.log("allWidth:" + sumWidth);

      //setMarkerPosition(e.layerX);

      let currentTime = (e.layerX / width) * duration;

      console.log("currentTime: " + currentTime);

      setCurrentElement({ id, width, mousePos: e.layerX });

      let selectedScene = scene.scenes.find((s) => s.id == sceneId);
      let currentSplit = selectedScene.split.find((s) => s.id == id);

      /**Mise à jours des element sur la collection des split */
      let updateScenes = scene.scenes.map((s) => {
        if (s.id == sceneId) {
          let currentSplit = s.split.find((s) => s.id == id);
          currentSplit.currentTime = currentTime;
        }
        return s;
      });
      // console.log("scene", updateScenes);
      setScene((prevState) => ({
        ...prevState,
        scenes: updateScenes,
        currentScene: { ...currentSplit, currentTime },
      }));
    }
    clickPosition.forEach(function (element, i) {
      element.addEventListener("mouseup", getPositionClick);
    });
    return () => {
      clickPosition.forEach(function (element, i) {
        element.removeEventListener("mouseup", getPositionClick);
      });
    };
  }, [scene.scenes]);

  const creatSplitElement = () => {};

  const splitScene = () => {
    const currentScene = sceneParentRef.current.querySelector(
      `div[data-id="${scene.currentScene.id}"]`
    );

    const { width, mousePos } = currentElement;
    console.log("Mouse", mousePos);
    console.log(width - mousePos);
    // currentScene.style.width = mousePos + "px";
    // creatSplitElement(width - mousePos);

    let splitPart = [];

    let selectedScene = scene.scenes.find(
      (s) => s.id == scene.currentScene.sceneId
    );
    let currentSplit = selectedScene.split.find(
      (s) => s.id == scene.currentScene.id
    );

    let elapseTimeSplit =
      scene.currentScene.duration - scene.currentScene.currentTime;

    splitPart = { ...currentSplit };
    splitPart.id = uuid();
    splitPart.currentTime = currentSplit.currentTime;
    splitPart.start = scene.currentScene.currentTime;
    splitPart.end = +elapseTimeSplit + scene.currentScene.currentTime;
    splitPart.duration = elapseTimeSplit;
    splitPart.width = width - mousePos;

    console.log(splitPart);
    currentSplit.width = mousePos;

    currentSplit.end = scene.currentScene.currentTime;
    currentSplit.duration = currentSplit.duration - elapseTimeSplit;

    console.log(currentSplit);

    let splitIndex = selectedScene.split.findIndex(
      (split) => split.id == scene.currentScene.id
    );

    let updateSplitScenes = addToArrayPosition(
      selectedScene.split,
      splitPart,
      splitIndex
    );

    let upDateScenes = scene.scenes.map((s) => {
      if (s.id == scene.currentScene.sceneId) {
        return { ...s, split: updateSplitScenes };
      }
      return s;
    });

    setScene((prevState) => ({
      ...prevState,
      scenes: upDateScenes,
      currentScene: { ...splitPart },
    }));
  };

  /**
   * Recuper et concate le moceaux des videos contenant dans les scenes
   */
  const joinSplit = useMemo(() => {
    let listSplits = [];
    let splits = [];
    if (scene.scenes) {
      splits = scene.scenes.map((s) => {
        s.split.map((s) => listSplits.push(s));
        return s.split;
      });
    }

    return listSplits;
  }, [scene.scenes, scene.currentScene]);

  return (
    <>
      <TimeLineRowBtn>
        <TimeLineBtn title="Fractionner" onClick={splitScene}>
          <SplitIcone />
        </TimeLineBtn>
      </TimeLineRowBtn>

      <Container>
        {/* <VideoEditingTimeline config={config} /> */}
        <TimelineMarker position={markerPosition} />
        <ContentSceneVideo ref={sceneParentRef}>
          {scene.scenes.length > 0 &&
            joinSplit.map((s, i) => (
              <SceneItemVideo
                key={s.id}
                className={`contentScene ${
                  s.id == scene.currentScene.id ? "activeContentScene" : ""
                }`}
                ref={elementRef}
                data-duration={s.duration}
                data-split-id={s.id}
                data-scene-id={s.sceneId}
                data-index={i}
                itemWidth={s.width}
              ></SceneItemVideo>
            ))}
          <AddItemVideo>ajouter</AddItemVideo>
        </ContentSceneVideo>
      </Container>
    </>
  );
};

export default TimelineRender;
