
function ProgressHeader(){

  return(
    <div className='progress-header'>
      <h1>Name</h1>
      <div className='progress-bar'>
        <span>Level X</span>
        <div className="progress-meter" style={{width: 40 + '%'}}></div>
        <div className="search-dropdown">
          <button>Search⮟</button>
          <div className="search-content">
            <div className='keyword-search'>
              <span>Keyword</span>
              <input/>
            </div>
            <div className='search-date'>
              <span>Date</span>
              <input/>
              <input/>
              <input/>
            </div>
            <button className='submit-button'>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProgressHeader