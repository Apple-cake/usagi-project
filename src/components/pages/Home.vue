<script setup lang="ts">
import MamazonIcon from '../icons/IconMamazon.vue'
import AppLogoIcon from '../icons/IconAppLogo.vue'
</script>

<template>
  <header class="flex" style="line-height: 60px;">
    <AppLogoIcon class="mx-4 self-center"/>
    <h2 class="font-bold">Usagi Project</h2>
  </header>
  <div class="m-4">
    <div class="text-xs">さまざまなWebサイトのデザインを勉強するためのサイト</div>
    <div class="pt-4">
      <RouterLink to="/mamazon"><MamazonIcon/></RouterLink>
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
