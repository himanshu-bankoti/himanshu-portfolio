import "../../assets/intro.css";
import { TypeWriterEffect } from "../../components/intro/TypeWriterEffect";

export function Intro({ name, designation, description, experties, linkedIn }) {
  return (
    <div className="common-color">
      <a className="common-color title-name" href={linkedIn} target="_blank">
        {name}
        <br></br>
        <span>{designation}</span>
      </a>
      <span className="light-color font-big">
        <div className="flex-container">
          <div className="container-first">
            <span  className="description">{description} </span>
            <span>
            <span className="type-writer-text"><TypeWriterEffect iterationArray={experties} typingSpeed={110} />
            </span>
            </span>
          </div>
        </div>
      </span>
    </div>
  );
}
