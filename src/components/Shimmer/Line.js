import React from 'react'
import { getGradient } from './utils'

const line = props => {
  let classes = ''
    , styles = {
      width: props.randomWidth ? `${Math.floor((Math.random() * 75) + 25)}%` : '100%'
    }

  if (props.borderRadius) classes += 'shimmer-bordered'
  if (props.baseColor || props.stopColor) styles.backgroundImage = getGradient(props.baseColor, props.stopColor)

  return <div className={`shimmer-line shimmer ${classes}`} style={styles}></div>
}

export default line