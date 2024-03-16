import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Intro } from "./components/intro/Intro";
import { info } from "./components/Data";
import { Header } from "./components/Header";
import { icons } from "./components/Icon";
import { SkillsAnimation } from "./components/intro/SkillsAnimation";

export default function App() {

  return (
    <div>
      <Header icons={icons} />
      <Intro
        name={info.name}
        designation={info.designation}
        description={info.description}
      />
      <SkillsAnimation />
    </div>
  );
}
