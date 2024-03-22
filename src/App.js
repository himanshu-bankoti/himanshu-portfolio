import "./App.css";
import { Intro } from "./components/intro/Intro";
import { info } from "./components/Data";
import { Header } from "./components/Header";
import { icons } from "./components/Icon";

export default function App() {
  return (
    <div>
      <div>
        {/* <Header icons={icons} /> */}
        {/* <div className="heading-background-secondary"> </div> */}
        <div class="vertical-line"></div>
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
    </div>
  );
}
