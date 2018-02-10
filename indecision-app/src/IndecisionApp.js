import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    )
  }
}

class Action extends Component {
  render() {
    return (
      <div>
        <button 
          onClick={this.props.handlePick}
          disabled={!this.props.hasOption}>What shoud I do?</button>
      </div>
    )
  }
}

class Options extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>删除 All</button>
        {
          this.props.options.map((option, index) => (
            <Option key={index.toString()} option={option} />
          ))
        }
      </div>
    )
  }
}

class Option extends Component {
  render() {
    return (
      <div>
        <p>Option: {this.props.option}</p>
      </div>
    )
  }
}

class AddOption extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: undefined
    };
  }

  handleAddOption = (e) => {
    e.preventDefault()

    const option = e.target.elements.option.value.trim()
    const error = this.props.handleAddOption(option)
    this.setState(() => {
      return { error }
    })
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"/>
          <button>添加Option</button>
        </form>
      </div>
    )
  }
}

class IndecisionApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: []
    };
  }

  handleDeleteOptions = () => {
    this.setState(() => {
      return {
        options: []
      }
    })
  }

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length)
    const option = this.state.options[randomNum]

  }

  handleAddOption = (option) => {
    if (!option) {
      return '请输入有效的值'
    } else if (this.state.options.indexOf(option) > -1) {
      return '该选项已经存在了'
    }

    this.setState((prevState) => {
      return {
        options: prevState.options.concat([option])
      }
    });
  }

  render() {
    const title = 'Indecision App'
    const subtitle = 'Put your life in the hands of a computer'
    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action 
          hasOption={this.state.options.length > 0}
          handlePick={this.handlePick}/>
        <Options 
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}/>
        <AddOption
          handleAddOption={this.handleAddOption}/>
      </div>
    );
  }
}

export default IndecisionApp;
