import ProgressHeader from './ProgressHeader.jsx';
import ProgressInput from './ProgressInput.jsx';
import './ProgressDisplay.css';
import {useState, useEffect} from 'react';
import {db} from './lib/firebase.js';
import { doc, getDoc, setDoc } from "firebase/firestore"; 

function ProgressDisplay(props){

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [date, setDate] = useState(null);

  useEffect(() => {

    const addBoardDocument = async () => {
      try {
        const docRef = await setDoc(doc(db, "board", date), {
          date: date,
          messages: [],
        });
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    };

    const fetchBoardDocument = async () => {
      try {
        if (date) {
          //the board should be unique to each user
          const ref = await getDoc(doc(db, `board/${date}`));
          const data = ref.data();
          if(data){
            setMessages(data.messages);
          } else{
            addBoardDocument();
          }
        }
      } catch (error) {
        console.error("Error fetching document:", error);
      }
    };
  
    fetchBoardDocument();
  }, [date]);

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

    if (result > 0){
      result = `+${result}`;
    }
    return result
  }

  return(
    <div className='progress-display-container'>
      <ProgressHeader setDate={setDate} user={props.user}/>
      <div className='progress-display'>
        <div className='display-header'>
          <div><h3>Date</h3></div>
          <div><h3>Today's Result: {formatResult()}</h3></div>
        </div>
        <div className='progress-notes'>
          <div className='element date'><h4>{date}</h4></div>
          <div className='element'>
          {messages.map((message, index) => {
            return (
            <div className='note' key={index}>
              <p>{message.winOrLose}</p>
              <p className='comment'>{message.message}</p>
              <button className='delete-button' onClick={() => handleDeleteButton(index)}>🗑️</button>
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