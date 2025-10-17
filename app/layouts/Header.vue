<template>
  <header class="border-b border-gray-200 dark:border-gray-800">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <NuxtLink to="/" class="text-xl font-bold">Nuxt4</NuxtLink>
      <nav class="flex gap-4">
        <NuxtLink to="/">首页</NuxtLink>
        <NuxtLink to="/article">文章</NuxtLink>
        <NuxtLink to="/about">关于</NuxtLink>
      </nav>
    </div>
  </header>
</template>