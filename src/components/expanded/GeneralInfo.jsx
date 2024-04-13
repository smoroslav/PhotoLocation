import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectSelectedItem } from "../../redux/selectors";
import MetadataItem from "./MetadataItem";
import { useGeocodingNiceName } from "../../hooks/useGeocodingNiceName";
import useGeocodingGeneralInfo from "../../hooks/useGeocodingGeneralInfo";
import useFileSizeFormat from "../../hooks/useFileSizeFormat";
// import { useEffect } from "react";
const MetadataDiv = styled.div`
  width: 320px;
  min-height: 330px;
  position: relative;
  display: inline-block;
  overflow-x: hidden;
  overflow-y: auto;
  margin: 10px;
  margin-right: 0px;
  background: #242424;
  border: 1px solid #464646;
`;

const TitleDiv = styled.div`
  border-bottom: 1px solid #464646;
  background: #353535;
  line-height: 35px;
`;

export const GeneralInfo = () => {
  const item1 = useSelector(selectSelectedItem);
  const item = item1 ? item1 : {};
  const city = useGeocodingNiceName(item.geocoding);
  const { getDevice, getResolution, getGeolocation } =
    useGeocodingGeneralInfo();
  const device = getDevice(item.exif);
  const resolution = getResolution(item.exif);
  const location = getGeolocation(item.exif);
  const filesize = useFileSizeFormat(item.size);
  return (
    <MetadataDiv>
      <TitleDiv>General Info</TitleDiv>
      <MetadataItem key="City" value={city} name="City" />
      <MetadataItem key="Resolution" value={resolution} name="Resolution" />
      <MetadataItem key="File Size" value={filesize} name="File Size" />
      <MetadataItem key="Device" value={device} name="Device" />
      <MetadataItem key="File Name" value={item.name} name="File Name" />
      <MetadataItem key="Location" value={location} name="Location" />
      {/* <MetadataItem key={key} value={val} name={key} />; */}
    </MetadataDiv>
  );
};

export default GeneralInfo;
