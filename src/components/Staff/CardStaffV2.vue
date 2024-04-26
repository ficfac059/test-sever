<template>
  <div class="card bg-base-100 shadow-xl relative mx-auto" :class="item.type">
    <figure class="bg-cover bg-center bg-a-yellow-F8AF23">
      <div class="filter filter--css">
        <img :src="item.image" :alt="item.name" />
      </div>
    </figure>
    <div class="p-4 bg-white text-center leading-none rounded-b-2xl">
      <div class="name-staff pb-2 border-b border-a-gray-BEC1C1 items-center">
        <h3 class="text-24"> {{ item.position ? item.position : '&nbsp;' }} </h3>
        <h1 class="text-30 block text-1-line"> {{ item.name }}</h1>
        <div class="text-24 text-1-line text-a-yellow-F8AF23 pt-2">{{ item.academic }}</div>
        <span class="text-lg text-gray-400 text-3-line pt-2" v-html="item.description"></span>
      </div>
      <div class="card-actions py-4 justify-center items-center gap-2">
        <a href="#" target="_blank" v-if="item.contact.facebook">
          <img src="../../../public/icon/sc-facebook.svg" class="h-8" alt="Icon Facebook" />
        </a>
        <a href="#" target="_blank" v-if="item.contact.instagram">
          <img src="../../../public/icon/sc-instagram.svg" class="h-8" alt="Icon Instagram" />
        </a>
        <a href="#" target="_blank" v-if="item.contact.twitter">
          <img src="../../../public/icon/sc-x-twitter.svg" class="h-8" alt="Icon X" />
        </a>
        <a href="#" target="_blank" v-if="item.contact.linkedin">
          <img src="../../../public/icon/sc-linkedIn.svg" class="h-8" alt="Icon LinkedIn" />
        </a>
        <a href="#" target="_blank" v-if="item.contact.email">
          <img src="../../../public/icon/sc-mail.svg" class="h-8" alt="Icon Email" />
        </a>
        <a href="#" target="_blank" v-if="item.contact.phone">
          <img src="../../../public/icon/sc-phone.svg" class="h-8" alt="Icon Phone" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue"


export default {
  name: "CardStaffV2",
  props: {
    item: { type: Object, required: false },
    
  },
 
}


</script>


<style scoped>
@import "../../styles/global.css";

.filter--css {
  position: relative;
  display: inline-block;
}

.filter--css img {
  -webkit-filter: contrast(110%) saturate(0%) sepia(0%) hue-rotate(180deg);
  filter: contrast(110%) saturate(0%) sepia(0%) hue-rotate(180deg);
}

.filter--css::before {
  content: "";
  display: block;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  position: absolute;
  pointer-events: none;
  mix-blend-mode: multiply;
  opacity: 0.5;
  background: var(--accent-dark);
  z-index: 2;
}

.card:hover .filter--css img {
  -webkit-filter: unset;
  filter: unset;
}

.card:hover .filter--css::before {
  background: transparent;
}

.filter--cloudinary::before {
  content: "";
  display: block;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  position: absolute;
  pointer-events: none;
  opacity: 0.5;
  background: var(--accent-dark);
  z-index: 2;
}

.gallery {
  display: flex;
}

.gallery .original,
.gallery .filter {
  position: relative;
}

.gallery .original::after,
.gallery .filter::after {
  content: "original";
  position: absolute;
  bottom: 25px;
  left: 25px;
  opacity: .5;
  z-index: 3;
}

.gallery .filter::after {
  content: "filter";
}

.gallery .original>img,
.gallery .filter>img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-actions img {
  max-width: 80%;
}

@media only screen and (max-width: 767px) {
  .card .filter--css img {
    -webkit-filter: unset;
    filter: unset;
  }

  .card .filter--css::before {
    background: transparent;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1023px) {
  .card .filter--css img {
    -webkit-filter: unset;
    filter: unset;
  }

  .card .filter--css::before {
    background: transparent;
  }
}

/* @media only screen and (min-width: 1366px) and (orientation: landscape) {
      .card .filter--css img {
        -webkit-filter: unset;
        filter: unset;
        }

        .card .filter--css::before {
        background: transparent;
        }
    } */
@media only screen and (min-width: 1024px) and (orientation: portrait) {
  .card .filter--css img {
    -webkit-filter: unset;
    filter: unset;
  }

  .card .filter--css::before {
    background: transparent;
  }
}
</style>