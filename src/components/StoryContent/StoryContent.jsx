import './StoryContent.css';
import {motion} from 'framer-motion';

const variants = {
  initial:{
    x:300,
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

function StoryContent() {

  return (
    <motion.div 
     variants={variants}
     initial="initial" 
     whileInView="animate"
     viewport={{ once: true }}
     className="storyContent">
        <h2 className="story__heading heading-2">The leader in interactive VR</h2>
        <p className="story__text">Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>
    </motion.div>
  )
}

export default StoryContent