<template>
  <div class="card cursor-pointer" :class="[cardClass]">
      <div class="rounded-2xl h-[279px]" :style="{
            backgroundImage: `url(${image})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
            backgroundColor: 'black'
          }">
      <div class="bg-overlay-card"> 
      </div>
    </div>
        <!-- <img :src="image" alt="" /> -->
    <div class="card-body px-0">
    <div class="topic-card pb-4 border-b border-a-black-0B0B0B">
      <div
        class="mb-2 text-gradient-gray "
      >
      {{badge}}
      </div>
        <h2 class="card-title text-36 pt-1 md:text-36  hover:text-a-yellow-F8AF23 text-2-line ">
        {{ cardTitle }}
      </h2>
    </div>

      <div  >
        <div class="text-20  text-2-line">
          {{ description }}
        </div>
       </div>
      <div class="card-actions justify-end hidden">
        <!-- <a :href="readMore" class="link link-primary">I'm a simple link</a> -->
        <button class="btn btn-sm text-20 rounded-full">อ่านต่อคลิก</button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue'
export default defineComponent({
  name: "Card",
  props: {
    cardTitle: { type: String, default: "" },
    description: { type: String, default: "" },
    readMore: { type: String, default: "#" },
    image: { type: String, default: "" },
    badge: { type: String, default: "" },
    customClass: {type: String, default :"w-[418px]"}
  },
  setup(props) {
        const cardClass = computed(() => {
            if (props.customClass != null) {
                return props.customClass;
            }
            return 'w-[400px]';
        })

        return {
          cardClass,
        }
    }
});
</script>

<style scoped>
.card {
  max-width: 400px;
}
figure img{
  border-radius: 1rem !important;
}
.bg-overlay-card{
  display: flex;
  justify-items: start;
  align-items: flex-end;

  color: #fff;
  font-weight: 300;
  text-shadow: 4px 4px 9px rgba(0, 0, 0, 0.55);
  opacity: 1;

  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 50%,
    rgba(11, 11, 11, 1) 100%
  );
  height: 100%;
  width: 100%;
  border-radius: 1rem;
}
</style>
