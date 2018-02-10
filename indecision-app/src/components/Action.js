import React from 'react'

export default (props) => {
  return (
    <div>
      <button 
        onClick={props.handlePick}
        disabled={!props.hasOption}>What shoud I do?</button>
    </div>
  )
}
