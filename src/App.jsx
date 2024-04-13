import "./App.css";
import styled from "styled-components";
import ImageMeta from "./components/ImageMeta";
import ExpandedView from "./components/ExpandedView";

const AppDiv = styled.div`
  // font-size: 10px; /* This baseline fontsize is important for em usage! */
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
`;

function App() {
  return (
    <AppDiv>
      {/* <ImageMeta /> */}
      <ExpandedView />
    </AppDiv>
  );
}

export default App;
