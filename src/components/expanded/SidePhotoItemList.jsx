import styled from "styled-components";
import PropTypes from "prop-types";
import { PhotoItemStruct } from "../footer/PhotoItemStruct";
import SidePhotoItem from "./SidePhotoItem";

const ScrollListDiv = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  width: 310px;
  white-space: nowrap;
  scrollbar-width: thin;
  height: 100%;
  margin-left: 10px;
`;

const SidePhotoItemList = ({ items }) => {
  const displayItems = items.map((item) => (
    <SidePhotoItem key={item.id} item={item} />
  ));

  return <ScrollListDiv>{displayItems}</ScrollListDiv>;
};

SidePhotoItemList.defaultProps = {
  items: [],
};

SidePhotoItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(PhotoItemStruct)),
};

export default SidePhotoItemList;
