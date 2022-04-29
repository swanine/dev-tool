import { ripple } from './ripple'

export default {
  mounted(el: HTMLElement, bind: any) {
    el.addEventListener('pointerdown', (event) => {
      // 必须确保disabled 属性存在 否则指令终止报错
      if (bind.value && bind.value.disabled) return

      ripple(event, el)
    })
  }
}
