<template>
  <div class="card w-full drop-shadow-xl">
    <!-- <figure class="bg-overlay">
        <img :src="image" alt="" />
      </figure> -->
    <div
      class="rounded-t-2xl h-[305px]"
      :style="{
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
      }"
      loading="lazy"
    >
      <div class="overlay bg-overlay">
        <div>
          <h1 class="text-36 lg:text-44 leading-none text-2-line">
            {{ cardTitle }}
          </h1>
          <h4 class="text-24 font-thin w-full text-1-line">{{ subTitle }}</h4>
        </div>
      </div>
    </div>
    <div class="card-body bg-a-yellow-F8AF23 rounded-b-2xl px-4">
      <div class="description-crad text-24 leading-none ">
        {{ description }}
      </div>
      <div class="border-b h-1 border-a-black-0B0B0B"></div>
      <div class="grid grid-cols-2 gap-8">
        <div>
          <div class="text-24">สำหรับผู้จบการศึกษา</div>
          <div class="text-20  font-semibold">{{ require }}</div>
        </div>
        <div>
          <div class="text-24">หลักสูตร</div>
          <div class="text-24 font-semibold">{{ type }}</div>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-8">
        <div>
          <div class="text-24">เทอม 1/ผ่อนชำระ</div>
          <div class="text-24 font-semibold" v-html="entryFee"></div>
        </div>
        <div class="flex gap-4">
          <div>
            <div class="text-24">ตลอดหลักสูตร</div>
            <div class="text-24">
              <div class="w-[160px] mr-4 flex items-start font-bold">
              {{ totalFee }}
              </div>
             </div>

            </div>
          </div>
      </div>
      <div class="w-full">
        <TypeIcon class="absolute bottom-11 right-6" :activeId="fund" :isShowAll="false" :isMobile="true"/>
      </div>
      </div>
  </div>
</template>

<script>
import TypeIcon from "../Button/TypeIcon.vue";
export default {
  name: "Card",
  components: {
    TypeIcon,
  },
  props: {
    cardTitle: { type: String, default: "" },
    description: { type: String, default: "" },
    readMore: { type: String, default: "#" },
    image: { type: String, default: "" },
    badge: { type: String, default: "" },
    name: { type: String, default: "" },
    subTitle: { type: String, default: "" },
    require: { type: String, default: "" },
    type: { type: String, default: "" },
    entryFee:{ type: String, default:""},
    totalFee:{ type: String, default:""},
    fund:{ type: String, default:"2"},
  },
};
</script>

<style scoped>
.bg-overlay {
  display: flex;
  justify-items: start;
  align-items: flex-end;
  padding: 1rem;
  color: #fff;
  font-weight: 300;
  text-shadow: 4px 4px 9px rgba(0, 0, 0, 0.55);
  opacity: 1;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 50%,
    rgba(11, 11, 11, 1) 100%
  );
  height: 100%;
}
.badge {
  border-radius: 0.25rem;
  background: #f3f3f3; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #0b0b0b,
    #f3f3f3
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #0b0b0b,
    #f3f3f3
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
