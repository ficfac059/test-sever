<template>
  <div v-if="isLoading" class="container-staff py-10 grid grid-rows-1 grid-cols-4 gap-4">
    <CardStaffSkeleton v-for="n in 24" :key="n" />
  </div>
  <div v-else class="container-staff py-10 grid grid-rows-1 grid-cols-4 gap-8" id="parent">
    <CardStaffV2 :item="item" v-for="(item, index) in itemList" :key="index" />
  </div>

</template>
<script>
import { ref } from "vue";
import CardStaffV2 from "./CardStaffV2.vue";
import CardStaffSkeleton from "./CardStaffSkeleton.vue"

export default {
  components: {
    CardStaffV2,
    CardStaffSkeleton,

  },
  setup() {
    const isLoading = ref(true);
    const itemList = ref(null);

    const fetchData = () => {
      fetch("https://demo2.utcc.ac.th/wp-json/wp/v1/myacf/options/personnel", { mode: 'cors' })
        .then((response) => response.json())
        .then((data) => (itemList.value = data, initialData()))
        .catch((error) =>
          console.error("Error fetching staff Data:", error)
        );
    };

    const initialData = () => {
      setTimeout(() => {
        isLoading.value = false;
      }, 800);
    }


    fetchData();

    return {
      itemList,
      isLoading,
    };
  },
};
</script>
<style scoped>
@media only screen and (max-width: 767px) {
  .container-staff {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    padding: 1rem;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1023px) {
  .container-staff {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    padding: 1rem;
  }
}

@media only screen and (min-width: 1366px) and (orientation: landscape) {
  .container-staff {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    padding: 1rem;
  }
}

@media only screen and (min-width: 1024px) and (orientation: portrait) {
  .container-staff {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    padding: 1rem;
  }
}
</style>