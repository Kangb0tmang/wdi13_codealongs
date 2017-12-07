import React from 'react'
import HelloWorld from './HelloWorld'
import Slider from './Slider'
import LikeButton from './LikeButton'
import Bar from './Bar'

export default function App()
{
  return <div>
    <h1>awesome app</h1>
    <Slider startValue="5" />
    <HelloWorld name="jon"/>
    <hr />
    <Slider />
    <LikeButton likes="0" />
    <Bar value="0" />
  </div>
}