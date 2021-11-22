import NavBar from "./Components/NavBar/NavBar";
import ShowCase from "./Components/Showcase/Showcase";
import Main from "./Components/Main/Main";
import { useState } from "react";

function App() {
  // Initialisation des Hooks
  const [page, setPage] = useState("Home");
  const [heroIntro, setHeroIntro] = useState("Wanna'try ?");
  const [mainId, setMainId] = useState("p1");

  const onSelectedPage = (page) => {
    setPage(page);
    switch (page) {
      case "Padel Club":
        setHeroIntro("Discover our Padel Club");
        setMainId("p2");
        break;

      case "Padel Gear":
        setHeroIntro("Equipment for a good start");
        setMainId("p3");
        break;
      default:
        setHeroIntro("Wanna'try ?");
        setMainId("p1");
        break;
    }
  };
  return (
    <div>
      <NavBar onSavePage={onSelectedPage} />
      <ShowCase pageTitle={page} pageIntro={heroIntro} />
      <Main mainId={mainId} />
    </div>
  );
}

export default App;
