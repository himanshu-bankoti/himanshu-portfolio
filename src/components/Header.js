import "../assets/header.css";

export function Header({ icons }) {
  //The icons are named as iconOne, iconTwo... because icons are subjective to change.
  return (
    <div className="small-icons">
      <a href={icons.react.link} target="_blank">
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
      </a>
    </div>
  );
}
