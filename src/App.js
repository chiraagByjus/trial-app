import logo from "./logo.svg";
import "./App.css";
import { CardWrapper, VideoPlayer } from "@chiraagbyjus/trial-library-dummy";

function App() {
  return (
    <>
      {" "}
      <CardWrapper width="200px" height="200px" backgroundColor="yellow">
        HI
      </CardWrapper>
      <VideoPlayer
        source="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        thumbnail="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
        videoId="Big_Buck_Bunny_01"
      />
    </>
  );
}

export default App;
