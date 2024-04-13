import { createRef, useEffect, useState } from "react";
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
import { PhotoItemStruct } from "../footer/PhotoItemStruct";
import { useGeocodingNiceName } from "../../hooks/useGeocodingNiceName";

const CloseButton = styled(IconButton)`
  position: absolute !important;
  right: 0;
  top: 0;
  visibility: hidden;
`;
const PhotoItemDiv = styled.div`
  display: block;
  height: 200px;
  width: 290px;
  overflow: hidden;
  position: relative;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 8px;
  border: 2px solid #9d9d9d;
  color: #fff;
  font-size: 11px;
  background-image: linear-gradient(
    transparent,
    transparent 20%,
    rgba(0, 0, 0, 0.1) 40%,
    rgba(0, 0, 0, 0.4) 60%,
    rgba(0, 0, 0, 0.6) 80%,
    rgba(0, 0, 0, 0.6)
  );

  &:hover {
    ${({ selected }) =>
      selected ? "border: 2px solid #0bbcd9;" : "border: 2px solid #d3d3d3;"};
  }

  &:hover ${CloseButton} {
    visibility: visible;
  }

  ${({ selected }) => (selected ? "border: 2px solid #0bbcd9;" : "")};
`;

const PhotoImg = styled.img`
  width: 290px;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const ImageDiv = styled.div`
  width: 290px;
  height: 160px;
  position: relative;
  overflow: hidden;
`;

const FooterIcon = styled(PhotoCameraIcon)`
  width: 16px !important;
  position: absolute;
  left: 5px;
  bottom: 5px;
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
  bottom: 5px;
  right: 8px;
  width: 130px;
  height: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: right;
`;

const AddressLabel = styled.label`
  display: block;
  cursor: pointer;
  vertical-align: middle;
  position: absolute;
  bottom: 5px;
  left: 19px;
  width: 130px;
  height: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
`;

// const SizeLabel = styled.label`
//   display: block;
//   cursor: pointer;
//   vertical-align: middle;
//   position: absolute;
//   top: 16px;
//   right: 8px;
//   width: 45px;
//   height: 15px;
//   overflow: hidden;
//   text-overflow: ellipsis;
//   text-align: right;
// `;

// const Loading = () => {
//   return <h2>🌀 Loading...</h2>;
// };

const SidePhotoItem = ({ item }) => {
  const { setDeleteItem, setHoveredItemId } = useAppActions();
  const sizeString = useFileSizeFormat(item.size);
  const selectedId = useSelector(selectSelectedItemId);
  const { setSelectedItemId } = useAppActions();
  const boxRef = createRef();
  const [address, setAddress] = useState("");
  const [footerLabelText, setFooterLabelText] = useState("");
  const niceName = useGeocodingNiceName(item.geocoding);
  useEffect(() => {
    if (item?.geocoding) {
      setAddress(item.geocoding.display_name);
    }
  }, [item]);
  const deleteItem = () => {
    setDeleteItem(item.id);
  };

  const handleOnClick = () => {
    setSelectedItemId(item.id);
  };
  //   useEffect(() => {
  //     if (item.id === selectedId) {
  //       boxRef.current.scrollIntoView();
  //     }
  //   }, [selectedId, boxRef, item.id]);

  const onMouseOverPhotoItem = (mouseOverPlayer) => {
    if (mouseOverPlayer) {
      setHoveredItemId(item.id);
    } else {
      setHoveredItemId(0);
    }
  };

  useEffect(() => {
    if (item.dateTime && item.dateTime != "") {
      setFooterLabelText(item.dateTime);
    } else {
      setFooterLabelText("No Data");
    }
  }, [item.dateTime]);

  return (
    <PhotoItemDiv
      ref={boxRef}
      selected={item.id === selectedId}
      onClick={handleOnClick}
      onMouseEnter={() => onMouseOverPhotoItem(true)}
      onMouseLeave={() => onMouseOverPhotoItem(false)}
    >
      <ImageDiv>
        <PhotoImg key={item.id} src={item.image} alt={name} loading="lazy" />
      </ImageDiv>
      <Tooltip title="No GPS data" placement="right" arrow>
        <LocationOffIconIcon location={location} />
      </Tooltip>
      <CloseButton aria-label="close" onClick={deleteItem} size="small">
        <CloseIconIcon />
      </CloseButton>

      {/* <PhotoFooter> */}
      <FooterIcon />
      <Tooltip title={address} placement="top" arrow>
        <AddressLabel>{niceName}</AddressLabel>
      </Tooltip>

      <FooterLabel>{footerLabelText}</FooterLabel>
      {/* </PhotoFooter> */}
    </PhotoItemDiv>
  );
};

SidePhotoItem.defaultProps = {
  item: null,
};

SidePhotoItem.propTypes = {
  item: PropTypes.shape(PhotoItemStruct),
};

export default SidePhotoItem;
