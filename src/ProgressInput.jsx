import './ProgressInput.css';

function ProgressInput(props){


  function handleInputChange(event){
    props.setInput(event.target.value);
  }

  function handleSendButton(){

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