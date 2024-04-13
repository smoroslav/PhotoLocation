import { useEffect, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { IconButton } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import useUtils from "../../hooks/useUtils";

const CopyButton = styled(IconButton)`
  position: absolute !important;
  right: 0;
  top: 9px;
  visibility: hidden;
`;

const ContentCopyIconIcon = styled(ContentCopyIcon)`
  color: #bfbcbc;
`;

const MetadataItemDiv = styled.div`
  padding: 4px 12px;
  display: flex;
  min-height: 40px;
  align-items: start;
  justify-content: space-between;
  position: relative;
  flex-direction: column;
  border-bottom: 1px solid #464646;
  margin-right: 0;

  &:hover {
    background: #050505;
  }

  &:hover ${CopyButton} {
    visibility: visible;
  }
`;

const NameDiv = styled.div`
  font-size: 11px;
  color: #bfbcbcbd;
  font-weight: bold;
  text-align: left;
`;

const ValueDiv = styled.div`
  font-size: 12px;
  line-height: 18px;
  color: #d9d9d9;
  font-weight: bold;
  text-align: left;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const MetadataItem = ({ name, value }) => {
  const { getNiceNameMetadata } = useUtils();
  const niceName = getNiceNameMetadata(name);
  const [niceValue, setNiceValue] = useState("");

  useEffect(() => {
    if (value === "" || !value) {
      setNiceValue("-");
    } else if (typeof value === "object") {
      setNiceValue(value.toString());
    } else {
      setNiceValue(value);
    }
  }, [value]);

  //   const valueToRender = () => {
  //     if (!value) {
  //       return (
  //         <>
  //           <NameDiv>{niceName}</NameDiv>
  //           <ValueDiv>-</ValueDiv>
  //         </>
  //       );
  //     }

  //     if (typeof value !== "object" && !Array.isArray(value)) {
  //       return (
  //         <>
  //           <NameDiv>{niceName}</NameDiv>
  //           <ValueDiv>{`${value}`}</ValueDiv>
  //         </>
  //       );
  //     }

  // const values = [];
  // values.push(<NameDiv color={text01}>{niceName}</NameDiv>);
  // Object.keys(value).forEach((key) => {
  //   values.push(
  //     <>
  //       <MetadataItem />
  //       <NameDiv>{getNiceNameMetadata(key)}</NameDiv>
  //       <ValueDiv>{`${value[key]}`}</ValueDiv>
  //       <CopyButton aria-label="close" onClick={deleteItem} size="small">
  //         <ContentCopyIcon></ContentCopyIcon>
  //       </CopyButton>
  //     </>
  //   );
  // });
  //     return null;
  //   };

  return (
    <MetadataItemDiv>
      <NameDiv>{niceName}</NameDiv>
      <ValueDiv>{niceValue}</ValueDiv>
      <CopyButton
        aria-label="close"
        onClick={() => navigator.clipboard.writeText(value)}
        size="small"
      >
        <ContentCopyIconIcon fontSize="small"></ContentCopyIconIcon>
      </CopyButton>
    </MetadataItemDiv>
  );
};

MetadataItem.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]),
  unit: PropTypes.string,
  name: PropTypes.string,
};

MetadataItem.defaultProps = {
  value: "",
  unit: "",
  name: "",
};

export default MetadataItem;
