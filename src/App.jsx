import ProgressDisplay from './ProgressDisplay.jsx';
import {createContext} from 'react';
import './index.css';

export const LocationContext = createContext();

function App() {

  return (
    <>
    <LocationContext.Provider value="Europe/Berlin">
      <ProgressDisplay user="Relags" imgsrc="https://i.pinimg.com/550x/17/e5/15/17e5159a2b802af11ca5ad1889e44d30.jpg"/>
    </LocationContext.Provider>
    <br/>
    <hr/>
    <LocationContext.Provider value="America/Panama">
      <ProgressDisplay user="Dreamer" imgsrc="https://www.scrolldroll.com/wp-content/uploads/2021/08/Anime-Quotes-14-750x430.jpg"/>
    </LocationContext.Provider>
    </>
  )
}

export default App
