import { computed, defineComponent, toRefs } from 'vue'
import type { SetupContext } from 'vue'
import { usePrefixClass, useClassName } from '../../../hooks'
import { RsButtonProps } from './type'
import { buttonProps } from './props'
import useButton from './use-button'
import './button.scss'

export default defineComponent({
  name: 'RButton',
  props: buttonProps,
  emits: ['click'],
  setup(props: RsButtonProps, ctx: SetupContext) {
    const COMPONENT_NAME = usePrefixClass('button')
    const { SIZE, STATUS } = useClassName('button')

    const { disabled, round, circle, theme } = toRefs(props)

    const mergeTheme = computed(() => {
      if (theme?.value) return theme.value
      return 'default'
    })

    const buttonClasses = computed(() => [
      `${COMPONENT_NAME.value}`,
      `${COMPONENT_NAME.value}--${mergeTheme.value}`,
      `${COMPONENT_NAME.value}--${props.type}`,
      SIZE.value[props.size!],
      {
        [STATUS.value.disabled]: disabled?.value,
        ['is-round']: round?.value,
        ['is-circle']: circle?.value
      }
    ])

    const onClick = (e: MouseEvent) => {
      ctx.emit('click', e)
    }

    return () => {
      return (
        <button
          class={buttonClasses.value}
          disabled={disabled?.value}
          onClick={onClick}
        >
          <span class="button-content">{ctx.slots.default?.()}</span>
        </button>
      )
    }
  }
})
