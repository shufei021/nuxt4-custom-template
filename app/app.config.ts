// Nuxt 提供了一个 app.config 配置文件，用于在应用中暴露响应式配置，可在生命周期内或通过 Nuxt 插件动态更新，并支持热模块替换（HMR）。
// 你可以通过 app.config.ts 文件轻松提供运行时的应用配置。
export default defineAppConfig({
    foo: 'bar'
})
  