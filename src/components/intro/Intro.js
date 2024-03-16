import "../../assets/intro.css";

export function Intro({ name, designation, description }) {
    return (
        <div className="common-color intro-wrapper">
            <a className="h1 common-color title-name font-weight-bold" href="/">
                {name}
            </a>
            <p>{designation}</p>
            <h6 className="light-color">{description}</h6>
        </div>
    );
}