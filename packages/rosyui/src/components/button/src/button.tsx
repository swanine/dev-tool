import { defineComponent, toRefs } from 'vue'
import type { SetupContext } from 'vue'
import { buttonProps, ButtonProps } from './button-types'
import useButton from './use-button'
import './button.scss'

export default defineComponent({
  name: 'SButton',
  props: buttonProps,
  emits: ['click'],
  setup(props: ButtonProps, ctx: SetupContext) {
    const { disabled } = toRefs(props)

    const { classes } = useButton(props, ctx)

    const onClick = (e: MouseEvent) => {
      ctx.emit('click', e)
    }

    return () => {
      return (
        <button
          class={classes.value}
          disabled={disabled.value}
          onClick={onClick}
        >
          <span class="button-content">{ctx.slots.default?.()}</span>
        </button>
      )
    }
  }
})
