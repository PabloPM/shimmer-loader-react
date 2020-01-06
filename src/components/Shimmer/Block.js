import React from 'react'
import { getGradient } from './utils'

const block = ({ baseColor, borderRadius, height, randomWidth, stopColor, width }) => {

  let classes = ''
    , styles = {
      width: randomWidth ? `${Math.floor((Math.random() * 75) + 25)}%` : '100%'
    }

  if (borderRadius) classes += 'shimmer-bordered '
  if (baseColor || stopColor) styles.backgroundImage = getGradient(baseColor, stopColor)
  if (typeof width === 'number' || typeof width === 'string') {
    width = typeof width === 'number' ? `${width}px` : width
    styles.width = width
  }
  if (typeof height === 'number' || typeof height === 'string') {
    height = typeof height === 'number' ? `${height}px` : height
    styles.height = height
  }

  return <div className={`shimmer-block shimmer ${classes}`} style={styles}></div>
}

export default block
