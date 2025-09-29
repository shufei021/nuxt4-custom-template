// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-09-29',
  devtools: { enabled: true },
  site: {
    url: "http://localhost:3000",
    name: "localhost",
  },
  sitemap: {
    sources: ["/api/__sitemap__/urls"],
    exclude: ["/login/**"],
    cacheMaxAgeSeconds: 6 * 60 * 60,
    autoLastmod: true,
    // 添加更多配置
    defaults: {
      changefreq: "weekly",
      priority: 0.8,
      lastmod: new Date(),
    },
    // 确保sitemap可以被搜索引擎访问
    xslColumns: [
      { label: "URL", width: "50%" },
      { label: "Last Modified", select: "sitemap:lastmod", width: "25%" },
      { label: "Priority", select: "sitemap:priority", width: "12.5%" },
      { label: "Change Frequency", select: "sitemap:changefreq", width: "12.5%" },
    ],
  },
  // seo 设置
  app: {
    head: {
      title: 'Nuxt4.0', // default fallback title
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },
  modules: ['@pinia/nuxt', '@nuxt/image', '@nuxtjs/sitemap'],
  runtimeConfig:{
    public: {
      API_BASE_DEV: 'http://localhost:4000',
      API_BASE_PROD: 'https://api.example.com/v1'
    },
  },
  ssr: true, // 是否开启 ssr
  devServer: {
    // 服务端口号
    port: 3000,
  },
  css: ["~/assets/css/global.css","~/assets/css/iconfont.css"], // css 入口文件
  nitro: {
    // 代理，前后端分离有用
    // devProxy: {
    //   "/api": {
    //     target: "http://localhost:3000",
    //     changeOrigin: true,
    //     prependPath: true,
    //   },
    // },
  },
})