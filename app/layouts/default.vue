<script setup>
import Head from "~/layouts/Header.vue";
import Foot from "~/layouts/Footer.vue";
</script>
<template>
 <div class="min-h-screen flex flex-col">
    <Head />
    <main class="flex-grow container mx-auto px-4 py-8">
      <NuxtPage />
    </main>
    <Foot />
  </div>
</template>
<style scoped>


</style>