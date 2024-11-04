<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import AppLogoIcon from '../../icons/IconAppLogo.vue';

const isHidden = ref(false);

const handleScroll = () => {
  isHidden.value = window.scrollY > 65;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <header class="site_header fixed flex left-0 top-0 w-full" :class="{ hide_header: isHidden }">
    <RouterLink to="/">
      <AppLogoIcon class="site_header--logo absolute top-1/2"/>
    </RouterLink>
  </header>
</template>

<style scoped>
.site_header {
  background: #fff;
  height: 64px;
  transition: transform .6s cubic-bezier(.19,1,.22,1);
  z-index: 10;
  &.hide_header {
    transform: translateY(-64px);
  }
  .site_header--logo {
    transform: translate(0%, -50%);
  }
}
</style>