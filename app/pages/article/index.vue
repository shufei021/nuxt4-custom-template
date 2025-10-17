<template>
  <div class="py-3">
    <ul class="w-full">
      <li class="w-full min-h-40px border-2 border-solid border-purple-300 mb-2 p-4 rounded-md" v-for="item in list" :key="item.id">
        <nuxt-link :to="`/posts/${item.id}`">
          <h1 class="mb-3">{{ item.name }}</h1>
        </nuxt-link>
        <p>{{ item.desc }}</p>
      </li>
    </ul>
    <div class="flex justify-between">
      <div>
        <span v-if="page > 1" @click="prev" class="cursor-pointer inline-block px-6 py-3 rounded-full font-bold border-2 border-solid border-purple-300 duration-300 hover:border-purple-700 hover:text-blue">prev</span>
      </div>
      <div>
        <span v-if="hasMore" @click="next" class="cursor-pointer inline-block px-6 py-3 rounded-full font-bold border-2 border-solid border-purple-300 duration-300 hover:border-purple-700 hover:text-blue"> next</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useAsyncData } from "#app";
import { $http } from "~/request/index";
const page = ref(1);
const size = ref(5);

const { data } = await useAsyncData(
  "posts",
  async () => {
    const res = await $http({
      url: `/api/posts/list`,
      method: "GET",
      params: {
        page: page.value,
        size: size.value,
      },
    });
    return res.data;
  },
  {
    watch: [page],
  }
);

const list = computed(() => data?.value?.list || []);
const hasMore = computed(() => {
  const total = data?.value?.total || 0;
  return total > page.value * size.value;
});

function next() {
  page.value += 1;
}

function prev() {
  page.value -= 1;
}
</script>
