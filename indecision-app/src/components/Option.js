import React from 'react'

export default (props) => {
  return (
    <div className="option">
      <p className="option__text">{props.count}. {props.option}</p>
      <button 
        onClick={(e) => {props.handleDeleteOption(props.option)}}
        className="button button--link">
        Remove
      </button>
    </div>
  )
}
