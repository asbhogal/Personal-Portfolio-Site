import chevronRight from "../assets/images/icons/ChevronRight.svg";

const CTAButtons = () => {
    return (
        <section className="CTAButtons">
            <button className="ViewProjects">
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