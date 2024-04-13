import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectSelectedItem } from "../../redux/selectors";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import ImageControls from "./ImageControls";
import { useEffect, useRef } from "react";
// import { useEffect } from "react";

const PhotoImg = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: contain;
`;

export const ImageViewer = () => {
  const item = useSelector(selectSelectedItem);
  // const { resetTransform } = useControls();

  const transformComponentRef = useRef();

  const zoomToImage = () => {
    if (transformComponentRef.current) {
      const { resetTransform, centerView } = transformComponentRef.current;
      centerView();
      resetTransform();
    }
  };

  useEffect(() => {
    zoomToImage();
  }, [item]);

  return (
    item && (
      <TransformWrapper minScale={0.7} centerOnInit ref={transformComponentRef}>
        <ImageControls />
        <TransformComponent
          wrapperStyle={{
            width: "100%",
            height: "100%",
          }}
        >
          {item && (
            <PhotoImg
              key={item.id}
              src={item.image}
              alt={item.name}
              loading="lazy"
            />
          )}
        </TransformComponent>
      </TransformWrapper>
    )
  );
};

export default ImageViewer;
