import type { ComputedRef, ExtractPropTypes, PropType } from 'vue'

export type IButtonType = 'default' | 'plain' | 'text'
export type IButtonSize = 'large' | 'medium' | 'small' | 'mini'
export type IButtonColor = 'primary' | 'success' | 'warning' | 'danger'

export const buttonProps = {
  type: {
    type: String as PropType<IButtonType>,
    default: 'default'
  },
  size: {
    type: String as PropType<IButtonSize>,
    default: 'medium'
  },
  color: {
    type: String as PropType<IButtonColor>,
    default: 'primary'
  },
  disabled: {
    type: Boolean,
    default: false
  }
} as const

export type ButtonProps = ExtractPropTypes<typeof buttonProps>

export interface UseButtonReturnType {
  classes: ComputedRef<{ [key: string]: string | boolean }>
}
