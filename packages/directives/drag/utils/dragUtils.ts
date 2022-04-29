import { TVector } from '../type/type'

/**
 * 向量加法
 * @param vector1 向量1
 * @param vector2 向量2
 * @returns 向量1 + 向量2
 */
export const addVector = (vector1: TVector, vector2: TVector): TVector => {
  const x = vector1[0] + vector2[0]
  const y = vector1[1] + vector2[1]
  return [x, y]
}

/**
 * 向量减法
 * @param vector1 向量1
 * @param vector2 向量2
 * @returns 向量2 - 向量1
 */
export const diffVector = (vector1: TVector, vector2: TVector): TVector => {
  const x = vector2[0] - vector1[0]
  const y = vector2[1] - vector1[1]
  return [x, y]
}

/**
 * 规范化向量
 * @param vector 向量
 * @param range 向量取值范围
 * @returns 规范化后的向量
 */
export const formatVector = (vector: TVector, range: number[]): TVector => {
  let x = vector[0]
  let y = vector[1]
  x = Math.max(x, range[2])
  x = Math.min(x, range[3])
  y = Math.max(y, range[0])
  y = Math.min(y, range[1])
  return [x, y]
}

/**
 * 从旧transform属性和偏移向量获取新transform属性
 * @param transform 旧transform属性
 * @param vector 偏移向量
 * @returns 新transform属性
 */
export const setTranslatePosition = (
  transform: string,
  vector: TVector
): string => {
  return `translate3d(${vector[0]}px, ${vector[1]}px, 0px) ${transform.replace(
    'none',
    ''
  )}`
}
export const getPosition = (e: MouseEvent | TouchEvent): TVector => {
  if (e instanceof MouseEvent) {
    return [e.pageX, e.pageY]
  }
  const touch = e.touches[0]
  return [touch.pageX, touch.pageY]
}
