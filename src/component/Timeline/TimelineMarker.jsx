import React from "react";
import {
  TimeLineMarkerContainer,
  TimeLineMarkerHeader,
  TimeLineMarkerLine,
} from "./Timeline.styled";

const TimelineMarker = ({ position }) => {
  return (
    <TimeLineMarkerContainer position={position}>
      <TimeLineMarkerHeader />
      <TimeLineMarkerLine />
    </TimeLineMarkerContainer>
  );
};

export default TimelineMarker;
