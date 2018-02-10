import React from 'react'

import Option from './Option'

export default (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>删除 All</button>
      {props.options.length === 0 && <p>Please add an option to get started!</p>}
      {
        props.options.map((option, index) => (
          <Option 
            key={index.toString()} 
            option={option}
            handleDeleteOption={props.handleDeleteOption} />
        ))
      }
    </div>
  )
}
