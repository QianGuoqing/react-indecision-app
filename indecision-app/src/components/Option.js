import React from 'react'

export default (props) => {
  return (
    <div>
      Option: {props.option}
      <button onClick={(e) => {props.handleDeleteOption(props.option)}}>
        删除
      </button>
    </div>
  )
}
