<script setup lang="ts"></script>

<template>
  <header>
    <div class="first-header" style="line-height: 60px;">
      <h2 class="mx-4 font-bold">Mamazon</h2>
    </div>
    <div class="second-header" style="line-height: 39px;">
      <h2 class="mx-4 font-bold">Mamazonポイント：1214</h2>
    </div>
  </header>
  <div class="m-4">
    <div class="text-xs">Amazonぱちもんサイト</div>
    <div class="py-4">
      <button class="bg-blue-500 text-white font-bold py-2 px-4 rounded">
        <RouterLink to="/">Home</RouterLink>
      </button>
    </div>
  </div>
  <div class="gw-layout">
    <div class="gw-card-layout flex">
      <div class="gw-col">
        <div class="a-cardui"></div>
      </div>
      <div class="gw-col">
        <div class="a-cardui"></div>
      </div>
      <div class="gw-col">
        <div class="a-cardui"></div>
      </div>
      <div class="gw-col">
        <div class="a-cardui"></div>
      </div>
    </div>
  </div>
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
.gw-layout {
  background: #E3E6E6;
  margin: 0 auto;
  max-width: none;
  min-width: 1000px;
  overflow: hidden;
}
.gw-card-layout {
  max-width: 1480px;
  margin: 0 auto;
  overflow: hidden;
  padding: 20px 0;
  > .gw-col {
    height: 420px;
    min-height: 420px;
    max-width: 400px;
    min-width: 290px;
    flex: 1 0 290px;
    padding-left: 10px;
    padding-right: 10px;
    > .a-cardui {
      background: #fff;
      height: 100%;
      position: relative;
      margin-bottom: 0;
      margin-top: 0;
      overflow: hidden;
      padding-top: 20px;
    }
  }
}
</style>
