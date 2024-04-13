import Footer from "./footer/Footer";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectItems } from "../redux/selectors";
import MapView from "./map/MapView";
import { useSortByDate } from "../hooks/useSortByDate";
import Geocoding from "./Geocoding";

const ImageMetaDiv = styled.div`
  width: 100%;
`;

const FooterStyled = styled(Footer)`
  position: absolute;
  bottom: 0;
  z-index: 2;
`;

const MapDiv = styled.div`
  height: calc(100% - 218px);
  width: 100%;
  top: 0;
  z-index: 1;
  position: relative;
`;

const ImageMeta = () => {
  const items = useSelector(selectItems);
  const sorted = useSortByDate(items);

  return (
    <ImageMetaDiv>
      <MapDiv>
        <MapView items={sorted}></MapView>
      </MapDiv>
      {/* <Header></Header>
      <MapComponent></MapComponent>
      <PhotoViewer></PhotoViewer> */}
      <FooterStyled items={sorted} />
      <Geocoding />
    </ImageMetaDiv>
  );
};

export default ImageMeta;
