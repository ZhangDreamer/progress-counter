import './ProgressInput.css';

function ProgressInput(props){

  const setInput = props.setInput;
  const input = props.input;

  function handleInputChange(event){
    setInput(event.target.value);
  }

  function handleSendButton(){

    const winOrLoseOption = document.querySelector('input[name="option"]:checked').value;

    if(winOrLoseOption){
      props.setMessages([...props.messages, {
        id: `${props.messages.length + 1}`,
        date: '29/9/24',
        winOrLose: winOrLoseOption,
        message: input,
        likes: 0,
        dislikes: 0
      }])
  
      setInput('');
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
      <input type="text" onChange={handleInputChange}/>
      <button onClick={handleSendButton}>▶</button>
    </div>
  )
}

export default ProgressInput