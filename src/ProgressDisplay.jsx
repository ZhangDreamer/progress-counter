import ProgressHeader from './ProgressHeader.jsx';

function ProgressDisplay(){

  return(
    <div className='progress-display-container'>
      <ProgressHeader/>
      <div className='progress-display'>
        <div className='display-header'>
          <h3>Date</h3>
          <h3>Today's Result: +2</h3>
        </div>
        <div className='progress-notes'>
          <h4>29/9/2024</h4>
          <div className='note'>
            <span>W/L</span>
            <p>I did exercise</p>
            <button>Delete</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProgressDisplay