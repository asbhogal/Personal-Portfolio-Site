import circleArrow from "../assets/images/icons/CircleArrow.svg";

const Arrow = ({ size, url }) => {
  return (
    <img 
      src={ circleArrow } 
      width={ size }
      height={ size }
      alt="An arrow at an angle inside a circle"
     />
  )
}

export default Arrow