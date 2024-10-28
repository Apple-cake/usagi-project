<script setup lang="ts">
import Header from '../templates/mamazon/Header.vue';
</script>

<template>
  <Header></Header>
  <div class="m-4">
    <div class="text-xs">Amazonぱちもんサイト</div>
    <div class="py-4">
      <button class="bg-blue-500 text-white font-bold py-2 px-4 rounded">
        <RouterLink to="/">Home</RouterLink>
      </button>
    </div>
  </div>
</template>

<style scoped></style>
