import { defineComponent } from 'vue'
import { RouterView, RouterLink } from 'vue-router'
import components from './cases'

export default defineComponent({
  render() {
    return (
      <>
        <ul>
          {components.map((router, index) => {
            return (
              <li>
                <RouterLink to={router}>
                  {index} - {router.name}
                </RouterLink>
              </li>
            )
          })}
        </ul>
        <RouterView />
      </>
    )
  }
})
