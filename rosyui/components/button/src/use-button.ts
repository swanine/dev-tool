import { computed } from 'vue'
import type { SetupContext } from 'vue'
import { ButtonProps, UseButtonReturnType } from './button-types'

export default function useButton(
  props: ButtonProps,
  ctx: SetupContext
): UseButtonReturnType {
  const classes = computed(() => ({
    'rosy-button': true,
    [`${props.type}`]: true,
    [`rosy-button-${props.color}`]: true,
    [`rosy-button-${props.size}`]: true
  }))

  return { classes }
}
