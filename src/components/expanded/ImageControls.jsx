import { useSelector } from "react-redux";
import { useControls } from "react-zoom-pan-pinch";
import styled from "styled-components";
import { selectSelectedItem } from "../../redux/selectors";
import { useEffect } from "react";

const MapButton = styled.button`
  //   border-bottom-left-radius: 2px;
  //   border-bottom-right-radius: 2px;

  font: bold 22px "Lucida Console", Monaco, monospace;
  text-indent: 1px;
  width: 30px;
  height: 30px;
  line-height: 30px;

  font-size: 22px;
  border-radius: 0;

  background-color: #fff;
  border-bottom: 1px solid #ccc;
  display: block;
  text-align: center;
  text-decoration: none;
  color: black;
  padding: 0;
  border: none;
  border-bottom: 1px solid #ccc;

  &:hover {
    background-color: #f4f4f4;
    color: #535bf2;
  }
`;

const ControlsDiv = styled.div`
  position: absolute;
  z-index: 1;
  top: 10px;
  left: 10px;
  overflow: hidden;

  border: 2px solid rgba(0, 0, 0, 0.2);
  background-clip: padding-box;
  border-radius: 2px;
`;

const ImageControls = () => {
  const { zoomIn, zoomOut, resetTransform } = useControls();

  return (
    <ControlsDiv>
      <MapButton onClick={() => zoomIn()}>
        <span aria-hidden="true">+</span>
      </MapButton>
      <MapButton onClick={() => zoomOut()}>
        <span aria-hidden="true">-</span>
      </MapButton>
      <MapButton onClick={() => resetTransform()}>
        <span aria-hidden="true">x</span>
      </MapButton>
    </ControlsDiv>
  );
};

export default ImageControls;
