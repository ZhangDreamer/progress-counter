import ProgressHeader from './ProgressHeader.jsx';
import ProgressInput from './ProgressInput.jsx';
import './ProgressDisplay.css';
import {useState} from 'react';

function ProgressDisplay(){

  const [input, setInput] = useState('');

  const messages = [{
      id: '001',
      date: '29/9/24',
      winOrLose: 'W',
      message: 'I did exercise and ate icecream and i worked on some stuff asdasdas',
      likes: 1,
      dislikes: 0
    },
    {
      id: '002',
      date: '29/9/24',
      winOrLose: 'L',
      message: 'I watched RE:ZERO today',
      likes: 0,
      dislikes: 1
    },
  ];

  return(
    <div className='progress-display-container'>
      <ProgressHeader/>
      <div className='progress-display'>
        <div className='display-header'>
          <div><h3>Date</h3></div>
          <div><h3>Today's Result: +2</h3></div>
        </div>
        <div className='progress-notes'>
          <div className='element date'><h4>29/9/2024</h4></div>
          <div className='element'>
          {messages.map((message) => {
            return (
            <div className='note' key={message.id}>
              <p>{message.winOrLose}</p>
              <p className='comment'>{message.message}</p>
              <button className='delete-button' id={message.id}>🗑️</button>
              <div className='react-buttons'>
                <button className="upvote-button">👍 {message.likes}</button>
                <button className="downvote-button">👎 {message.dislikes}</button>
              </div>
            </div>
            )
          })}
          </div>
        </div>
      </div>
      <ProgressInput setInput={setInput}/>
    </div>
  )
}

export default ProgressDisplay