import { drag } from './drag'

export default {
  mounted(el: HTMLElement, bind: any) {
    // el.addEventListener('pointerdown', (event) => {
    // 必须确保disabled 属性存在 否则指令终止报错
    // if (bind.value && bind.value.disabled) return

    drag(el, bind.value)
    // })
  },
  updated(el: HTMLElement, bind: any) {}
}
