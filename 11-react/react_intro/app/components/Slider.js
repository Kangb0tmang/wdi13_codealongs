import React from 'react'

export default class Slider extends React.Component
{
  constructor(props)
  {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state =
    {
      value: props.startValue || 0
    }
  }

  handleChange(event)
  {
    this.setState({ value: event.target.value })
  }

  render()
  {
    return <div>
      <input type="range" onChange={this.handleChange} value={this.state.value} min="0" max="10"/>
      <input type="number" onChange={this.handleChange} value={this.state.value} />
      {/* <span>{this.state.value}</span> */}
    </div>
  }
}