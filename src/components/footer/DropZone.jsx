/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";
import { useUtils } from "../../hooks/useUtils";

const DropZoneDiv = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 2px dashed gray;
  width: 100%;
  height: 100%;

  &:hover {
    border: 2px dashed #d3d3d3;
  }
`;

const DropZone = () => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/jpeg": [],
      "image/png": [],
    },
  });

  const { parseFiles } = useUtils();

  //console.log(fileRejections);

  useEffect(() => {
    if (acceptedFiles.length > 0) {
      parseFiles(acceptedFiles);
    }
  }, [acceptedFiles]);

  return (
    <DropZoneDiv {...getRootProps({ className: "dropzone" })}>
      <input {...getInputProps()} />
      <div>Click</div>
      <div>or</div>
      <div>Drop images</div>
    </DropZoneDiv>
  );
};

export default DropZone;
