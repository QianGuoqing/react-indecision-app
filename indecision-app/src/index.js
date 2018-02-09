import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: []
}

const onFormSubmit = (e) => {
  e.preventDefault()

  const option = e.target.elements.option.value

  if (option) {
    app.options.push(option)
    e.target.elements.option.value = ''
  }

  renderView()
}

const onRemoveAll = () => {
  app.options= []
  renderView()
}

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length)
  const option = app.options[randomNum]
  console.log(option)
}

const appRoot = document.getElementById('root')

const numbers = [55, 101, 1000]

const renderView = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      {app.options.length > 0 ? <p>Options</p> : <p>No options</p>}
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
      <button onClick={onRemoveAll}>删除All</button>
      <ol>
        {
          app.options.map((option, index) => (
            <li key={index.toString()}>{option}</li>
          ))
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>添加option</button>
      </form>
    </div>
  )

  ReactDOM.render(template, appRoot)
}

renderView()