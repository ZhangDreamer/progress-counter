import ProgressHeader from './ProgressHeader.jsx';
import ProgressInput from './ProgressInput.jsx';
import './ProgressDisplay.css';
import {useState} from 'react';

function ProgressDisplay(){

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([{
      id: '1',
      date: '29/9/24',
      winOrLose: 'W',
      message: 'I did exercise and ate icecream and i worked on some stuff asdasdas',
      likes: 1,
      dislikes: 0
    },
    {
      id: '2',
      date: '29/9/24',
      winOrLose: 'L',
      message: 'I watched RE:ZERO today',
      likes: 0,
      dislikes: 1
    },
  ]);

  function handleDeleteButton(id){
    setMessages(messages.filter((_, index) => index !== id));
  }

  function handleLikeButton(id){
    setMessages(messages.map((message, index) => {
      if(index === id){
        return {...message, likes: message.likes += 1}
      } else {
        return message
      }
    }));
  }

  function handleDislikeButton(id){
    setMessages(messages.map((message, index) => {
      if(index === id){
        return {...message, dislikes: message.dislikes += 1}
      } else{
        return message
      }
    }))
  }

  function formatResult(){
    let result = 0;
    messages.forEach((message) => {
      if (message.winOrLose === 'W'){
        result += 1;
      } else {
        result -= 1;
      }
    });
    return result
  }

  return(
    <div className='progress-display-container'>
      <ProgressHeader/>
      <div className='progress-display'>
        <div className='display-header'>
          <div><h3>Date</h3></div>
          <div><h3>Today's Result: {formatResult()}</h3></div>
        </div>
        <div className='progress-notes'>
          <div className='element date'><h4>29/9/2024</h4></div>
          <div className='element'>
          {messages.map((message, index) => {
            return (
            <div className='note' key={message.id}>
              <p>{message.winOrLose}</p>
              <p className='comment'>{message.message}</p>
              <button className='delete-button' id={message.id} onClick={() => handleDeleteButton(index)}>🗑️</button>
              <div className='react-buttons'>
                <button className="upvote-button" onClick={() => handleLikeButton(index)}>👍 {message.likes}</button>
                <button className="downvote-button" onClick={() => handleDislikeButton(index)}>👎 {message.dislikes}</button>
              </div>
            </div>
            )
          })}
          </div>
        </div>
      </div>
      <ProgressInput input={input} setInput={setInput} messages={messages} setMessages={setMessages}/>
    </div>
  )
}

export default ProgressDisplay