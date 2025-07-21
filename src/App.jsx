import Home from './sections/Home.jsx';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {

    useEffect(() => {
    AOS.init({
      duration: 800,      // animation duration
      once: false,         // animate everytime
      offset: 50,         // trigger offset
    });
  }, []);


  return (
    <>
      <Home />
    </>

  )
}

export default App