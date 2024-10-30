<script setup lang="ts">
import { computed } from 'vue';
import { isSmartPhone } from '@/utils/deviceUtils';
import MamazonIcon from '@/components/icons/IconMamazon.vue'

/* headerのスタイルを計算 */
const headerStyle = computed(() => {
  return {
    minWidth: isSmartPhone() ? 'auto' : '1000px',
  };
});
</script>

<template>
  <header :style="headerStyle">
    <div class="first-header flex justify-between" style="line-height: 60px;">
      <MamazonIcon/>
      <RouterLink class="mx-4" to="/">Home</RouterLink>
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