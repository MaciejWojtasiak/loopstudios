import PropTypes from "prop-types";
import './Creation.css';

function Creation({title, image}) {
  return (
    <div className="creation" id="creation-earth" >        
        <div className="creation__img" style={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${image})`}}></div>
        <p className='creation__title'>{title}</p>
      </div>
  )
}

Creation.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
}

export default Creation