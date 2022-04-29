import { computed } from 'vue'
import { RsButtonProps, UseButtonReturnType } from './type'

export default function useButton(props: RsButtonProps): UseButtonReturnType {
  const classes = computed(() => ({
    [`${props.type}`]: true,
    [`rosy-button-${props.theme}`]: true
  }))

  return { classes }
}
