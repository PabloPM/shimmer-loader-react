import React from 'react'
import Image from './Image'
import Line from './Line'

const card = ({ numOfLines = 3, type = 'square', imageSize, randomLinesWidth }) => {
  let lines = []
    , imageProps = {}
    , lineProps = {}
  if (numOfLines < 2) numOfLines = 2
  if (numOfLines < 10 && !imageSize) imageSize = `${(numOfLines * 2) - 1}vh`
  for (let line = 0; line < numOfLines; line++) lines.push(line)
  if (typeof imageSize === 'number' || typeof imageSize === 'string') imageProps = { type, height: imageSize }
  if (randomLinesWidth) lineProps.randomWidth = true

  return <div className='shimmer-card'>
    <div className='shimmer-card-photo'>
      <Image {...imageProps} />
    </div>
    <div className='shimmer-card-content'>
      {
        lines.map(line => <Line key={line} {...lineProps} />)
      }
    </div>
  </div>
}

export default card