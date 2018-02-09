let count = 0
const someId = 'myidhere'
const addOne = () => {
  count = count + 1
  renderCounterApp()
}
const minusOne = () => {
  count = count - 1
  renderCounterApp()
}
const reset = () => {
  count = 0
  renderCounterApp()
}

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button className="button" id={someId} onClick={addOne}>加1</button>
      <button onClick={minusOne}>减1</button>
      <button onClick={reset}>重置</button>
    </div>
  )

  ReactDOM.render(
    templateTwo, 
    appRoot
  )
}

renderCounterApp()