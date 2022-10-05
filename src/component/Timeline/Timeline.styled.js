import styled from "styled-components";

export const Container = styled.div`
  margin-top: 18px;
  padding: 10px;
  min-height: 150px;
  overflow-x: auto;
  border-top: 1px solid #dadada;
  background-color: #dadada;
  .contentScene {
    border: 1px solid blue;
    width: 245px;
    height: 100px;
    margin-right: 0.1rem;
  }
`;

export const ContentSceneVideo = styled.div`
  display: flex;
  align-items: center;
  height: 145px;
  margin-top: 20px;
`;

export const SceneItemVideo = styled.div`
  min-width: 145px;
  height: 80px;
  background-color: #fff;
  display: grid;
  place-items: center;
  position: relative;
  user-select: none;
`;

//Marker

export const TimeLineMarkerContainer = styled.div`
  background: black;
`;
