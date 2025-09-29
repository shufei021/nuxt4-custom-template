<template>
    <div>
      <div class="fixed top-0 left-0 h-60px w-full flex justify-center items-center bg-gray-200">
        <nuxt-link class="mr-2" to="/">Home </nuxt-link>
        <nuxt-link class="mr-2" to="/about">About</nuxt-link>
      </div>
      <div class="pt-60px mx-auto max-w-880px">
        <div class="p-[8px] min-h-[100vh]">
          <slot></slot>
        </div>
      </div>
      <div class="h-20vh w-full flex flex-col justify-center items-center bg-[#d4e2ff]">
        Blog
        <div>footer</div>
      </div>
    </div>
  </template>
  