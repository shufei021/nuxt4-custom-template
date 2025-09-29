<template>
    <div class="p-8" >
      <h1>{{ data.name }}</h1>
      <p>{{ data.desc }}</p>
      <p>{{ data.content }}</p>
      <button @click="() => $router.push('/')">返回</button>
    </div>
  </template>
  
  <script setup lang="ts">
   import { useFetchGet } from '~/composables/useFetchRequest';
//   import { $http } from "~/request";
  
  const route = useRoute();
  
//   interface Post  {
//     id: number;
//     name: string;
//     desc: string;
//     content: string;
//   };
  
//   const { data }  = await $http<Post>({
//     method: "get",
//     url: `/api/posts/${route.params.id}`,
//   });
 
const {data:{value:{data}}} = await useFetchGet(`/api/posts/${route.params.id}`);
  console.log('%c [ data ]-29', 'font-size:13px; background:pink; color:#bf2c9f;', data)
  </script>
  