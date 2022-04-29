export function createContainer({
  borderTopLeftRadius,
  borderTopRightRadius,
  borderBottomLeftRadius,
  borderBottomRightRadius
}: CSSStyleDeclaration): HTMLDivElement {
  const container = document.createElement('div')
  container.style.top = '0'
  container.style.left = '0'
  container.style.width = '100%'
  container.style.height = '100%'
  container.style.position = 'absolute'
  container.style.borderRadius = `${borderTopLeftRadius} ${borderTopRightRadius} ${borderBottomRightRadius} ${borderBottomLeftRadius}`
  container.style.overflow = 'hidden'
  container.style.pointerEvents = 'none'

  return container
}

export function magnitude(
  x1: number,
  y1: number,
  x2: number,
  y2: number
): number {
  const deltaX = x1 - x2
  const deltaY = y1 - y2

  return Math.sqrt(deltaX * deltaX + deltaY * deltaY)
}

export function getDistanceToFurthestCorner(
  x: number,
  y: number,
  { width, height }: DOMRect
): number {
  // 获取点击目标的位置到块级作用域边界的距离
  const topLeft = magnitude(x, y, 0, 0)
  const topRight = magnitude(x, y, width, 0)
  const bottomLeft = magnitude(x, y, 0, height)
  const bottomRight = magnitude(x, y, width, height)
  return Math.max(topLeft, topRight, bottomLeft, bottomRight)
}

export const createrippleElement = (
  x: number,
  y: number,
  size: number,
  options: any
): HTMLElement => {
  const rippleElement = document.createElement('div')

  rippleElement.style.position = 'absolute'
  rippleElement.style.width = `${size}px`
  rippleElement.style.height = `${size}px`
  rippleElement.style.top = `${y}px`
  rippleElement.style.left = `${x}px`
  rippleElement.style.background = options.color
  rippleElement.style.borderRadius = '50%'
  rippleElement.style.opacity = `${options.initialOpacity}`
  rippleElement.style.transform = `translate(-50%,-50%) scale(0)`
  rippleElement.style.transition = `transform ${options.duration}s ${options.easing}, opacity ${options.duration}s ${options.easing}`

  return rippleElement
}

export const getRelativePointer = (
  { x, y }: PointerEvent,
  { top, left }: DOMRect
) => ({
  x: x - left,
  y: y - top
})
