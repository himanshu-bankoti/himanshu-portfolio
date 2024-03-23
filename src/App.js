import "./App.css";
import { Intro } from "./components/intro/Intro";
import { info } from "./components/Data";
import { BannerImage } from "./components/intro/BannerImage";
import image from "./assets/images/me.png";
import { Header } from "./components/Header";

export default function App() {
  return (
    <div>
      <Header 
        linkedIn={info.linkedIn}
        github={info.github}
        location={info.location}
      />
      <div>
        <div className="vertical-line"></div>
        <div className="intro-wrapper">
          <Intro
            name={info.name}
            designation={info.designation}
            description={info.description}
            experties={info.experties}
            linkedIn={info.linkedIn}
            summary={info.summary}
          />
        </div>
        <BannerImage image={image} />
        <div className="second-section">
          <h5 className="text-center" style={{color : 'white', marginTop: '100px'}}>About</h5>
        </div>
      </div>
    </div>
  );
}
