import "../assets/header.css";
import githubIcon from "../assets/images/github.png";
import linkedInIcon from "../assets/images/linkedIn.png";
import locationIcon from "../assets/images/location.png"

export function Header({ linkedIn, github }) {
  //The icons are named as iconOne, iconTwo... because icons are subjective to change.
  return (
    <div>
      <div className="small-links">
        <img src={githubIcon}></img>
        <a href={github}>Github</a>
        <img src={linkedInIcon}></img>
        <a href={linkedIn}>Linked In</a>
        {/* <a href={icons.react.link} target="_blank">
        <img src={icons.react.icon} />
      </a>
      <a href={icons.html.link} target="_blank">
        <img src={icons.html.icon} />
      </a>
      <a href={icons.css.link} target="_blank">
        <img src={icons.css.icon} />
      </a>
      <a href={icons.bootstrap.link} target="_blank">
        <img src={icons.bootstrap.icon} />
      </a> */}
      </div>
    </div>
  );
}
