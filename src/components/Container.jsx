import chevronRight from "../assets/images/icons/ChevronRight.svg"

const Container = () => {
    return (
        <div className="MainContainer">
            <section className="MainHeadline">
                <h1>Creating bold, elegant and humanistic interfaces &#124; est. 2020</h1>
            </section>
            <section className="CTAButtons">
                <button className="ViewProjects">projects<img src={ chevronRight }></img></button>
                <button className="Contact">contact<img src={ chevronRight } ></img></button>
            </section>
        </div>
    )
}

export default Container;