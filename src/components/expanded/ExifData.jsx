import { useSelector } from "react-redux";
import MetadataItem from "./MetadataItem";
import styled from "styled-components";
import { selectSelectedItem } from "../../redux/selectors";

const MetadataDiv = styled.div`
  width: 320px;
  height: calc(100% - 42px);
  position: relative;
  display: inline-block;
  overflow-x: hidden;
  overflow-y: auto;
  margin-right: 0px;
  background: #242424;
  //   border: 1px solid #464646;
`;

const MainDiv = styled.div`
  width: 320px;
  height: 100%;
  position: relative;
  display: inline-block;
  overflow-x: hidden;
  //   overflow-y: auto;
  margin: 10px;
  margin-right: 0px;
  background: #242424;
  border: 1px solid #464646;
  margin-top: 0;
`;

const TitleDiv = styled.div`
  border-bottom: 1px solid #464646;
  background: #353535;
  line-height: 35px;
`;

const ExifData = () => {
  const item = useSelector(selectSelectedItem);

  const metadataItems = () => {
    if (item && item.exif) {
      return Object.entries(item.exif)
        .sort()
        .map(([key, val]) => {
          // console.log(key);
          // console.log(val ? val.toString() : "");
          // console.log(!isNaN(val));

          if (!isNaN(val) || (typeof val != "object" && !Array.isArray(val))) {
            return <MetadataItem key={key} value={val} name={key} />;
          }
        });
    }

    return null;
  };

  return (
    <MainDiv>
      <TitleDiv>Exif Data</TitleDiv>
      <MetadataDiv>{metadataItems()}</MetadataDiv>
    </MainDiv>
  );
};

export default ExifData;
