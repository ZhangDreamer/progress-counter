import './ProgressInput.css';
import {db} from './lib/firebase.js';
import { doc, setDoc } from "firebase/firestore"; 

function ProgressInput(props){

  const setInput = props.setInput;
  const input = props.input;

  function handleInputChange(event){
    setInput(event.target.value);
  }

  function handleSendButton(){

    const winOrLoseOption = document.querySelector('input[name="option"]:checked') ? document.querySelector('input[name="option"]:checked').value : null;

    if(winOrLoseOption && input !== ''){
      const postMessage = async () => {
        try {
          const ref = await setDoc(doc(db, `board${props.user}/${props.date}`), {
            date: `${props.date}`,
            messages: [...props.messages, {
              id: `${props.messages.length + 1}`,
              winOrLose: winOrLoseOption,
              message: input,
              likes: 0,
              dislikes: 0
            }]
          });
        } catch (error) {
          console.error("Error fetching document:", error);
        }
      };

      props.setMessages([...props.messages, {
        id: `${props.messages.length + 1}`,
        winOrLose: winOrLoseOption,
        message: input,
        likes: 0,
        dislikes: 0
      }]);
      document.getElementById('input').value = "";
      document.querySelector('input[name="option"]:checked').checked = false;
      setInput('');
      postMessage();
    } else{
      return
    }
  }

  return(
    <div className="progress-input-container">
      <label htmlFor='win'>Win</label>
      <input type="radio" name='option' id='win' value="W"/>
      <label htmlFor='Lose'>Lose</label>
      <input type="radio" name='option' id='lose' value="L"/>
      <input type="text" onChange={handleInputChange} id="input"/>
      <button onClick={handleSendButton}>▶</button>
    </div>
  )
}

export default ProgressInput