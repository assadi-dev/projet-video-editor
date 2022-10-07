import React, { useContext } from "react";
import ScenContext from "../../context/sceneContext";
import { ListContainer, ListItem, ListTitleItem } from "./PreviewVideo.styled";

const PreviewVideo = () => {
  const { scene, setScene } = useContext(ScenContext);

  return (
    <div>
      PreviewVideo
      {scene.currentScene && (
        <div>
          <ListContainer>
            <ListItem>
              <ul>
                <li>
                  <ListTitleItem>ID: </ListTitleItem> {scene.currentScene.id}
                </li>
                <li>
                  <ListTitleItem>Nom: </ListTitleItem>
                  {scene.currentScene.name}
                </li>
                <li>
                  <ListTitleItem>Durée: </ListTitleItem>
                  {scene.currentScene.duration}
                </li>
                <li>
                  <ListTitleItem>Debut: </ListTitleItem>
                  {scene.currentScene.start}
                </li>
                <li>
                  <ListTitleItem>fin: </ListTitleItem>
                  {scene.currentScene.end}
                </li>
                <li>
                  <ListTitleItem>Durée Total: </ListTitleItem>
                  {scene.maxDuration}
                </li>
                <li>
                  <ListTitleItem>Seek: </ListTitleItem>
                  {scene.seek}
                </li>
                <li>
                  <ListTitleItem>Current time: </ListTitleItem>
                  {scene.currentScene.currentTime}
                </li>
              </ul>
            </ListItem>
          </ListContainer>
        </div>
      )}
    </div>
  );
};

export default PreviewVideo;
