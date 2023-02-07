import chevronRight from "../assets/images/icons/ChevronRight.svg";
import { Link } from "react-router-dom";

const CTAButtons = () => {
    return (
        <section className="CTAButtons">
            <button className="ViewProjects" component={ Link } to="./projects">
                projects
                <img src={ chevronRight }></img>
            </button>
            <button className="Contact">
                contact
                <img src={ chevronRight }></img>
            </button>
        </section>
    )
}

export default CTAButtons;