import type { App } from 'vue'
import Button from './src/button'

export * from './src/type'

export const RButton = {
  title: 'Button 按钮',
  category: '通用',
  status: '100%',
  install(app: App): void {
    app.component(Button.name, Button)
  }
}
export default RButton
