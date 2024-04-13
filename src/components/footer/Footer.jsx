import styled from "styled-components";
import PropTypes from "prop-types";
import { PhotoItemStruct } from "./PhotoItemStruct";
import PhotoList from "./PhotoList";
import DropZone from "./DropZone";

const FooterDiv = styled.div`
  display: flex;
  width: 100%;
  padding-top: 10px;
  background-color: #242424;
`;

const DropZoneDiv = styled.div`
  min-width: 198px;
  min-height: 105px;

  margin: 0 15px;
  margin-bottom: 10px;
  color: #ededf0;
  user-select: none;
`;

const Footer = ({ items, className }) => {
  return (
    <FooterDiv className={className}>
      <DropZoneDiv>
        <DropZone />
      </DropZoneDiv>
      <PhotoList items={items}></PhotoList>
    </FooterDiv>
  );
};

Footer.defaultProps = {
  items: [],
  className: "",
};

Footer.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(PhotoItemStruct)),
  className: PropTypes.string,
};

export default Footer;
