import type { App } from 'vue'
import components from './components'
import { version } from './rosi.config'

export function install(app: App): void {
  // eslint-disable-next-line no-restricted-syntax
  components.forEach((comp) => {
    app.use(comp)
  })
}

export * from './components'

export default {
  install,
  version
}
