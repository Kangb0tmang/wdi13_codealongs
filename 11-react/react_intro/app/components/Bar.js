import React from 'react'

export default class Bar extends React.Component
{
  constructor(props)
  {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state =
    {
      value: 0
    }
  }

  handleChange(event)
  {
    this.setState({ value: event.target.value })
  }

  render()
  {
    const changeWidth = this.state.value
    const barContainer = { border: '2px solid black', background: 'mistyrose'}
    const barStyle = { width: '100%' }
    const fillBar = { width: `${changeWidth}%`, height: '50px', background: 'dodgerblue'}
    const sliderContainer = { width: '50%'}
    return <div>
      <div style={barContainer}>
        <div style={fillBar} onChange={this.handleChange} value={this.state.value}></div>
      </div>
      <div style={sliderContainer}>
        <input type="range" onChange={this.handleChange} value={this.state.value} min="0" max="100" style={barStyle}/>
        <span>{this.state.value}</span>
      </div>
    </div>
  }
}