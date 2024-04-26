<template>

  <button @click="clickDropdown(item.code)" class="custom-color text-24 px-10 mx-2" :class="[item.code == isActive ? 'active': '']" v-for="(item, index) in programList" :key="index">{{ item.name }}</button>

</template>
<script>
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "DropdownCourse",
  emits:["degree"],
  setup(props,ctx) {
    const isActive = ref("bachelor");

    const programList = ref([
      {
        id: 0,
        code: "bachelor",
        name: "ปริญญาตรี",
      },
      {
        id: 1,
        code: "master",
        name: "ปริญญาโท",
      },
      // {
      //   id: 2,
      //   code: "doctoral",
      //   name: "ปริญญาเอก",
      // },
    ]);

    const clickDropdown =(el)=> {
      isActive.value = el
      ctx.emit("degree", el);
    }

    return {
      programList,
      isActive,
      clickDropdown
    };
  },
});
</script>
<style lang="css" scoped>

@import '../../../styles/global.css';
.custom-color{

  color: var(--primary);
  border-radius: 30px;
  border: 1px solid var(--3-e-7-adb,  var(--primary));
}
.custom-color:hover {
  background-color: var(--primary);
  color: #fff !important;
}
.custom-color.active{
  background-color: var(--primary);
  color: #fff !important;
}
</style>
