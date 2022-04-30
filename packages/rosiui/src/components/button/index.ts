import type { App } from 'vue'
import Button from './src/button'

export * from './src/type'

export const RButton = {
  install(app: App): void {
    app.component(Button.name, Button)
  }
}
export default RButton
