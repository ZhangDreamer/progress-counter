import ProgressHeader from './ProgressHeader.jsx';
import ProgressInput from './ProgressInput.jsx';
import './ProgressDisplay.css';
import {useState} from 'react';

function ProgressDisplay(){

  const [input, setInput] = useState('');

  return(
    <div className='progress-display-container'>
      <ProgressHeader/>
      <div className='progress-display'>
        <div className='display-header'>
          <div><h3>Date</h3></div>
          <div><h3>Today's Result: +2</h3></div>
        </div>
        <div className='progress-notes'>
          <div className='element'><h4>29/9/2024</h4></div>
          <div className='element'>
            <div className='note'>
              <p>W/L</p>
              <p className='comment'>I did exercise</p>
              <button className='delete-button'>🗑️</button>
              <div className='react-buttons'>
                <button className="upvote-button">👍 1</button>
                <button className="downvote-button">👎 0</button>
              </div>
            </div>
            <div className='note'>
              <p>W/L</p>
              <p className='comment'>I did exercise and ate icecream and i worked on some stuff asdasdas
              </p>
              <button className='delete-button'>🗑️</button>
              <div className='react-buttons'>
                <button className="upvote-button">👍 1</button>
                <button className="downvote-button">👎 0</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProgressInput setInput={setInput}/>
    </div>
  )
}

export default ProgressDisplay