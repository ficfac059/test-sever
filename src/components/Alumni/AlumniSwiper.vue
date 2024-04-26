<template>
  <div class="our-alumni">
    <!-- <div class="hidden sm:hidden md:hidden lg:contents"> -->
    <div class="contents alumni-group">
      <!-- <div class="alumni-list">
        <div class="alumni-list-item" v-for="(item, index) in alumniList" :key="index">
          <div class="quote text-24">
            <span class="line-clamp-4 mobile:line-clamp-3 lg:px-4 lg:pt-4">{{ item.acf.detail }}</span>
          </div>
          <div class="flex">
            <img :src="item.acf.user_image" :alt="item.title.rendered" />
            <div class="grid grid-column">
              <h4 class="text-24 font-semibold line-clamp-1">{{ item.title.rendered }}</h4>
              <p class="line-clamp-1">{{ item.acf.graduated }}</p>
            </div>
          </div>
        </div>
      </div> -->
      <swiper :modules="[Virtual, Autoplay]" :autoplay="{
        delay: 1000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      }" :speed="35000" :loop="true" :lazy="true"
        :breakpoints="{ 1280: { slidesPerView: 4, spaceBetween: 40 }, 1024: { slidesPerView: 3, spaceBetween: 40 }, 640: { slidesPerView: 2, spaceBetween: 60 }, 576: { slidesPerView: 1, spaceBetween: 30, } }"
        class="alumniSwiper">
        <swiper-slide v-for="(item, index) in alumniList" :key="index" :virtualIndex="index" class="items-stretch">
          <div class="quote text-24">
            <span class="line-clamp-4 mobile:line-clamp-3 lg:px-4 lg:pt-4">{{ item.acf.detail }}</span>
          </div>
          <div class="flex">
            <img :src="item.acf.user_image" :alt="item.title.rendered" />
            <div class="grid grid-column">
              <h4 class="text-24 font-semibold line-clamp-1">{{ item.title.rendered }}</h4>
              <p class="line-clamp-1">{{ item.acf.graduated }}</p>
            </div>
          </div>
        </swiper-slide>
      </swiper>

    </div>
    <!-- <div class="sm:contents md:contents lg:hidden">
      <swiper :modules="modules" :slides-per-view="1" :space-between="50" navigation :pagination="{ clickable: true }"
        :scrollbar="{ draggable: true }" @swiper="onSwiper" @slideChange="onSlideChange">
        <swiper-slide v-for="(item, index) in alumniList" :key="index">Slide 1</swiper-slide>
      </swiper>
    </div> -->
  </div>
</template>

<script>

import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Virtual, Autoplay } from 'swiper/modules';
import "swiper/css";
import "swiper/css/virtual";
import "swiper/css/autoplay";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const alumniList = ref(null);
    const reqUrl = "https://demo2.utcc.ac.th/wp-json/wp/v2/alumni";

    const fetchData = () => {
      fetch("https://demo2.utcc.ac.th/wp-json/wp/v2/alumni?acf_format=standard&_fields=id,slug,title,acf", { mode: "cors" })
        .then((response) => response.json())
        .then((data) => (alumniList.value = data))
        .catch((error) =>
          console.error("Error fetching Alumni data:", error)
        );
    };
    fetchData();
    return {
      alumniList,
      Virtual,
      Autoplay,
    };
  },
};
</script>

<style scoped>
@import "../../styles/global.css";

.swiper.alumniSwiper {
  height: auto;
  margin: 0;
  min-height: 400px;
}

.alumniSwiper .swiper-wrapper {
  display: flex;
  justify-content: center;
  align-items: bottom;
  transition-timing-function: linear;
}

.alumniSwiper .swiper-slide .quote {
  /* background: rgba(255, 255, 255, 0.8); */
  /* background: linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.2)); */
  padding: 45px 30px 30px;
  border-radius: 15px;

  background-image: url(../../../public/icon/review-blog.svg);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top center;
  height: 100%;
}

.quote::before {
  content: '\201C';
  position: absolute;
  top: 0.25rem;
  left: 2.75rem;
  line-height: 1;
  font-size: 6rem;
  font-family: inherit;
  color: var(--color-primary);
}

/* .quote::after {
  content: '';
  position: absolute;
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 20px 12px 0 12px;
  border-color: rgba(255, 255, 255, 0.2) transparent transparent transparent;
  transform: rotate(0deg);
  bottom: 92px;
  border-radius: 20px;
} */

.alumniSwiper .swiper-slide {
  display: block;
  /* width: 400px; */
  height: auto;
  max-height: initial;
  object-fit: cover;
  margin-bottom: 15px;
}

.alumniSwiper .swiper-slide img {
  width: auto;
  height: 100%;
  margin: 0 30px 0 0;
}

@media (max-width: 720px) {
  .swiper.alumniSwiper {
    width: 100%;
  }

  .alumniSwiper .swiper-slide {
    width: 100%;
    height: auto;
  }

}

/* //////////// */
/* .our-alumni {
  position: relative;
}

.alumni-group {
  overflow: hidden;
  position: relative;
}

.alumni-list {
  display: flex;
  margin-bottom: 15px;
  width: 100%;
  animation: slideSide 200s linear infinite;
}

.alumni-list .alumni-list-item {
  display: block;
  height: 100%;
  margin-right: 30px;
  width: auto;
}

.alumni-list-item img {
  width: auto;
  height: auto;
}

@media (max-width: 1200px) {
  .alumni-list {
    animation: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .alumni-list .alumni-list-item {
    display: inline-block;
    height: 100%;
    margin-right: 0;
    width: 25%;
  }

  .alumni-list-item img {
    max-width: initial;
    width: 100%;
    height: auto;
  }
}

@media (max-width: 767px) {
  .alumni-list .alumni-list-item {
    width: 33%;
  }
} */
</style>