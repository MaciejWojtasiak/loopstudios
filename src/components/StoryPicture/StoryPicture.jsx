import './StoryPicture.css';
import image from '../../images/mobile/image-interactive.jpg';

function StoryPicture() {
  return (
    <div className="storyPicture">
        <img src={image} alt="story-image" className='story__image'/>
    </div>
  )
}

export default StoryPicture