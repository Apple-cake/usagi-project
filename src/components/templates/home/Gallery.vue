<script setup lang="ts">
/* リストのクラス名を設定 */
const getClass = (index: number): string => {
  const width = window.innerWidth;
  let baseClass = '';

  if (width >= 1201) {
    baseClass = `list--${Math.floor(index / 4) + 1}`;
  } else if (width >= 961) {
    baseClass = `list--${Math.floor(index / 3) + 1}`;
  } else if (width >= 768) {
    baseClass = `list--${Math.floor(index / 2) + 1}`;
  } else {
    baseClass = `list--${Math.floor(index / 1) + 1}`;
  }

  return baseClass;
};

/* リストのスタイルを設定 */
const getStyle = (className: string): { [key: string]: string } => {
  const match = className.match(/list--(\d+)/);
  const listNumber = match ? parseInt(match[1]) : 1; // デフォルト値を1に設定
  const delay = (listNumber - 1) * 0.5 + 's'; // 0.5秒ごとに遅延
  return {
    animationDelay: delay,
  };
};
</script>

<template>
  <div class="gallery">
    <div class="gallery-list py-5 mx-auto relative">
      <ul id="gallery-list-cover" class="gallery-list-cover grid">
        <li :class="getClass(0)" :style="getStyle(getClass(0))">
          <div class="gallery-list-card">
            <RouterLink class="gallery-list-card__link" to="/mamazon">
              <img class="gallery-list-card__link__image" src="../../../captures/mamazon.png">
            </RouterLink>
          </div>
        </li>
        <li :class="getClass(1)" :style="getStyle(getClass(1))">
          <div class="gallery-list-card">
            <a class="gallery-list-card__link" href="https://recruit.g-f.co.jp/" target="_blank">
              <img class="gallery-list-card__link__image" src="../../../captures/241012-640x480.jpg">
            </a>
          </div>
        </li>
        <li :class="getClass(2)" :style="getStyle(getClass(2))">
          <div class="gallery-list-card">
            <a class="gallery-list-card__link" href="https://wms.or.jp/" target="_blank">
              <img class="gallery-list-card__link__image" src="../../../captures/240917-640x480.jpg">
            </a>
          </div>
        </li>
        <li :class="getClass(3)" :style="getStyle(getClass(3))">
          <div class="gallery-list-card">
            <a class="gallery-list-card__link" href="https://cybozu.co.jp/sodelab/" target="_blank">
              <img class="gallery-list-card__link__image" src="../../../captures/240823-640x480.jpg">
            </a>
          </div>
        </li>
        <li :class="getClass(4)" :style="getStyle(getClass(4))">
          <div class="gallery-list-card">
            <a class="gallery-list-card__link" href="https://www.shukatsu-career.co.jp/" target="_blank">
              <img class="gallery-list-card__link__image" src="../../../captures/240410-640x480.jpg">
            </a>
          </div>
        </li>
        <li :class="getClass(5)" :style="getStyle(getClass(5))">
          <div class="gallery-list-card">
            <a class="gallery-list-card__link" href="https://shichi-hachi.theday-inc.jp/" target="_blank">
              <img class="gallery-list-card__link__image" src="../../../captures/240215-640x480.jpg">
            </a>
          </div>
        </li>
        <li :class="getClass(6)" :style="getStyle(getClass(6))">
          <div class="gallery-list-card">
            <a class="gallery-list-card__link" href="https://www.yamajitsu.co.jp/" target="_blank">
              <img class="gallery-list-card__link__image" src="../../../captures/240119-640x480.jpg">
            </a>
          </div>
        </li>
        <li :class="getClass(7)" :style="getStyle(getClass(7))">
          <div class="gallery-list-card">
            <a class="gallery-list-card__link" href="https://isaka.co.jp/" target="_blank">
              <img class="gallery-list-card__link__image" src="../../../captures/231117-640x480.jpg">
            </a>
          </div>
        </li>
        <li :class="getClass(8)" :style="getStyle(getClass(8))">
          <div class="gallery-list-card">
            <a class="gallery-list-card__link" href="https://store-palette.com/" target="_blank">
              <img class="gallery-list-card__link__image" src="../../../captures/240827-640x480.jpg">
            </a>
          </div>
        </li>
        <li :class="getClass(9)" :style="getStyle(getClass(9))">
          <div class="gallery-list-card">
            <a class="gallery-list-card__link" href="https://recruit.afuri.com/" target="_blank">
              <img class="gallery-list-card__link__image" src="../../../captures/240807-640x480.jpg">
            </a>
          </div>
        </li>
        <li :class="getClass(10)" :style="getStyle(getClass(10))">
          <div class="gallery-list-card">
            <a class="gallery-list-card__link" href="https://hoshino-hm.com/" target="_blank">
              <img class="gallery-list-card__link__image" src="../../../captures/240805-640x480.jpg">
            </a>
          </div>
        </li>
        <li :class="getClass(11)" :style="getStyle(getClass(11))">
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
.gallery-list-cover {
  > li {
    animation-duration: 1.5s;
    animation-fill-mode: forwards;
    animation-name: fadein;
    animation-timing-function: ease-out;
    opacity: 0;
    visibility: hidden;
  }
}
.gallery-list-card {
  position: relative;
  > .gallery-list-card__link::before {
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
    > .gallery-list-card__link::before {
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
    > .gallery-list-card__link::before {
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
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
    visibility: visible;
  }
}
</style>