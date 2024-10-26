<script setup lang="ts"></script>

<template>
  <header style="line-height: 60px;">
    <h2 class="mx-4 font-bold">Usagi Project</h2>
  </header>
  <div class="m-4">
    <div class="text-xs">さまざまなWebサイトのデザインを勉強するためのサイト</div>
    <div class="pt-4">
      <button class="bg-blue-500 text-white font-bold py-2 px-4 rounded">
        <RouterLink to="/mamazon">Mamazon</RouterLink>
      </button>
    </div>
  </div>
    <!-- <h1 class="text-3xl font-bold underline">
      Hello world!
    </h1> -->
  <!-- <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav> -->
</template>

<style scoped>
header {
  border-bottom: solid 1px #CCC;
}
</style>
