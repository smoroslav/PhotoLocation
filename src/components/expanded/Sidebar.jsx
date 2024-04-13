import styled from "styled-components";
import PropTypes from "prop-types";
import SidePhotoItemList from "./SidePhotoItemList";
import { PhotoItemStruct } from "../footer/PhotoItemStruct";
import DropZone from "../footer/DropZone";

const SidebarDiv = styled.div`
  display: flex;
  height: 100%;
  background-color: #242424;
  flex-direction: column;
`;

const DropZoneStyled = styled.div`
  width: 280px;
  height: 200px;
  margin: 10px;
  margin-left: 20px;
`;

const Sidebar = ({ items, className }) => {
  return (
    <SidebarDiv className={className}>
      <SidePhotoItemList items={items} />
      <DropZoneStyled>
        <DropZone />
      </DropZoneStyled>
    </SidebarDiv>
  );
};

Sidebar.defaultProps = {
  items: [],
  className: "",
};

Sidebar.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(PhotoItemStruct)),
  className: PropTypes.string,
};

export default Sidebar;
