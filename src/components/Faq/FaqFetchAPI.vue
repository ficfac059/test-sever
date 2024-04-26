<template>
  <div class="col-span-3 desktop:col-span-2">
    <div v-for="(faq, index) in faqList" :key="index"
      class="collapse collapse-plus border-b rounded-none border-black drop-shadow-xl transition-all">
      <input type="radio" name="faq-accordion" v-model="faq.id" :checked="checked"/>
      <!-- <input v-else type="radio" name="faq-accordion" v-model="faq.id" /> -->
      <div class="collapse-title font-semibold text-36">
        {{ faq.question }}
      </div>
      <div class="collapse-content text-24">
        <div v-html="faq.answer"></div>
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
    const faqList = ref(null);
    const fetchData = () => {
      fetch("https://demo2.utcc.ac.th/wp-json/wp/v1/myacf/options/faqs/th_question"), { mode: "cors" }
        .then((response) => response.json())
        .then((data) => (faqList.value = data))
        .catch((error) =>
          console.error("Error fetching Faq Data:", error)
        );
    };
    fetchData();
    return {
      faqList
    };
  },
};

</script>
<style></style>