<script setup lang="ts">
import Header from '../templates/mamazon/Header.vue';
</script>

<template>
  <Header></Header>
  <div class="gallery">
    <div class="gallery-list py-5 mx-auto relative">
      <ul id="gallery-list-cover" class="gallery-list-cover grid">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.gallery {
  min-height: calc(100vh - 99px);
  background-color: #e3e6e6;
}
@media screen and (min-width: 1240px) {
  .gallery-list {
    width: 95vw;
  }
  .gallery-list-cover {
    column-gap: 34px;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 40px;
    > li {
      height: 420px;
      width: 100%;
      background-color: #ffffff;
    }
  }
}
@media screen and (max-width: 1239px) {
  .gallery-list {
    width: 92vw;
  }
  .gallery-list-cover {
    column-gap: 34px;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 28px;
    > li {
      height: 420px;
      min-width: 100%;
      background-color: #ffffff;
    }
  }
}
</style>
