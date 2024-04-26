<template>
  <div class="our-partner">
    <div class="partner-group">
      <div class="partner-list">
        <div v-for="(item, index) in partnerList" :key="index" class="partner-list-item grayscale">
          <img :src="item.logo" :alt="item.title" loading="lazy" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { ref } from "vue";

export default {
  components: {

  },
  setup() {
    const partnerList = ref(null);
    const fetchData = () => {
      fetch("https://demo2.utcc.ac.th/wp-json/wp/v1/myacf/options/partner", { mode: 'cors' }, { credentials: "include" })
        .then((response) => response.json())
        .then((data) => (partnerList.value = data))
        .catch((error) =>
          console.error("Error fetching Partner image:", error)
        );
    };
    fetchData();

    return {
      partnerList,
    };
  },

};
</script>

<style scoped>
@import "../../styles/global.css";
@import "../../styles/base.scss";

.our-partner {
  position: relative;
}

.partner-group {
  overflow: hidden;
  position: relative;
}

.partner-list {
  display: flex;
  margin-bottom: 15px;
  width: 100%;
  animation: slideSide 40s linear infinite
}

.partner-list .partner-list-item {
  display: flex;
  height: 100%;
  margin-right: 30px;
  width: 100%;
}

.partner-list-item img {
  max-width: 300px;
  width: auto;
  height: auto;
}

@media (max-width: 1200px) {
  .partner-list {
    animation: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .partner-list .partner-list-item {
    display: inline-block;
    height: 100%;
    margin-right: 0;
    width: 25%;
  }

  .partner-list-item img {
    max-width: initial;
    width: 100%;
    height: auto;
  }
}

@media (max-width: 767px) {
  .partner-list .partner-list-item {
    width: 33%;
  }
}
</style>