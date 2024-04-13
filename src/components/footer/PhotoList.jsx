import styled from "styled-components";
import PropTypes from "prop-types";
import { useHorizontalScroll } from "../../hooks/useHorizontalScroll";
import PhotoItem from "./PhotoItem";
import { PhotoItemStruct } from "./PhotoItemStruct";

const ScrollListDiv = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
  height: 208px;
  white-space: nowrap;
  scrollbar-width: thin;
  margin-right: 15px;
`;

const PhotoList = ({ items }) => {
  const scrollRef = useHorizontalScroll();

  const displayItems = items.map((item) => (
    <PhotoItem key={item.id} {...item} />
  ));

  return <ScrollListDiv ref={scrollRef}>{displayItems}</ScrollListDiv>;
};

PhotoList.defaultProps = {
  items: [],
};

PhotoList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(PhotoItemStruct)),
};

export default PhotoList;
