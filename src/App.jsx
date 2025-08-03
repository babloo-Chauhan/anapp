import Card from './Components/Card';
import React from 'react';
import { useEffect } from  'react';
import './index.css'
function App() {
  useEffect(() => {
    const setAppHeight = () => {
      document.documentElement.style.setProperty('--app-height', `${ window.innerHeight }px`);
    };
    setAppHeight();
    window.addEventListener('resize', setAppHeight);
    return () => window.removeEventListener('resize', setAppHeight);
  }, []);

  
  return (
      <>
          <div className='h-screen w-full overflow-hidden  App'>
              <Card  />
          </div>
    </>
  )
}

export default App
