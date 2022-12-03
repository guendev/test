<template>
  <div>
    <component :is="layout" :key="layout" />
  </div>
</template>

<script lang='ts' setup>
import { useLoadingIndicator } from '@nguyenshort/vue3-loading-indicator'

const cookies = useCookies()
const useUser = useUserStore()
// Init app
const vueClientInit = async  () => {
  useUser.setToken(cookies?.get('_token'))
  // kiểm tra cookie, lấy user
  if (useUser._token) {
    await useUser.getMe()
  }

  if(!useUser.auth) {
    useUser.setToken('')
    cookies?.remove('_token')
  }

  // Todo: check auth
  /**
   * ```
   * if (this.useUser.auth) {
   *       if (this.$route.path === '/') {
   *         this.$router.replace('/dashboard')
   *       }
   *     } else {
   *       this.$router.replace('/')
   *     }
   * ```
   */
}

await vueClientInit()

const layouts = shallowRef<Record<string, ReturnType<typeof defineComponent>>>({})

const allowedLayouts = ['default', 'blank']
const asyncLayout = () => {
  allowedLayouts.forEach(layout => {
    layouts.value[layout] = defineAsyncComponent(() => import(`../../layouts/${layout}.vue`))
  })
}

asyncLayout()

const route = useRoute()
const layout = computed(() => {
  // lấy layout từ router
  const _name = allowedLayouts.includes(route.meta.layout || 'default') ? route.meta.layout || 'default' : 'default'
  return layouts.value[_name]
})

// setup progress bar
const router = useRouter()
const $loading = useLoadingIndicator()
const setupProgressLoading = () => {
  $loading?.start()
  router.beforeEach((to, from, next) => {
    //  does the page we want to go to have a meta.progress object
    //  start the progress bar
    $loading?.start()
    //  continue to next page
    next();
  })
  router.afterEach(() => {
    //  finish the progress bar
    $loading?.finish()
  })
}

setupProgressLoading()

onMounted(() => {
  $loading?.finish()
})
</script>

<script lang="ts">
export default defineComponent({
  name: 'MasterLayout'
})
</script>

<style>
.vue-process-bar ._process {
  transition: 200ms linear;
}
</style>
