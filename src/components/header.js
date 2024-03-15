import "../assets/header.css";

export function Header({ iconOne, iconTwo, iconThree, iconFour }) {
  //The icons are named as iconOne, iconTwo... because icons are subjective to change.
  return (
    <div class="small-icons">
      <img src={iconTwo} />
      <img src={iconThree} />
      <img src={iconFour} />
      <img src={iconOne} />
    </div>
  );
}
