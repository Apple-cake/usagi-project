<script setup lang="ts">
import MamazonIcon from '../../icons/IconMamazon.vue'
</script>

<template>
  <header>
    <div class="first-header" style="line-height: 60px;">

      <MamazonIcon/>
    </div>
    <div class="second-header" style="line-height: 39px;">
      <h2 class="mx-4 font-bold">Mamazonポイント：1214</h2>
    </div>
  </header>
</template>

<style scoped>
header {
  > .first-header {
    height: 60px;
    color: #FFFFFF;
    background-color: #131921;
  }
  > .second-header {
    height: 39px;
    color: #FFFFFF;
    background-color: #232f3e;
  }
}
</style>