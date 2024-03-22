import "./App.css";
import { Intro } from "./components/intro/Intro";
import { info } from "./components/Data";
import { BannerImage } from "./components/intro/BannerImage";
import image from "./assets/images/me.png";

export default function App() {
  return (
    <div>
      <div>
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
        <BannerImage image={image} />
        <div className="second-section">
          <h5 className="text-center " style={{color : 'white', marginTop: '100px'}}>About</h5>
        </div>
      </div>
    </div>
  );
}
