import styled from "styled-components";

export const Container = styled.div`
  width: 420px;
  background-color: #dadada;
  min-height: 320px;
  border-radius: 12px;
  padding: 12px;
  box-shadow: 0 0 12px 3px rgba(0, 0, 0, 0.15);
`;

export const MediaGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 40%);
  justify-content: center;
  grid-gap: 25px;
`;

export const VideoVignette = styled.video`
  width: 100%;
  height: fit-content;
  border-radius: 5px;
  background-color: #fff;
  display: flex;
`;

export const TextPresentation = styled.h2`
  text-transform: uppercase;
  margin-bottom: 1.3rem;
`;
