import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectItems, selectSelectedItem } from "../redux/selectors";
import { useSortByDate } from "../hooks/useSortByDate";
import Geocoding from "./Geocoding";
import Sidebar from "./expanded/Sidebar";
import MapEmbedded from "./expanded/MapEmbedded";
import MetadataItem from "./expanded/MetadataItem";
import ImageViewer from "./expanded/ImageViewer";
import GeneralInfo from "./expanded/GeneralInfo";
import AccordionPanel from "./expanded/AccordionPanel";
import ExifData from "./expanded/ExifData";

const ImageMetaDiv = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
`;

const MapDiv = styled.div`
  width: 320px;
  min-height: 250px;
  position: relative;
  z-index: 1;
  display: block;
  margin: 0 10px;
`;

const RightDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-left: auto;
`;

const CenterDiv = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  //   margin-top: 10px;
  //   margin-left: 10px;
`;

const SidebarStyled = styled(Sidebar)`
  height: 100%;
`;

const LeftDiv = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
`;

const ImageDiv = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 10px;
  position: relative;
  display: flex;
  margin: auto;
`;

// const MetadataDiv = styled.div`
//   width: 320px;
//   height: 100%;
//   position: relative;
//   display: inline-block;
//   overflow-x: hidden;
//   overflow-y: auto;
//   margin: 10px;
//   margin-right: 0px;
//   background: #242424;
//   border: 1px solid #464646;
// `;

const ExpandedView = () => {
  const items = useSelector(selectItems);
  const sorted = useSortByDate(items);

  return (
    <ImageMetaDiv>
      {/* <Header></Header>
      <MapComponent></MapComponent>
      <PhotoViewer></PhotoViewer> */}
      <SidebarStyled items={sorted} />
      <CenterDiv>
        <LeftDiv>
          <ImageDiv>
            <ImageViewer />
          </ImageDiv>
        </LeftDiv>
        <RightDiv>
          <MapDiv>
            <MapEmbedded />
          </MapDiv>
          {/* <AccordionPanel /> */}
          <GeneralInfo></GeneralInfo>
          <ExifData />
        </RightDiv>
      </CenterDiv>
      <Geocoding />
    </ImageMetaDiv>
  );
};

export default ExpandedView;
