import './ProgressHeader.css';
import {useState} from 'react';

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
      <h1>Name</h1>
      <div className='progress-bar'>
        <span>Level X</span>
        <div className="progress-meter" style={{width: 40 + '%'}}></div>
        <div className="search-dropdown">
          <button className='search-button' onClick={handleSearchButton}>Search⮟</button>
          <div className="search-content">
            <div className='keyword-search'>
              <span>Keyword</span>
              <input/>
            </div>
            <div className='search-date'>
              <span>Date</span>
              <input/>
              <input/>
              <input/>
            </div>
            <div className='submit-button-container'>
              <button className='submit-button'>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProgressHeader