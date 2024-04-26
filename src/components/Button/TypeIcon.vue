<template>
  <div >
<!-- Component Start -->
    <div class="relative flex items-center group" v-if="activeId || activeId != ''">

        <img v-if="activeId === '1'" src="../../../public/icon/Type-1.svg" alt="type1" />
        <img v-else-if="activeId === '2'" src="../../../public/icon/Type-2.svg" alt="type2" />
        <img v-else-if="activeId === '3'" src="../../../public/icon/Type-3.svg" alt="type3" />
   
        <div v-if="!isMobile" class="absolute left-0  items-center hidden ml-6 group-hover:flex">
            <div class="w-3 h-3 -mr-2 rotate-45 bg-black"></div>
            <span  class="relative text-sm  p-2 leading-none text-white w-full whitespace-no-wrap bg-black shadow-lg rounded">
              <span v-if="activeId === '1'">ลักษณะที่ 1 - ขาดแคลนทุนทรัพย์</span>
              <span v-else-if="activeId === '2'">ลักษณะที่ 2 - สาขาวิชาที่เป็นความต้องการหลัก</span>
              <span v-else-if="activeId === '3'"> ลักษณะที่ 3 - สาขาวิชาขาดแคลน/มุ่งส่งเสริมเป็นพิเศษ</span>
            </span>
        </div>
        <slot></slot>
    </div>
    <!-- Component End  -->
  </div>
</template>

<script>
import { ref, defineComponent } from "vue";
export default {
  name: "TypeIcon",
  props: {
    activeId: { type: String, require: false},
    isShowAll: {type: Boolean, require: false},
    isMobile: {type: Boolean, require: false}
  },
  setup(props) {
    const isActive =  ref(props.activeId)
    return{
      isActive
    }
  }
};
</script>

<style scoped>

.div-icon span {
  opacity: 0;
  -o-transition: 0.5s;
  -ms-transition: 0.5s;
  -moz-transition: 0.5s;
  -webkit-transition: 0.5s;

  transition: 0.1s;
}
.div-icon:hover > span {
  opacity: 1;
}
</style>
