<template>
  <div class="hero-layout-etc ">
    <!-- pauseOnMouseEnter: true -->
      <swiper
        :spaceBetween="30"
        :style="{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }"
        :pagination="{
          clickable: true,
        }"
        :navigation="true"
        :lazy="true"
        :modules="modules"
        class="mySwiper drop-shadow"

      >
        <swiper-slide v-for="(item, index) in sliderList" :key="index" class="rounded-none">
          <div class="bg-image-etc mx-auto" :style="{ backgroundImage: `url(${item.image})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: 'cover' }" loading="lazy">
          </div>
        </swiper-slide>
      </swiper>
  </div>
</template>
<script>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default {
  name:"SwiperEtc",
  props: {
        items: { type: Array, require: true },
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup(props) {
    const sliderList = ref(null);
    const initialData = () => {
      sliderList.value = props.items
    };
    initialData();
    return {
      sliderList,
      modules: [Autoplay, Pagination, Navigation],
    };
  },
};
</script>
<style>
.swiper-slide{
  border-radius: 0 !important;
}
</style>
<style scoped>

.swiper-pagination-bullet{
  background-color: #fff;
}

.bg-image-etc {
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    object-fit: cover;
    text-align: center;
    color: #fff;

}

.swiper {
  width: 100%;
  height: 885px;

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
  height: 100%;
  }
  .bg-image{
    min-height: 100%;
  }
}



/* Tablet styles */
@media only screen and (min-width: 768px) and (max-width: 1023px) {
  .swiper {
    height: 94% !important;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
  }
  .bg-image-etc{
    height: 94% !important;
  }

}
</style>
