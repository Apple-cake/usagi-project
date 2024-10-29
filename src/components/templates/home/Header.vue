<script setup lang="ts">
import AppLogoIcon from '../../icons/IconAppLogo.vue';
</script>

<template>
  <header>
    <div class="header-body relative mx-auto">
      <div class="h-full content-center text-black text-xs">Webデザイン勉強サイト</div>
      <AppLogoIcon class="header-body__logo absolute top-1/2 left-1/2"/>
    </div>
  </header>
</template>

<style scoped>
header {
  background-color: #f4f7f6;
  border-bottom: solid 1px #f4f7f6;
  > .header-body {
    height: 59px;
    > .header-body__logo {
      transform: translate(-50%, -50%);
    }
  }
}
@media screen and (min-width: 961px) {
  header {
    position: sticky;
    top: 0;
    z-index: 100;
  }
  .header-body {
    width: 95vw;
  }
}
@media screen and (min-width: 768px) and (max-width: 960px) {
  .header-body {
    width: 95vw;
  }
}
@media screen and (max-width: 767px) {
  .header-body {
    width: 92vw;
  }
}
</style>