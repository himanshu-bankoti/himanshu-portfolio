import "../assets/intro.css";

export function Intro({ name, designation, description }) {
    return (
        <div class="common-color intro-wrapper">
            <a class="h1 common-color title-name font-weight-bold" href="/">
                {name}
            </a>
            <h5>{designation}</h5>
            <h7 class="light-color">{description}</h7>
        </div>
    );
}