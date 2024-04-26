<template>
  <div class="hero-layout pt-24">
    <!-- pauseOnMouseEnter: true -->

    <div class="container mx-auto">
      <div v-if="isLoading" class="swiper-skeleton bg-slate-200 skeleton">

      </div>
      <swiper
        v-else
        :spaceBetween="30"
        :style="{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false
        }"
        :pagination="{
          clickable: true,
        }"
        :lazy="true"
        :modules="modules"
        class="mySwiper drop-shadow"

      >
        <swiper-slide v-for="(item, index) in sliderList" :key="index">
          <div class="bg-image mx-auto" :style="{ backgroundImage: `url(${item.image})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: 'cover' }" loading="lazy">
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const sliderList = ref(null);
    const isLoading  = ref(true)
    const fetchData = () => {
      fetch("https://demo2.utcc.ac.th/wp-json/wp/v1/myacf/options/hero_image", { mode: 'cors' }, { credentials: "include" })
        .then((response) => response.json())
        .then((data) => (sliderList.value = data,initialData()))
        .catch((error) =>
          console.error("Error fetching hero image data:", error)
        );
    };
    const initialData = () => {
        setTimeout(() => {
        isLoading.value = false;
      }, 500);
      }
    fetchData();
    return {
      sliderList,
      modules: [Autoplay, Pagination],
      isLoading
    };
  },
};
</script>
<style scoped>
.swiper-pagination-bullet{
  background-color: #fff;
}
.swiper-pagination-bullet-active{
  background-color: var(--accent);
}
.bg-image{
    min-height: 600px;
    width: 100%;
    border-radius: 30px;
    background-repeat: no-repeat;
    background-size: cover;
    object-fit: cover;
    text-align: center;
    color: #fff;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 5rem 0;


}
.swiper {
  width: 100%;
  height: 600px;

}
.swiper-skeleton{
    width: 100%;
  height: 600px;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1rem;
  background-repeat: no-repeat;
}

/* Mobile styles */
@media only screen and (max-width: 767px) {
  .hero-layout{
    padding-top: 5rem;
  }
  .swiper {
  width: 100%;
  height: 390px;
  border-radius: 1rem;
  }
  .bg-image{
    min-height: 390px;
  }
}


/* Tablet styles */
@media only screen and (min-width: 768px) and (max-width: 1023px) {
  .swiper {
  width: 100%;
  min-height: 600px;
  border-radius: 1rem;
  }
}
</style>
