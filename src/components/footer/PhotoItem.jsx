import { Suspense, createRef, useEffect, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import LocationOffOutlined from "@mui/icons-material/LocationOff";
import CloseIcon from "@mui/icons-material/Close";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { IconButton, Tooltip } from "@mui/material";
import useAppActions from "../../redux/useAppActions";
import { useFileSizeFormat } from "../../hooks/useFileSizeFormat";
import { selectSelectedItemId } from "../../redux/selectors";
import { useSelector } from "react-redux";
import { useGeocodingNiceName } from "../../hooks/useGeocodingNiceName";

const CloseButton = styled(IconButton)`
  position: absolute !important;
  right: 0;
  top: 0;
  visibility: hidden;
`;
const PhotoItemDiv = styled.div`
  display: inline-block;
  margin-right: 12px;
  height: 198px;
  width: 365px;
  overflow: hidden;
  position: relative;
  border-radius: 8px;
  cursor: pointer;
  box-sizing: border-box;

  &:hover {
    ${({ selected }) =>
      selected ? "border: 4px solid #0bbcd9;" : "border: 4px solid #d3d3d3;"};
  }

  &:hover ${CloseButton} {
    visibility: visible;
  }

  ${({ selected }) => (selected ? "border: 4px solid #0bbcd9;" : "")};
`;

const PhotoImg = styled.img`
  width: 365px;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const FooterIcon = styled(PhotoCameraIcon)`
  width: 16px !important;
  position: absolute;
  left: 5px;
`;

const CloseIconIcon = styled(CloseIcon)`
  color: white;
  text-shadow: 2px 2px 2px #ff0000;
`;

const LocationOffIconIcon = styled(LocationOffOutlined)`
  position: absolute;
  left: 3px;
  top: 3px;
  color: #ff4545fa;
  visibility: ${({ location }) => (location ? "hidden" : "visible")};
`;

const PhotoFooter = styled.div`
  border-radius: 8px;
  cursor: pointer;
  color: #fff;
  font-size: 11px;
  position: absolute;
  line-height: normal;
  padding: 12px 0 6px;
  bottom: 0;
  left: 0;
  width: 100%;
  background-image: linear-gradient(
    transparent,
    transparent 20%,
    rgba(0, 0, 0, 0.1) 40%,
    rgba(0, 0, 0, 0.4) 60%,
    rgba(0, 0, 0, 0.6) 80%,
    rgba(0, 0, 0, 0.6)
  );
  text-indent: 6px;
  height: 15px;
  text-shadow: rgba(0, 0, 0, 0.7) 0 1px 8px;
`;

const FooterLabel = styled.label`
  display: block;
  cursor: pointer;
  vertical-align: middle;
  position: absolute;
  top: 16px;
  left: 150px;
  width: 130px;
  height: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
`;

const AddressLabel = styled.label`
  display: block;
  cursor: pointer;
  vertical-align: middle;
  position: absolute;
  top: 16px;
  left: 19px;
  width: 130px;
  height: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
`;

const SizeLabel = styled.label`
  display: block;
  cursor: pointer;
  vertical-align: middle;
  position: absolute;
  top: 16px;
  right: 8px;
  width: 45px;
  height: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: right;
`;

const Loading = () => {
  return <h2>🌀 Loading...</h2>;
};

const PhotoItem = ({
  id,
  name,
  dateTime,
  size,
  location,
  image,
  geocoding,
}) => {
  const { setDeleteItem, setHoveredItemId } = useAppActions();
  const sizeString = useFileSizeFormat(size);
  const selectedId = useSelector(selectSelectedItemId);
  const { setSelectedItemId } = useAppActions();
  const boxRef = createRef();
  const [footerLabelText, setFooterLabelText] = useState("");
  const niceName = useGeocodingNiceName(geocoding);

  const deleteItem = () => {
    setDeleteItem(id);
  };

  const handleOnClick = () => {
    setSelectedItemId(id);
  };
  useEffect(() => {
    if (id === selectedId) {
      boxRef.current.scrollIntoView();
    }
  }, [selectedId, boxRef, id]);

  const onMouseOverPhotoItem = (mouseOverPlayer) => {
    if (mouseOverPlayer) {
      setHoveredItemId(id);
    } else {
      setHoveredItemId(0);
    }
  };

  useEffect(() => {
    if (dateTime && dateTime != "") {
      setFooterLabelText(dateTime);
    } else {
      setFooterLabelText("No Data");
    }
  }, [dateTime]);

  return (
    <PhotoItemDiv
      ref={boxRef}
      selected={id === selectedId}
      onClick={handleOnClick}
      onMouseEnter={() => onMouseOverPhotoItem(true)}
      onMouseLeave={() => onMouseOverPhotoItem(false)}
    >
      <Suspense fallback={<Loading />}>
        <PhotoImg key={id} src={image} alt={name} loading="lazy" />
      </Suspense>
      {/* <Chip icon={<LocationOffOutlined />} variant="outlined" /> */}
      <Tooltip title="No GPS data" placement="right" arrow>
        <LocationOffIconIcon location={location} />
      </Tooltip>
      <CloseButton aria-label="close" onClick={deleteItem} size="small">
        <CloseIconIcon />
      </CloseButton>

      <PhotoFooter>
        <FooterIcon />
        <AddressLabel>{niceName}</AddressLabel>
        <FooterLabel>{footerLabelText}</FooterLabel>
        <SizeLabel>{sizeString}</SizeLabel>
      </PhotoFooter>
    </PhotoItemDiv>
  );
};

PhotoItem.defaultProps = {
  id: 0,
  name: "Name",
  dateTime: "",
  size: 0,
  location: undefined,
  image: "",
  geocoding: undefined,
};

PhotoItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  dateTime: PropTypes.string,
  size: PropTypes.number,
  location: PropTypes.shape({
    lat: PropTypes.number,
    lon: PropTypes.number,
  }),
  image: PropTypes.string,
  geocoding: PropTypes.object,
};

export default PhotoItem;
