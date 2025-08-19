import { useState } from "react";
import Header from "../Header";
import NowPlaying from "../NowPlaying";

export default function App() {
  const [showProgressBar, setShowProgressBar] = useState(true);

  const handleShowMusic = () => {
    setShowProgressBar(!showProgressBar);
  };

  return (
    <>
      <Header handleShowMusic={handleShowMusic} title="Tocando Agora" />
      <NowPlaying showProgressBar={showProgressBar} />
    </>
  );
}
