import './ProgressInput.css';

function ProgressInput(){

  return(
    <div className="progress-input-container">
      <label for='win'>Win</label>
      <input type="radio" name='option' id='win' value="win"/>
      <label for='Lose'>Lose</label>
      <input type="radio" name='option' id='lose' value="lose"/>
      <input type="text"/>
      <button>▶</button>
    </div>
  )
}

export default ProgressInput