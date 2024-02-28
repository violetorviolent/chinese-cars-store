import { useState} from 'react';
import { images } from '../../constants'
import './ScrollTop.css';

const ScrollTop = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true)
    }
    else if (scrolled <= 300) {
      setVisible(false)
    }
  };

  window.addEventListener('scroll', toggleVisible);
  return (
    <>
      {visible && <div className='app__scrollTop fade' style={{ display: visible ? 'inline' : 'none' }}>
        <a href="#">
           <img src={images.ScrollTop} alt="Scroll Top" />
        </a>
      </div>
      }
    </>
  )
}

export default ScrollTop