import { TVector, TVectorRange, IOptions } from './type/type'
import {
  getPosition,
  formatVector,
  diffVector,
  addVector,
  setTranslatePosition
} from './utils/dragUtils'

const drag = (element: HTMLElement, options?: IOptions) => {
  let { outerElement, innerElement, onDragStart, onDrag, onDragEnd } =
    options ?? {}
  // 元素的transform属性值，getComputedStyle返回值为matrix3d形式
  let startTransform = window.getComputedStyle(element).transform

  // 拖拽开始时的鼠标位置
  let startPosition: TVector | null = null

  // 拖拽结束时的鼠标位置
  let endPosition: TVector | null = null

  // 拖拽位移向量范围
  let draggingMoveVectorRange: TVectorRange | null = null
  // 元素位移向量（拖拽后修改）
  let draggedMoveVector: TVector = [0, 0]
  // 元素位移向量（拖拽时修改）
  let draggingMoveVector: TVector = [0, 0]

  // 拖拽范围元素
  outerElement = outerElement ?? document.body
  // 拖拽的元素
  element = element
  // 拖拽图标元素
  innerElement = innerElement ?? element

  const onMouseDown = (e: MouseEvent | TouchEvent) => {
    e.stopPropagation()
    // 记录当前鼠标或触摸位置
    startPosition = getPosition(e)

    if (outerElement && element && innerElement) {
      // 记录拖拽位移向量范围
      const outerElementRect = outerElement.getBoundingClientRect()
      const elementRect = element.getBoundingClientRect()
      console.log(outerElementRect, elementRect)

      draggingMoveVectorRange = [
        outerElementRect.top - elementRect.top,
        outerElementRect.bottom - elementRect.bottom,
        outerElementRect.left - elementRect.left,
        outerElementRect.right - elementRect.right
      ]
    }
    typeof onDragStart === 'function' && onDragStart(draggedMoveVector)
  }

  const onMouseMove = (e: MouseEvent | TouchEvent) => {
    if (startPosition && draggingMoveVectorRange) {
      // 当前鼠标或触摸位置
      endPosition = getPosition(e)

      // 本次的拖拽位移向量
      const currentMoveVector = formatVector(
        diffVector(startPosition, endPosition),
        draggingMoveVectorRange
      )
      // 之前的拖拽位移向量+本次的拖拽位移向量
      draggingMoveVector = addVector(draggedMoveVector, currentMoveVector)
      element.style.transform = setTranslatePosition(
        startTransform,
        draggingMoveVector
      )
      typeof onDrag === 'function' && onDrag(draggingMoveVector)
    }
  }
  const onMouseUp = () => {
    if (startPosition && draggingMoveVectorRange) {
      draggedMoveVector = draggingMoveVector
      typeof onDragEnd === 'function' && onDragEnd(draggedMoveVector)
    }
    startPosition = null
  }

  const addEventListener = () => {
    if (innerElement) {
      innerElement.addEventListener('mousedown', onMouseDown)
      document.addEventListener('mousemove', onMouseMove)
      document.addEventListener('mouseup', onMouseUp)
    }
  }

  const removeEventListener = () => {
    if (innerElement) {
      innerElement.removeEventListener('mousedown', onMouseDown)
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseup', onMouseUp)
    }
  }

  addEventListener()
  return removeEventListener
}

export { drag }
