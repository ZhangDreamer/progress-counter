import './ProgressHeader.css';
import {useState} from 'react';
import DigitalClock from './DigitalClock.jsx';

function ProgressHeader(){

  const [isSearchClicked, setIsSearchClicked] = useState(false);

  function handleSearchButton(){
    if(isSearchClicked){
      document.querySelector('.search-content').style.display = 'none';
      setIsSearchClicked(false);
    } else{
      document.querySelector('.search-content').style.display = 'block';
      setIsSearchClicked(true);
    }
  }

  return(
    <div className='progress-header'>
      <h2>Name</h2>
      <div className='progress-bar'>
        <span>Level X</span>
        <div className="progress-meter" style={{width: 40 + '%'}}></div><span>Wins/Total Wins + Loss</span> 
      </div>
      <img className="portrait" src="https://www.scrolldroll.com/wp-content/uploads/2021/08/Anime-Quotes-14-750x430.jpg" alt="motivation-quote"/>
      <div className="search-dropdown">
          <button className='search-button' onClick={handleSearchButton}>Search⮟</button>
          <div className="search-content">
            <div className='keyword-search'>
              <span>Keyword</span>
              <input type="text"/>
            </div>
            <div className='search-date'>
              <span>Date</span><br/>
              <input type="date"/>
            </div>
            <div className='submit-button-container'>
              <button className='submit-button'>Submit</button>
            </div>
          </div>
        </div>
      <DigitalClock/>
      
    </div>
  )
}

export default ProgressHeader