import React, { useContext, useEffect, useRef, useState } from "react";
import {
  Container,
  MediaGridContainer,
  TextPresentation,
  VideoVignette,
} from "./OwnerMedia.styled";
import uuid from "react-uuid";
import ScenContext from "../../context/sceneContext";
import { sleep } from "../../utils/times";

const OwnerMedia = () => {
  const videoRef = useRef();

  const playVideo = (e) => {
    e.target.play();
  };

  const stopVideo = (e) => {
    e.target.pause();
    e.target.currentTime = 0;
  };

  const { scene, setScene } = useContext(ScenContext);
  const media = ["/videos/A_large_rock_waterfall.mp4", "/videos/DJI_0325.mp4"];
  const [isLoading, setIstLoading] = useState(true);

  useEffect(() => {
    // const VideoNodes = videoRef.current.querySelectorAll("video");

    let initScene = [];

    media.map((element, i) => {
      let video = document.createElement("video");
      video.src = element;
      video.preload = "metadata";
      video.onloadedmetadata = (event) => {
        const target = event.target;
        const duration = target.duration;
        const path = target.attributes.src.textContent;

        initScene = [
          ...initScene,
          {
            id: uuid(),
            name: "video-" + i,
            start: 0,
            duration,
            path: path,
            end: duration,
            currentTime: 0,
          },
        ];
        let totalDuration = initScene.map((s) => s.duration);
        let sumDuration = totalDuration.reduce((a, b) => a + b);

        setScene({
          ...scene,
          scenes: [...initScene],
          currentScene: initScene[0],
          maxDuration: sumDuration,
        });
      };
    });
  }, []);

  return (
    <Container>
      <TextPresentation>Mes Fichiers</TextPresentation>

      <MediaGridContainer ref={videoRef}>
        {media.length > 0 &&
          media.map((m, i) => (
            <VideoVignette
              key={i}
              muted={true}
              onMouseEnter={playVideo}
              src={m}
              type="video/mp4"
              onMouseLeave={stopVideo}
            ></VideoVignette>
          ))}
      </MediaGridContainer>
    </Container>
  );
};

export default OwnerMedia;
