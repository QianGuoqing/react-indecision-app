import React, { Component } from 'react';

import Header from './components/Header'
import Action from './components/Action'
import AddOption from './components/AddOption'
import Options from './components/Options'
import OptionModal from './components/OptionModal'

class IndecisionApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
      selectedOption: undefined
    };
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('options')
      const options = JSON.parse(json)
      if (options) {
        this.setState(() => ({ options: options }))
      }
    } catch (e) {

    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options)
      localStorage.setItem('options', json)
    }
  }

  componentWillUnmount() {
    console.log('component will unmount')  
  }

  handleDeleteOptions = () => {
    this.setState(() => {
      return {
        options: []
      }
    })
  }

  handleClearSelectedOption = () => {
    this.setState(() => ({ selectedOption: undefined }))
  }

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length)
    const option = this.state.options[randomNum]
    this.setState(() => ({
      selectedOption: option
    }));
  }

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => {
        return optionToRemove !== option
      })
    }))
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
        <div className="container">
          <Action 
            hasOption={this.state.options.length > 0}
            handlePick={this.handlePick}/>
          <div className="widget">
            <Options 
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}/>
            <AddOption
              handleAddOption={this.handleAddOption}/>   
          </div>     
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}/>
      </div>
    );
  }
}

export default IndecisionApp;
