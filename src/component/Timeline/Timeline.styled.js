import styled from "styled-components";

export const Container = styled.div`
  margin-top: 18px;
  padding: 10px;
  min-height: 150px;
  overflow-x: auto;
  border-top: 1px solid #dadada;
  background-color: #dadada;
  position: relative;
  overflow-y: hidden;
  .activeContentScene {
    border: 1px solid blue;
  }
`;

export const ContentSceneVideo = styled.div`
  display: flex;
  align-items: center;
  height: 145px;
  margin-top: 20px;
`;

export const SceneItemVideo = styled.div`
  width: ${(props) => props.itemWidth}px;
  height: 100px;
  background-color: #fff;
  display: grid;
  place-items: center;
  position: relative;
  user-select: none;
  cursor: pointer;
  margin-right: 0.1rem;
`;

export const AddItemVideo = styled.div`
  min-width: 145px;
  height: 80px;
  background-color: #fff;
  display: grid;
  place-items: center;
  position: relative;
  user-select: none;
  cursor: pointer;
`;

//Marker

export const TimeLineMarkerContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  z-index: 180;
  left: ${(props) => (props.position ? props.position : 0)}px;
  top: 0;
  width: 2px;
  padding-left: 10px;
  transition: all 0.25s;
`;

export const TimeLineMarkerHeader = styled.div`
  display: inline-block;
  height: 0;
  width: 0;
  border-top: 15px solid #444;
  border-right: 15px solid transparent;
  border-left: 15px solid transparent;
  border-radius: 15px;
  transform: translateY(8px);
`;
export const TimeLineMarkerLine = styled.div`
  width: 2px;
  height: 250px;
  background: #444;
`;

export const TimeLineRowBtn = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

export const TimeLineBtn = styled.span`
  width: 25px;
  height: 25px;
  cursor: pointer;
  :hover {
    svg {
      opacity: 0.5;
    }
  }

  :active {
    transform: scale(0.9);
  }
  & svg {
    width: 25px;
    height: 25px;
  }
`;
