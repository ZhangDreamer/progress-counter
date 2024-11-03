import ProgressDisplay from './ProgressDisplay.jsx';
import {createContext} from 'react';
import './index.css';

export const LocationContext = createContext();

function App() {

  return (
    <>
    <LocationContext.Provider value="America/Panama">
      <ProgressDisplay user="Dreamer"/>
    </LocationContext.Provider>
    </>
  )
}

export default App
