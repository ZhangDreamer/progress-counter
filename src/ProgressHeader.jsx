import './ProgressHeader.css';
import {useState} from 'react';
import DigitalClock from './DigitalClock.jsx';

function ProgressHeader(props){

  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const [dateInput, setDateInput] = useState('');

  function handleSearchButton(){
    setIsSearchClicked((prev) => !prev);
  }

  function handleDateInput(event){
    setDateInput(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    const newDate = new Date(`${dateInput}T00:00:00`);

    props.setDate(newDate.toLocaleDateString('en-CA'));
  }

  return(
    <div className='progress-header'>
      <h2>{props.user}</h2>
      <div className='progress-bar'>
        <span>Level X</span>
        <div className="progress-meter" style={{width: 40 + '%'}}></div><span>Wins/Total Wins + Loss</span> 
      </div>
      <img className="portrait" src={props.imgsrc} alt="motivation-quote"/>
      <div className="search-dropdown">
          <button className='search-button' onClick={handleSearchButton}>Search⮟</button>
            {isSearchClicked && (
              <form className="search-content" onSubmit={handleFormSubmit}>
                <div className='keyword-search'>
                  <span>Keyword</span>
                  <input type="text" name="keyword" />
                </div>
                <div className='search-date'>
                  <span>Date</span><br />
                  <input type="date" name="date" onChange={handleDateInput}/>
                </div>
                <div className='submit-button-container'>
                  <button type="submit" className='submit-button'>Submit</button>
                </div>
              </form>
            )}
        </div>
      <DigitalClock setDate={props.setDate}/>
      
    </div>
  )
}

export default ProgressHeader