import React from 'react'
import './App.css'
import { Card } from './components/Shimmer'

function App() {
  return <div className="App">
    <div className='container'>
      <Card />
      <Card numOfLines={1} />
      <Card numOfLines={7} />
      <Card numOfLines={7} type='circle' randomLinesWidth />
    </div>
  </div>
}

export default App


/*
  <Line randomWidth borderRadius baseColor='red' stopColor='blue' />
  <Line randomWidth />
  <Line borderRadius />
  <Line randomWidth borderRadius />

  <Block randomWidth borderRadius baseColor='red' stopColor='green' />
  <Block randomWidth />
  <Block borderRadius height='10vh' />
  <Block borderRadius width='100px' />
  <Block borderRadius height='10vh' width='20%' />

  <Image borderRadius />
  <Image type='circle' baseColor='red' stopColor='green' />
  <Image type='square' />
  <Image type='square' width={300} />
  <Image type='circle' height={150} />
  <Image type='square' />
  <Image type='circle' />
  <Image type='circle' height='10vh' />
  <Image width={300} height={150} baseColor='red' stopColor='green' />
*/