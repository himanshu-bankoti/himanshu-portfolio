import "./App.css";
import { Intro } from "./components/intro/Intro";
import { info } from "./components/Data";
import { Header } from "./components/Header";
import { icons } from "./components/Icon";

export default function App() {
  return (
    <div>
      <div className="heading-image">
        {/* <Header icons={icons} /> */}
        <div className="image-wrapper-circle"> </div>
        <div className="intro-wrapper">
          <Intro
            name={info.name}
            designation={info.designation}
            description={info.description}
            experties={info.experties}
            linkedIn={info.linkedIn}
          />
        </div>
      </div>
      <div className="specialities-wrapper"></div>
    </div>
  );
}
