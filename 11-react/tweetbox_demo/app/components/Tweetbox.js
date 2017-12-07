import React from 'react'
import './Tweetbox.css'

export default class Tweetbox extends React.Component
{
  constructor(props)
  {
    super(props)
    this.onTextareaChange = this.onTextareaChange.bind(this)
    this.state =
    {
      content: '',
      maxTweetLength: 50
    }
  }

  onTextareaChange(event)
  {
    this.setState({ content: event.target.value })
    console.log(this.state.content);
  }

  render()
  {
    const { maxTweetLength, content } = this.state
    const isDisabled = content.length <= 0 || content.length > maxTweetLength

    const charsLeft = maxTweetLength - content.length
    const spanClass = charsLeft < 20 ? 'warning' : ''
    // var spanClass = ''
    // if (charsLeft < 20)
    // {
    //   spanClass = 'warning'
    // }

    return (
      <div>
        <textarea onChange={this.onTextareaChange} placeholder="what's happening?"></textarea>
        <span className={spanClass}>{charsLeft}</span>
        <button disabled={isDisabled}>Tweet</button>
      </div>
    )
  }
}