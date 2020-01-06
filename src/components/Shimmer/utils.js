export const getGradient = (base, colorStop) => {
  base = typeof base === 'string' ? base : '#ebebeb'
  colorStop = typeof colorStop === 'string' ? colorStop : '#c1c1c1'
  return `linear-gradient(135deg, ${base} calc(50% - 100px), ${colorStop} 50%, ${base} calc(50% + 100px))`
}


export const getSizes = (height, width, type) => {
  let sizes = {}

  height = typeof height === 'number' ? `${height}px` : height
  width = typeof width === 'number' ? `${width}px` : width

  if (type === 'square' || type === 'circle') {
    if (height) width = height
    else height = width
  }
  sizes = { height, width }
  if (typeof sizes.height !== 'string') delete sizes.height
  if (typeof sizes.width !== 'string') delete sizes.width

  return sizes
}