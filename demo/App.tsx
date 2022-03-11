import { defineComponent } from 'vue'
import RosyButton from '../rosyui/components/button/src/button'
import ripple from '../rosyui/directives/ripple/v-ripple-directives'

export default defineComponent({
  directives: {
    ripple
  },
  render() {
    return (
      <>
        <RosyButton v-ripple>Click Me</RosyButton>
        <RosyButton v-ripple color='success'>Click Me</RosyButton>
      </>
    )
  }
})
