<template>
  <div class="table my-8">
    <h3 class="topic text-36 md:px-4">อัตราค่าเล่าเรียน</h3>

          <!-- table -->
          <div class="table-info grid grid-flow-col grid-cols-2 grid-rows-2 gap-8">
            <div class="my-8 grid gap-4 bg-gray-100 rounded-2xl "  v-for="(item,index) in detailFee" :key="index">
            <div >
            <h3 class="text-44  md:text-30  py-4 text-center bg-gradient-gray rounded-t-2xl">
              {{item.label}}
            </h3>
            <div class="grid grid-cols-3  text-44  md:text-30 rounded-2xl shadow-xl ">
            <div v-for="slot in item.children" :key="slot.id">
              <h4 class="p-4 bg-gray-200 text-center">{{ slot.label }}</h4>
              <div
                class="p-4 border-t border-a-black-0B0B0B bg-gray-100 font-bold text-center rounded-b-2xl text-30"
              >
                <h3
                  class="text-1-line sm:text-20 md:text-30 lg:text-36"
                  v-if="formatCurrencyThai(slot.amount) != '0'"
                >
                  {{ formatCurrencyThai(slot.amount) }}&nbsp;{{
                    txtCurrency
                  }}</h3
                >
                <div v-else>-</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- / table -->

    <!-- <div class="is-mobile carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
    <div class="carousel-item bg-gray-100"  v-for="(item, index) in detailFee" :key="index">
      <div>
          <h3
            class="text-24 md:text-30 lg:text-36 py-4 text-center bg-gradient-gray rounded-t-2xl"
          >
            {{ item.label }}
          </h3>
          <div class="grid grid-cols-3 text-24">
            <div v-for="slot in item.children" :key="slot.id">
              <div class="p-4 bg-gray-200 text-center">{{ slot.label }}</div>
              <div
                class="p-4 border-t border-a-black-0B0B0B bg-gray-100 font-bold text-center rounded-b-2xl text-30"
              >
                <span
                  class="text-1-line text-34"
                  v-if="formatCurrencyThai(slot.amount) != '0'"
                >
                  {{ formatCurrencyThai(slot.amount) }}&nbsp;{{
                    txtCurrency
                  }}</span
                >
                <div v-else>-</div>
              </div>
            </div>
          </div>
        </div>
    </div>
    </div> -->

  </div>
</template>

<script>
import { ref, defineComponent } from "vue";
export default defineComponent({
  name: "TableDetailFee",
  props: {
    items: { type: Object, require: true },
  },
  setup(props, ctx) {
    const detailFee = ref(null);
    const txtCurrency = ref("");
    const formatCurrencyThai = (val) => {
      var price = parseInt(val);
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
    const loadData = () => {
      detailFee.value = props.items;
      const lang = location.pathname.split("/")[1];
      txtCurrency.value = lang == "th" ? "บาท" : "THB";
    };
    loadData();
    return {
      detailFee,
      txtCurrency,
      formatCurrencyThai,
    };
  },
});
</script>

<style scoped>
@media only screen and (max-width: 767px) {
  .is-desktop {
	display: none;
   }
  .is-desktop {
    display: none;
  }
  .topic {
    padding: 0 1rem;
  }
  .table-info {
    display: flex;
    flex-direction: column;
    padding: 0 .25rem;
    gap: 0;
    font-size: 1rem !important;
   }
   h3 {
    font-size: 2rem !important;
   }
   h4 {
    font-size: 1.75rem !important;
   }
   .p-4{
     padding:  1rem .5rem;
   }
}
@media only screen and (min-width: 768px) and (max-width: 1023px) {
	.is-mobile {
	display: none;
   }
   .table-info {
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
    gap: 0;
   }
}
@media only screen and (min-width: 1024px) {
.is-mobile {
	display: none;
 }
}
</style>
