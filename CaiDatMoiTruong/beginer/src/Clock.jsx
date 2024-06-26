import React, { Component } from 'react'

export default class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: {
        created: new Date().toLocaleTimeString()
      },
      seconds: {
        created: new Date().getSeconds()
      }
    }
    this.date = '24/05/2024'
  }
  getTime = () => {
    const newState = {
      ...this.state,
      time: { created: new Date().toLocaleTimeString() },
      seconds: { created: new Date().getSeconds() }
    }
    this.setState(newState)
  }

  render() {
    return (
      <div>
        <h1>Hello world </h1>
        <h2>It is {this.state.time.created}</h2>
        <h3>This is {this.date}</h3>
        <h3>This is {this.state.seconds.created}</h3>
        <button onClick={this.getTime}>Get Time</button>
      </div>
    )
  }
}
