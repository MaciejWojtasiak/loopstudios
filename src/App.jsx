
import Header from './components/Header/Header';
import StoryPicture from './components/StoryPicture/StoryPicture';
import StoryContent from './components/StoryContent/StoryContent';
import Creations from './components/Creations/Creations';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {

  return (
    <div className='app'> 
      <Header />           
        <StoryPicture />
        <StoryContent />
        <Creations />
      <Footer />
    </div>  
  )
}

export default App
