<script setup lang="ts">
import { isSmartPhone } from '@/utils/deviceUtils';
</script>

<template>
  <div v-if="!isSmartPhone()" class="gallery">
    <div class="gallery-list py-5 mx-auto relative">
      <div id="gallery-list-cover" class="gallery-list-cover grid">
        <div class="gallery-list-card">
          <div class="a-card-ui">
            <h2 class="a-card-ui-header font-bold px-4 mb-2.5">閲覧履歴に基づくおすすめ商品</h2>
          </div>
        </div>
        <div class="gallery-list-card">
          <div class="a-card-ui">
            <h2 class="a-card-ui-header font-bold px-4 mb-2.5">ショッピングを続ける</h2>
          </div>
        </div>
        <div class="gallery-list-card">
          <div class="a-card-ui">
            <h2 class="a-card-ui-header font-bold px-4 mb-2.5">セール商品のお買い物を続ける</h2>
          </div>
        </div>
        <div class="gallery-list-card">
          <div class="a-card-ui"></div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="isSmartPhone()" class="smartphone-gallery">
    <div class="pb-2">
      <div class="smartphone-card pt-2">
      <div class="smartphone-card-ui">
        <h2 class="smartphone-card-ui-header font-bold px-4 mb-2.5">お客様が閲覧した商品に関連する商品</h2>
      </div>
    </div>
    <div class="smartphone-card pt-2">
      <div class="smartphone-card-ui">
        <h2 class="smartphone-card-ui-header font-bold px-4 mb-2.5">スマートワークストア</h2>
      </div>
    </div>
    <div class="smartphone-card pt-2">
      <div class="smartphone-card-ui">
        <h2 class="smartphone-card-ui-header font-bold px-4 mb-2.5">秋のボディメイク特集</h2>
      </div>
    </div>
    </div>
  </div>
</template>

<style scoped>
#page__mamazon {
  overflow-x: auto;
}
.gallery {
  min-height: calc(100vh - 99px);
  min-width: 1000px;
  background-color: #e3e6e6;
}
.smartphone-gallery {
  min-height: calc(100vh - 99px);
  background-color: #e3e6e6;
}
.smartphone-card {
  height: 300px;
}
.smartphone-card-ui {
  background-color: #ffffff;
  height: 100%;
  > .smartphone-card-ui-header {
    color: #0f1111;
    font-size: 17px;
  }
}
@media screen and (min-width: 1240px) {
  .gallery-list {
    padding-left: 10px;
    padding-right: 10px;
  }
  .gallery-list-cover {
    grid-template-columns: repeat(4, 1fr);
    row-gap: 40px;
    > .gallery-list-card {
      height: 420px;
      padding-left: 10px;
      padding-right: 10px;
      width: 100%;
    }
  }
  .a-card-ui {
    background-color: #ffffff;
    height: 100%;
    padding-top: 20px;
    > .a-card-ui-header {
      color: #0f1111;
      font-size: 17px;
    }
  }
}
@media screen and (max-width: 1239px) {
  .gallery-list {
    padding-left: 10px;
    padding-right: 10px;
    min-width: 919px;
  }
  .gallery-list-cover {
    grid-template-columns: repeat(3, 1fr);
    row-gap: 28px;
    > .gallery-list-card {
      height: 420px;
      padding-left: 10px;
      padding-right: 10px;
      min-width: 33.33333%;
    }
  }
  .a-card-ui {
    background-color: #ffffff;
    height: 100%;
    padding-top: 20px;
    > .a-card-ui-header {
      color: #0f1111;
      font-size: 17px;
    }
  }
}
</style>