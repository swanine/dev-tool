/**
 * 向量类型
 */
export type TVector = [number, number]

/**
 * 向量范围
 */
export type TVectorRange = [number, number, number, number]

export interface IOptions {
  /** 拖拽范围元素 */
  outerElement?: HTMLElement
  /** 拖拽图标元素 */
  innerElement?: HTMLElement
  /** 拖拽开始的回调 */
  onDragStart?: (v: TVector) => void
  /** 拖拽中的回调 */
  onDrag?: (v: TVector) => void
  /** 拖拽结束的回调 */
  onDragEnd?: (v: TVector) => void
}
