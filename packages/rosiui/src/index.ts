import type { App } from 'vue'
import * as components from './components'

export function install(app: App): void {
  console.log(components, app)
  // Object.keys(components).forEach((key) => {
  //   app.use(components[key])
  // })
}

export * from './components'
export default {
  install
}
