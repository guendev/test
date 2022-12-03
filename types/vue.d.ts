declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $axios: typeof import('axios')['AxiosInstance']
  }
}
export {}
