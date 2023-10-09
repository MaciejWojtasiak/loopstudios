import { useEffect, useState } from 'react';
import './Creations.css';
import Creation from '../Creation/Creation';
import { data } from '../../data';

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
      <h2 className="creations__heading heading-2">Our creations</h2>      
      <div className="creations-grid">
        {creations.map((creation)=>{
          return <Creation key={creation.id} image={creation.imgSm} title={creation.title}/>
        })}     
      </div>
      <button className="btn creations__btn" onClick={expandItems}>See all</button>
    </section>
  )
}

export default Creations