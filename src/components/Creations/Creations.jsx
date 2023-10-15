import { useEffect, useState } from 'react';
import './Creations.css';
import Creation from '../Creation/Creation';
import { data } from '../../data';
import {motion} from 'framer-motion';

const variants = {
  initial:{
    y:-100,
    opacity:0
  },
  animate:{
    y:0,
    opacity:1,
    transition:{
      duration:.5
    }    
  }
}

function Creations() {
  const [creations, setCreations] = useState([]);
  useEffect(()=>{
    const items = data.slice(0, 4);
    setCreations(items)
  },[])

  const expandItems = () => {
    setCreations(data);
  }
 
  return (
    <section className="creations">
      <motion.h2 variants={variants} initial="initial" whileInView="animate" viewport={{ once: true }} className="creations__heading heading-2">Our creations</motion.h2>      
      <motion.div className="creations-grid" >
        {creations.map((creation, index)=>{
          return <Creation key={creation.id} index={index} imageSm={creation.imgSm} imageBg={creation.imgBg} title={creation.title}/>
        })}     
      </motion.div>
      <button className="btn creations__btn" onClick={expandItems}>See all</button>
    </section>
  )
}

export default Creations