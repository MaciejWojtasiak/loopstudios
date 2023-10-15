import './StoryPicture.css';
import imageSm from '../../images/mobile/image-interactive.jpg';
import imageBg from '../../images/desktop/image-interactive.jpg';
import {motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const variants = {
  initial:{
    x:-300,
    opacity:0
  },
  animate:{
    x:0,
    opacity:1,
    transition:{
      delay:.5
    }
  }
}



function StoryPicture() {
  const ref = useRef();

  const isInView = useInView(ref, {margin:'0px'})

  return (
    <motion.div
     variants={variants}
      initial="initial"
      ref={ref}
      animate={isInView && "animate"}
      className="storyPicture">
       <picture>
          <source media="(min-width:600px)" srcSet={imageBg} />       
          <img src={imageSm} alt='story-image'  className="story__image"/>          
        </picture>    
    </motion.div>
  )
}

export default StoryPicture