import React from 'react'

export default class LikeButton extends React.Component
{
  constructor(props)
  {
    super(props)
    this.clickHandler = this.clickHandler.bind(this)
    this.state =
    {
      likes: 0
    }
  }

  clickHandler(event)
  {
    const newLikesCount = this.state.likes + 1
    this.setState({ likes: newLikesCount })
  }

  render()
  {
    const divStyle = { border: '5px solid black' }
    return <div style={divStyle}>
      <span onClick={this.clickHandler}>Like</span>
      <span>{this.state.likes}</span>
    </div>
  }
}