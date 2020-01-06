import React from 'react'
import { getGradient, getSizes } from './utils'

const image = ({ baseColor, borderRadius, height, stopColor, type, width }) => {
  console.log(baseColor, borderRadius, height, stopColor, type, width)
  let classes = ''
    , styles = {}

  if (borderRadius) classes += 'shimmer-bordered '
  if (baseColor || stopColor) styles.backgroundImage = getGradient(baseColor, stopColor)
  if (height || width) styles = { ...styles, ...getSizes(height, width, type) }
  if (type === 'circle') classes += 'shimmer-image-circle '


  return <div className={`shimmer-image shimmer ${classes}`} style={styles}></div>
}

export default image

/*
if (props.type && props.type === 'photo') {
    classes += 'photo '
    delete styles.width
  }

  if (props.type && props.type === 'photo-circle') {
    classes += 'photo-circle '
    delete styles.width
  }

*/