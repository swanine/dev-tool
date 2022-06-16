import { defineComponent } from 'vue'
import RosyButton from '../rosyui/components/button/src/button'
import ripple from '../rosyui/directives/ripple/v-ripple-directives'
import drag from '../rosyui/directives/drag/v-drag-directives'
import './style.scss'

export default defineComponent({
  directives: {
    ripple,
    drag
  },
  render() {
    return (
      <>
        <RosyButton v-ripple>Click Me</RosyButton>
        <RosyButton v-ripple color="success">
          Click Me
        </RosyButton>
        <RosyButton v-drag>Drag Me</RosyButton>
      </>
    )
  }
})
