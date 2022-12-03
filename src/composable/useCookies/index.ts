import { inject } from 'vue'
import { VueCookies } from 'vue-cookies'

export const useCookies = () => {
  return inject<VueCookies>('$cookies')
}
