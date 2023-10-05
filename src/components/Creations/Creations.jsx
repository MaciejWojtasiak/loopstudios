import './Creations.css';
import earthImg from '../../images/mobile/image-deep-earth.jpg';

function Creations() {
  return (
    <section className="creations">
      <h2 className="creations__heading heading-2">Our creations</h2>
      <div className="creation" id="creation-earth">        
        <p className='creation__title'>Deep earth</p>
      </div>
      <div className="creation" id="creation-earth">        
        <p className='creation__title'>Deep earth</p>
      </div>
      <div className="creation" id="creation-earth">        
        <p className='creation__title'>Deep earth</p>
      </div>
      <div className="creation" id="creation-earth">        
        <p className='creation__title'>Deep earth</p>
      </div>
      <div className="creation" id="creation-earth">        
        <p className='creation__title'>Deep earth</p>
      </div>
      <button className="btn creations__btn">See all</button>
    </section>
  )
}

export default Creations