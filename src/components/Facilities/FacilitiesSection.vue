<template>
  <div class="container mx-auto mt-10">
    <h1 class="text-66 md:text-66">{{ t("facilities.title") }}</h1>
    <h4 class="text-36">{{ title }}</h4>
    <div class="py-2 flex justify-end">
      <ButtonShowMore @click="clickShowMore()">
        {{ textButton }}</ButtonShowMore
      >
    </div>

   
    <div
      v-if="!isShowMore"
      class="slides overflow-scroll smooth-scroll w-full touch-pan-x snap-mandatory flex snap-x py-10 gap-8"
    >

      <div
        class="carousel-item  gap-4"
        v-for="(item, index) in itemList"
        :key="index"
      >
        <Card
          :badge="item.badge"
          :cardTitle="item.name"
          :description="item.description"
          :image="item.image"
          :customClass="'w-[400px]'"
          @click="clickShow(item)"
        >
        </Card>
      </div>
    </div>

    <div v-else>
      <div class="grid grid-cols-3 gab-8">
        <div v-for="(item, index) in itemList" :key="index">
          <Card
            :badge="item.badge"
            :cardTitle="item.name"
            :description="item.description"
            :image="item.image"
            :customClass="'w-96'"
            @click="clickShow(item)"
          >
          </Card>

        </div>
      </div>
      <div class="py-2 flex justify-center">
          <ButtonShowMore @click="clickShowMore()">
            {{ textButton }}</ButtonShowMore
          >
        </div>
    </div>
    <!-- Modal -->
    <ModalMaster v-if="showModal" @close="clikeClose" :isShow="showModal">
      <!-- Modal content -->
      <div class="parent relative w-full rounded-lg bg-a-black-0B0B0B">
        <h1 class="text-66 md:text-44 text-white absolute top-2 pl-4">
          {{ t("facilities.title") }}
        </h1>
        <div
          class="w-full h-[550px] flex justify-center pt-2 rounded-t-lg"
          :style="{
            backgroundImage: `url(${itemShow.image})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
            backgroundColor: 'black',
          }"
        >
          <div class="overlay bg-overlay flex justify-between">
            <div>
              <div class="mb-2 text-a-yellow-FFD179">
                {{ itemShow.badge }}
              </div>
              <h1 class="text-36 lg:text-44 leading-none text-a-yellow-F8AF23">
                {{ itemShow.name }}
              </h1>
              <h4 class="text-24 font-thin w-full">
                {{ t("facilities.location") }} {{ itemShow.location }}
              </h4>
            </div>
            <div>
              <h4 class="text-30 lg:text-44 leading-none pr-8"></h4>
              <ul class="none">
                <li class="text-24"> {{ t("facilities.openingHours") }}</li>
                <li class="text-24">
                  {{ itemShow.dateTime.date }} | {{ itemShow.dateTime.time }}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          class="text-24 p-4 relative text-3-line text-white opacity-70"
          v-html="itemShow.description"
        ></div>
        <div class="flex items-center justify-end p-4 gap-2 rounded-b-lg">
          <h4 class="text-24 text-a-yellow-FFD179"> {{ t("facilities.termsOfServices") }} </h4>
          <div
            class="text-24 text-slate-700 hover:text-slate-900 bg-slate-100 hover:opacity-100 px-4 rounded-full opacity-50"
            v-for="(item, index) in itemShow.condition"
            :key="index"
          >
            {{ item.name }}
          </div>
        </div>
      </div>
    </ModalMaster>
  </div>
</template>

<script>
import { ref, defineComponent } from "vue";
import {  useTranslations } from "../../i18n/utils";
// components
import Card from "../../components/card/Card.vue";
import ButtonShowMore from "../Button/ButtonShowMore.vue";
import ModalMaster from "../Modal/Modal.vue";

export default defineComponent({
  name: "FacilitiesSection",
  components: {
    Card,
    ModalMaster,
    ButtonShowMore
  },
  props: {
    lang: { type: String, default: "th" },
    title: { type: String, dafault: ''},
    slug: { type: String, dafault: 'all'},
    t:{ type: Object, default: {}}
  },
  setup(props) {
    const showModal = ref(false);
    const itemList = ref(null);
    const itemShow = ref(null);
    const textButton = ref(null);
    const isShowMore = ref(false);
    const t = useTranslations(props.lang);

    const fetchData = async () => {
      textButton.value = t("button.showMore")
      await fetch(
        "https://demo2.utcc.ac.th/wp-json/wp/v1/myacf/options/facilities", { mode: 'cors' }, { credentials: "include" }
      )
        .then((response) => response.json())
        .then((data) => (initialData(data)))
        .catch((error) =>
          console.error("Error fetching Facilities image data:", error)
        );
    };


    const initialData = (data) => {
      const sortedData = data.sort((a, b) => {
      if (a.school === props.slug && b.school !== props.slug) {
        return -1;
      } else if (a.school !== props.slug && b.school === props.slug) {
        return 1;
      } else {
        return 0;
      }
    });
      itemList.value =sortedData;
    }
    fetchData();
    const clickShow = (item) => {
      itemShow.value = item;
      showModal.value = true;
      document.body.style.overflow = "hidden";
    };
    const clikeClose = () => {
      showModal.value = false;
    };
    const clickShowMore = () => {
      isShowMore.value = !isShowMore.value;
      textButton.value = isShowMore.value ? t("button.showLess") :  t("button.showMore") ;
    };
    return {
      itemList,
      showModal,
      clickShow,
      clikeClose,
      itemShow,
      textButton,
      clickShowMore,
      isShowMore,
      t
    };
  },
});
</script>

<style scoped>
.slides {
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
}
.slides::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}
.bg-overlay {
  display: flex;
  justify-items: start;
  align-items: flex-end;
  padding: 1rem;
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
}
ul {
  list-style-type: disc;
  list-style-position: inside;
}

ul.none {
  list-style-type: none;
  list-style-position: inside;
}
/* .carousel-item {
  margin-left: .25rem;
} */
</style>
