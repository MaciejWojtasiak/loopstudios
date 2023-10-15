import PropTypes from "prop-types";
import './Creation.css';
import {motion} from 'framer-motion';


const fadeInAnimationVariants = {
  initial:{
    opacity:0,
    y:100,
  },
  animate:(index)=>({
    opacity:1,
    y:0,
    transition: {
      delay:index * 0.05,
    }
  })
}

function Creation({title, imageSm, imageBg , index}) {
  return (
    <motion.div className="creation" variants={fadeInAnimationVariants} initial={"initial"} whileInView={"animate"} custom={index} viewport={{ once: true }} >     
        <picture>
          <source media="(min-width:600px)" srcSet={imageBg} />       
          <img src={imageSm} alt={`${title}-img`}  className="creation__img"/>          
        </picture>    
        <p className='creation__title'>{title}</p>
      </motion.div>
  )
}

Creation.propTypes = {
    title: PropTypes.string.isRequired,
    imageSm: PropTypes.string.isRequired,
    imageBg: PropTypes.string.isRequired
}

export default Creation