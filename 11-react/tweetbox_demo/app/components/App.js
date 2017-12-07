import React from 'react'
// import Tweetbox from './Tweetbox'

export default class App extends React.Component
{
  constructor(props)
  {
    super(props)
    this.handleListItemClick = this.handleListItemClick.bind(this)
    this.state =
    {
      tasks:
      [{
        completed: false,
        content: 'pudding'
      },
      {
        completed: true,
        content: 'winning'
      }]
    }
  }

  handleListItemClick(index)
  {
    var tasks = this.state.tasks
    tasks[index].completed = !tasks[index].completed
    this.setState({ tasks: tasks })
  }

  render()
  {
    const {tasks} = this.state

    return <div>
      <h1>todor</h1>
      <ul>
        {tasks.map((task, index) => {
          const isCompleted = task.completed ? 'completed' : ''
          return <li key={index} onClick={() => {this.handleListItemClick(index)}} className={isCompleted}>{task.content}</li>
        })}
      </ul>
    </div>
  }
}