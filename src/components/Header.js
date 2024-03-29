import "../assets/header.css";
import githubIcon from "../assets/images/github.png";
import linkedInIcon from "../assets/images/linkedIn.png";
import locationIcon from "../assets/images/location.png";

export function Header({ linkedIn, github, location }) {
  //The icons are named as iconOne, iconTwo... because icons are subjective to change.
  return (
    <div>
      <div className="header-container">
        <div className="box location-icon-header">
          <img src={locationIcon}></img>
          <a href={location.map_link}>{location.name}</a>
        </div>
        <div className="small-links box">
          <img src={githubIcon}></img>
          <a href={github}>Github</a>
          <img src={linkedInIcon}></img>
          <a href={linkedIn}>Linked In</a>
        </div>
      </div>
    </div>
  );
}
