import { PropType } from 'vue'
import { RsButtonProps } from './type'

export const buttonProps = {
  /** 按钮类型 */
  type: {
    type: String as PropType<RsButtonProps['type']>,
    default: 'default'
  },

  /** 是否为镂空 */
  theme: {
    type: String as PropType<RsButtonProps['theme']>,
    default: 'default'
  },

  /** 组件尺寸 */
  size: {
    type: String as PropType<RsButtonProps['size']>,
    default: 'medium'
  },

  /** 是否禁用按钮 */
  disabled: {
    type: Boolean,
    default: false
  },

  /** 圆角 */
  round: {
    type: Boolean,
    default: false
  },

  /** 圆形 */
  circle: {
    type: Boolean,
    default: false
  }
} as const
