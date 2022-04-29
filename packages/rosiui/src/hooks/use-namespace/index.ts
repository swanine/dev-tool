import { computed } from 'vue'
import { prefix } from '../../rosi.config'

export function usePrefixClass(componentName?: string) {
  return computed(() => {
    return componentName ? `${prefix}-${componentName}` : prefix
  })
}

export function useClassName(componentName?: string) {
  const prefixClass = `${prefix}-${componentName}`
  return {
    SIZE: computed(() => ({
      small: `${prefixClass}--small`,
      medium: `${prefixClass}--medium`,
      large: `${prefixClass}--large`,
      default: ''
    })),
    STATUS: computed(() => ({
      loading: `${prefixClass}-is-loading`,
      loadMore: `${prefixClass}-is-load-more`,
      disabled: `${prefixClass}-is-disabled`,
      focused: `${prefixClass}-is-focused`,
      success: `${prefixClass}-is-success`,
      error: `${prefixClass}-is-error`,
      warning: `${prefixClass}-is-warning`,
      selected: `${prefixClass}-is-selected`,
      active: `${prefixClass}-is-active`,
      checked: `${prefixClass}-is-checked`,
      current: `${prefixClass}-is-current`,
      hidden: `${prefixClass}-is-hidden`,
      visible: `${prefixClass}-is-visible`
    }))
  }
}
