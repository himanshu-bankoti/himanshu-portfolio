import "../../assets/intro.css";
import { TypeWriterEffect } from "../../components/intro/TypeWriterEffect";

export function Intro({ name, designation, description, experties }) {
  return (
    <div className="common-color intro-wrapper">
      <a className="h1 common-color title-name font-weight-bold" href="/">
        {name}
      </a>
      <span className="light-color font-big">
        <h5>({designation})</h5>
        <span className="label">{description} </span>
        <span
          className="font-weight-bold text-unique"
          style={{ marginLeft: "10px" }}
        >
          <TypeWriterEffect iterationArray={experties} typingSpeed={110} />
        </span>
      </span>
    </div>
  );
}
