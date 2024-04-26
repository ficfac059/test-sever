<template>
  <!-- container -->
  <div class="item-course">
    <!-- <button class="btn-show-modal" @click="showModal = true">Open Modal</button> -->
    <div v-if="isLoading" class="show-on-hover-none course-container grid gap-4 ">
      <div class="skeleton rounded-2xl bg-gray-200" :class="{ 'custom-order-div-even-number': isEvenNumber }">

      </div>
      <div class="skeleton rounded-2xl bg-gray-200 h-[305px]">

      </div>
    </div>
    <div v-else class="show-on-hover course-container grid gap-4 " @click="clickShow(item.slug, false)">
      <div :class="{ 'custom-order-div-even-number': isEvenNumber }"
        class="bg-a-yellow-FFD179 rounded-2xl leading-none">
        <span class="title_course text-a-black-0B0B0B">
          <h1 class="text-44 md:text-36 lg:text-44 leading-none">
            {{ item.title }}
          </h1>
          <h4 class="text-24 font-thin">{{ item.subtitle }}</h4>
        </span>
        <span class="description_course">
          <h1 class="text-36 font-blod mt-[9px]">
            {{ item.title }}
          </h1>
          <p class="text-20 text-a-black-0B0B0B font-light text-3-line pt-4 leading-none indent-10">
            {{ item.description }}
          </p>
          <div class="not-show grid grid-cols-5 gap-4 border-t border-a-black-0B0B0B mt-40px pt-8">
            <div>
              <h4 class="text-24 font-light">{{ item.graduates.label }}</h4>
              <h1 class="text-30 font-bold">{{ item.graduates.value }}</h1>
            </div>
            <div>
              <h4 class="text-24 font-light">{{ item.course.label }}</h4>
              <h1 class="text-30 font-bold">{{ item.course.value }}</h1>
            </div>
            <div>
              <h4 class="text-24 font-light">{{ item.entry.label }}</h4>

              <h1 class="text-30 font-bold" v-if="typeof item.entryFee == 'number'">
                {{ item.entry.value }}
              </h1>
              <h1 class="text-30 font-bold" v-else v-html="item.entryFee"></h1>
            </div>
            <div>
              <h4 class="text-24 font-light">{{ item.total_tuition.label }}</h4>
              <h1 class="text-30 font-bold">
                {{ item.total_tuition.total }}
              </h1>
            </div>
            <div class="pt-6">
              <TypeIcon :activeId="item.fund.id" :isShowAll="false" :isMobile="true" />
            </div>
          </div>
        </span>
      </div>
      <div class="rounded-2xl h-[305px]" :style="{
      backgroundImage: `url(${item.hero_layout[0].image})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
    }" loading="lazy">
        <div class="overlay bg-overlay">
          <h1 class="text-44 md:text-36 lg:text-44 leading-none">
            {{ item.title }}
          </h1>
          <h4 class="text-24 font-thin">{{ item.subtitle }}</h4>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import { ref, defineComponent } from "vue";

// components
import TypeIcon from "../../Button/TypeIcon.vue";
import ModalVue from "../../Modal/Modal.vue";


export default defineComponent({
  name: "CourseHoverItem",
  components: {
    TypeIcon,
    ModalVue
  },
  props: {
    isEvenNumber: { type: Boolean, default: false },
    item: { type: Object, required: false }
  },
  setup(props) {
    const showModal = ref(false);
    const txtCurrency = ref("บาท");
    const lang = ref('th')
    const isLoading = ref(true)

    const formatCurrencyThai = (val) => {
      lang.value = location.pathname.split("/")[1];
      txtCurrency.value = lang.value == "th" ? "บาท" : lang.value == 'en' ? "THB" : "บาท";

      let price = parseInt(val)
      if (typeof price === "number") {
        const formatter = new Intl.NumberFormat("th-TH", {
          style: "currency",
          currency: "THB",
          maximumFractionDigits: 0,
        });
        return formatter.format(val).replace(/฿/g, "");
      } else {
        return null;
      }
    };

    const clickShow = (slug, disable) => {
      console.log(slug, disable);

      if (!disable) {
        window.location.replace(`${slug}`)
      }

      // showModal.value = true;
      // document.body.style.overflow = 'hidden';
    }

    const initialData = () => {
      setTimeout(() => {
        isLoading.value = false
      }, 1500);
    }

    const clikeClose = () => {
      showModal.value = false;
    };
    initialData()
    return {
      formatCurrencyThai,
      showModal,
      clikeClose,
      clickShow,
      txtCurrency,
      isLoading
    };
  },
});
</script>

<style scoped>
@import "../../../styles/global.css";

ul {
  list-style-type: square;
  list-style-position: outside;
  list-style-image: none;
}

.course-container {
  cursor: pointer;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.overlay {
  border-radius: 1rem;
  height: 100%;
  width: 100%;
  padding: 84px 24px 21px 23px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  line-height: normal;
  font-weight: 700;
}

.show-on-hover>div:nth-child(1) {
  background-color: var(--accent-dark);
  height: 305px;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 30px;
  grid-column: span 1 / span 1;
  -o-transition: 0.5s;
  -ms-transition: 0.5s;
  -moz-transition: 0.5s;
  -webkit-transition: 0.5s;

  transition: 0.5s;
}

.show-on-hover-none>div:nth-child(1) {

  height: 305px;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 30px 0 30px 30px;
  grid-column: span 1 / span 1;
  -o-transition: 0.5s;
  -ms-transition: 0.5s;
  -moz-transition: 0.5s;
  -webkit-transition: 0.5s;

  transition: 0.5s;
}

.show-on-hover:hover>div:nth-child(1) {
  background-color: var(--accent);
  grid-column: span 2 / span 2;
}

.show-on-hover>div:nth-child(1)>.description_course {
  opacity: 0;
  display: none;
}

.show-on-hover:hover>div:nth-child(1)>.description_course {
  opacity: 1;
  display: block;
}

.show-on-hover:hover>div:nth-child(1)>.title_course {
  display: none;
}

.show-on-hover>div:nth-child(2) {
  grid-column: span 2 / span 2;
  -o-transition: 0.5s;
  -ms-transition: 0.5s;
  -moz-transition: 0.5s;
  -webkit-transition: 0.5s;

  transition: 0.5s;
}

.show-on-hover-none>div:nth-child(2) {
  grid-column: span 2 / span 2;
  -o-transition: 0.5s;
  -ms-transition: 0.5s;
  -moz-transition: 0.5s;
  -webkit-transition: 0.5s;

  transition: 0.5s;
}

.show-on-hover:hover>div:nth-child(2) {
  grid-column: span 1 / span 1;
}

.bg-overlay {
  opacity: 0;
  -o-transition: 0.5s;
  -ms-transition: 0.5s;
  -moz-transition: 0.5s;
  -webkit-transition: 0.5s;
  transition: 0.5s;

}

.show-on-hover:hover>div:nth-child(2)>.bg-overlay {
  color: #fff;
  font-weight: 300;
  text-shadow: 4px 4px 9px rgba(0, 0, 0, 0.55);
  opacity: 1;
  background: rgb(255, 255, 255);
  background: linear-gradient(180deg,
      rgba(255, 255, 255, 0) 9%,
      rgba(11, 11, 11, 1) 100%);
}


.custom-order-div-even-number {
  order: 2 !important;
}

/* CSS */
.modal {
  display: none;
  /* Hide modal by default */
  position: fixed;
  /* Position the modal */
  z-index: 1;
  /* Make sure it appears on top of other elements */
  left: 0;
  top: 0;
  width: 100%;
  /* Full width */
  height: 100%;
  /* Full height */
  overflow: auto;
  /* Enable scrolling if needed */
  background-color: rgba(0, 0, 0, 0.5);
  /* Black with transparency */
}

.modal-content {
  background-color: #fefefe;
  /* White background */
  margin: 15% auto;
  /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  /* 80% width */
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
