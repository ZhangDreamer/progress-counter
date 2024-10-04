import './ProgressInput.css';

function ProgressInput(props){

  const setInput = props.setInput;
  const input = props.input;

  function handleInputChange(event){
    setInput(event.target.value);
  }

  function handleSendButton(){
    props.setMessages([...props.messages, {
      id: '003',
      date: '29/9/24',
      winOrLose: 'W',
      message: input,
      likes: 1,
      dislikes: 0
    }])

    setInput('');
  }

  return(
    <div className="progress-input-container">
      <label htmlFor='win'>Win</label>
      <input type="radio" name='option' id='win' value="win"/>
      <label htmlFor='Lose'>Lose</label>
      <input type="radio" name='option' id='lose' value="lose"/>
      <input type="text" onChange={handleInputChange}/>
      <button onClick={handleSendButton}>▶</button>
    </div>
  )
}

export default ProgressInput