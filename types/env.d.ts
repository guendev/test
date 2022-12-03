/**
 * @description Auto created by src/plugins/vite/env.ts 
 * @author: Yuan
 * @link https://github.com/nguyenshort
 * DON'T EDIT IT MANUALLY
 */
interface ImportMetaEnv {
  readonly VITE_PORT: string
  readonly VITE_DOMAIN: string

  readonly VITE_SMILE_EYE_SERVER: string
  readonly VITE_SMILE_EYE_GRAPHQL: string

  // Máy chủ lưu trữ
  readonly VITE_BUNNY_URL: string
  readonly VITE_BUNNY_TOKEN: string

  readonly VITE_NOTIFY_GRAPHQL: string
  readonly VITE_NOTIFY_SUBSCRIPTION: string
  readonly VITE_NOTIFY_API_KEY: string

}
interface ImportMeta {
  readonly env: ImportMetaEnv
}