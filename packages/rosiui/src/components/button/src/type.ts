/* eslint-disable */
import type { ComputedRef } from 'vue'
import { SizeEnum, ThemeEnum } from '../../../common'

export interface RsButtonProps {
  /**
   * 按钮类型
   * @default default
   */
  type?: 'default' | 'plain' | 'text'

  /**
   * 主题
   * @default default
   */
  theme?: ThemeEnum

  /**
   * 组件尺寸
   * @default medium
   */
  size?: SizeEnum

  /**
   * 是否禁用按钮
   * @default false
   */
  disabled?: boolean

  /**
   * 圆角
   * @default false
   */
  round?: boolean

  /**
   * 圆形
   * @default false
   */
  circle?: boolean
}

export interface UseButtonReturnType {
  classes: ComputedRef<{ [key: string]: string | boolean }>
}
