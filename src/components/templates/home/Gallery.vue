<script setup lang="ts"></script>

<template>
  <div class="gallery">
    <div class="gallery-list py-5 mx-auto relative">
      <ul class="gallery-list-cover grid">
        <li>
          <div class="gallery-list-card">
            <RouterLink class="gallery-list-card__link" to="/mamazon">
              <img class="gallery-list-card__link__image" src="../../../captures/mamazon.png">
            </RouterLink>
          </div>
        </li>
        <li>
          <div class="gallery-list-card">
            <a class="gallery-list-card__link" href="https://recruit.g-f.co.jp/" target="_blank">
              <img class="gallery-list-card__link__image" src="../../../captures/241012-640x480.jpg">
            </a>
          </div>
        </li>
        <li>
          <div class="gallery-list-card">
            <a class="gallery-list-card__link" href="https://wms.or.jp/" target="_blank">
              <img class="gallery-list-card__link__image" src="../../../captures/240917-640x480.jpg">
            </a>
          </div>
        </li>
        <li>
          <div class="gallery-list-card">
            <a class="gallery-list-card__link" href="https://cybozu.co.jp/sodelab/" target="_blank">
              <img class="gallery-list-card__link__image" src="../../../captures/240823-640x480.jpg">
            </a>
          </div>
        </li>
        <li>
          <div class="gallery-list-card">
            <a class="gallery-list-card__link" href="https://www.shukatsu-career.co.jp/" target="_blank">
              <img class="gallery-list-card__link__image" src="../../../captures/240410-640x480.jpg">
            </a>
          </div>
        </li>
        <li>
          <div class="gallery-list-card">
            <a class="gallery-list-card__link" href="https://shichi-hachi.theday-inc.jp/" target="_blank">
              <img class="gallery-list-card__link__image" src="../../../captures/240215-640x480.jpg">
            </a>
          </div>
        </li>
        <li>
          <div class="gallery-list-card">
            <a class="gallery-list-card__link" href="https://www.yamajitsu.co.jp/" target="_blank">
              <img class="gallery-list-card__link__image" src="../../../captures/240119-640x480.jpg">
            </a>
          </div>
        </li>
        <li>
          <div class="gallery-list-card">
            <a class="gallery-list-card__link" href="https://isaka.co.jp/" target="_blank">
              <img class="gallery-list-card__link__image" src="../../../captures/231117-640x480.jpg">
            </a>
          </div>
        </li>
        <li>
          <div class="gallery-list-card">
            <a class="gallery-list-card__link" href="https://store-palette.com/" target="_blank">
              <img class="gallery-list-card__link__image" src="../../../captures/240827-640x480.jpg">
            </a>
          </div>
        </li>
        <li>
          <div class="gallery-list-card">
            <a class="gallery-list-card__link" href="https://recruit.afuri.com/" target="_blank">
              <img class="gallery-list-card__link__image" src="../../../captures/240807-640x480.jpg">
            </a>
          </div>
        </li>
        <li>
          <div class="gallery-list-card">
            <a class="gallery-list-card__link" href="https://hoshino-hm.com/" target="_blank">
              <img class="gallery-list-card__link__image" src="../../../captures/240805-640x480.jpg">
            </a>
          </div>
        </li>
        <li>
          <div class="gallery-list-card">
            <a class="gallery-list-card__link" href="https://www.nttdata-strategy.com/recruit/" target="_blank">
              <img class="gallery-list-card__link__image" src="../../../captures/240801-640x480.jpg">
            </a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.gallery {
  min-height: calc(100vh - 60px);
  background-color: #f4f7f6;
}
.gallery-list-card {
  position: relative;
  animation-duration: 1s;
  animation-name: fadein;
  animation-timing-function: ease-out;
  .gallery-list-card__link::before {
    background-color: #22222277;
    border-radius: 8px;
    content: "";
    display: none;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1;
  }
  .gallery-list-card__link__image {
    border-radius: 8px;
  }
}
@media screen and (min-width: 1201px) {
  .gallery-list {
    width: 95vw;
  }
  .gallery-list-cover {
    column-gap: 34px;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 40px;
  }
  .gallery-list-card:hover {
    scale: 1.02;
    transition: scale .3s ease-in-out;
    .gallery-list-card__link::before {
      display: block;
    }
  }
  .gallery-list-card:active {
    .gallery-list-card__link::before {
      background-color: #222222aa;
    }
  }
}
@media screen and (min-width: 961px) and (max-width: 1200px) {
  .gallery-list {
    width: 95vw;
  }
  .gallery-list-cover {
    column-gap: 34px;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 40px;
  }
  .gallery-list-card:hover {
    scale: 1.02;
    transition: scale .3s ease-in-out;
    .gallery-list-card__link::before {
      display: block;
    }
  }
  .gallery-list-card:active {
    .gallery-list-card__link::before {
      background-color: #222222aa;
    }
  }
}
@media screen and (min-width: 768px) and (max-width: 960px) {
  .gallery-list {
    width: 95vw;
  }
  .gallery-list-cover {
    column-gap: 34px;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 40px;
  }
}
@media screen and (max-width: 767px) {
  .gallery-list {
    width: 92vw;
  }
  .gallery-list-cover {
    column-gap: 16px;
    grid-template-columns: repeat(1, 1fr);
    row-gap: 28px;
  }
}
@keyframes fadein {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>