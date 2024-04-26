<template>
  <Loading v-if="isLoading" />
  <div class="main-bg">
    <div :class="isLoading ? 'skeleton' : ''" class="w-fullrounded-2xl h-[450px] flex justify-center rounded-md "
      :style="{
    backgroundImage: `url(${imageHero})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
  }">

    </div>
    <div class="container mx-auto mb-20 pt-10">
      <div class="text-sm breadcrumbs">
        <ul class="text-24">
          <li><a>หลักสูตร</a></li>
          <li>การจัดการโรงแรม</li>
        </ul>
      </div>
      <h1 class="text-a-yellow-F8AF23 text-64 font-bold uppercase leading-none">
        {{ subtitle }}
      </h1>
      <h4 class="text-44 text-a-black-0B0B0B p-0">
        {{ title }}
      </h4>


      <div class="grid grid-cols-4 p-4 items-center">
        <div class="leading-none">
          <div class="h-[60px]">
            <h4 class="text-30  md:text-24 text-a-gray-BEC1C1">หน่วยกิต</h4>
            <h1 class="text-64 font-bold text-a-gray-696F6F">132</h1>
          </div>
        </div>
        <div class="leading-none">
          <div class="h-[60px]">
            <h4 class="text-30  md:text-24 text-a-gray-BEC1C1">หลักสูตร</h4>
            <h1 class="text-64 font-bold text-a-gray-696F6F">4ปี</h1>
          </div>
        </div>
        <div class="leading-none">
          <div class="h-[60px]">
            <h4 class="text-30  md:text-24 text-a-gray-BEC1C1">ค่าใช้จ่ายตลอดหลักสูตร</h4>
            <h1 class="text-64 font-bold text-a-gray-696F6F">
              {{ formatCurrencyThai(total_tuition_fees) }}&nbsp;{{
    txtCurrency
  }}
            </h1>
          </div>
        </div>
        <div class="leading-none text-center">
          <button class="btn btn-active btn-primary rounded-full font-normal text-24 px-4">
            สมัครเรียน
            <img src="../../../../public/icon/angle-right-solid.svg" alt="" color="" />
          </button>
        </div>
      </div>
      <div class="text-30  md:text-24 leading-tight text-a-black-0B0B0B font-light pt-8">
        {{ description }}

        <div class="grid grid-cols-2 pt-4 items-start gap-4">
          <div class="leading-none">
            <h3 class="text-54  md:text-36 py-2 text-a-yellow-F8AF23">ชื่อหลักสูตร</h3>
            <div>
              <!-- <h6 class="text-30  md:text-24 text-a-gray-BEC1C1">ภาษาไทย</h6> -->
              <ul>
                <li>ศิลปศาสตรบัณฑิต สาขาวิชาการผลิตและการจัดการอีเว้นท์</li>
              </ul>
            </div>

            <!-- <h6 class="text-30  md:text-24 text-a-gray-BEC1C1 ">ภาษาอังกฤษ</h6> -->
            <ul>
              <li>
                Bachelor of Arts Program in Event Production and Management
              </li>
            </ul>
          </div>
          <div class="leading-none">
            <h3 class="text-54  md:text-36 my-2 text-a-yellow-F8AF23">
              ชื่อปริญญาและสาขาวิชา
            </h3>
            <div class="h-[60px]">
              <!-- <h6 class="text-30  md:text-24 text-a-gray-BEC1C1">ภาษาไทย</h6> -->
              <ul>
                <li>ศิลปศาสตรบัณฑิต (การผลิตและการจัดการอีเว้นท์)</li>
                <li>Bachelor of Arts (Event Production and Management)</li>
              </ul>
            </div>
            <!-- <h6 class="text-30  md:text-24 text-a-gray-BEC1C1">ภาษาอังกฤษ</h6> -->
            <ul>
              <li>ศศ.บ. (การผลิตและการจัดการอีเว้นท์)</li>
              <li>B.A. (Event Production and Management)</li>
            </ul>
          </div>
        </div>
        <div class="table my-8">
          <h3 class="text-54  md:text-36 my-2 text-a-yellow-F8AF23">
            อัตราค่าเล่าเรียน
          </h3>

          <!-- table -->
          <div class="grid grid-flow-col grid-cols-2 grid-rows-2 gap-4">
            <div class="my-8 grid gap-4 bg-a-gray-F0F0F0 rounded-2xl drop-shadow" v-for="(item, index) in detailFee"
              :key="index">
              <div>
                <h3 class="text-44  md:text-30  py-4 text-center bg-gradient-accent rounded-t-2xl">
                  {{ item.label }}
                </h3>
                <div class="grid grid-cols-3  text-44  md:text-30 ">
                  <div v-for="slot in item.children" :key="slot.id">
                    <div class="p-4 bg-a-yellow-FFF4DF text-center ">{{ slot.label }}</div>
                    <div
                      class="p-4 border-t border-yellow-400 bg-a-gray-F0F0F0 text-a-blue-01378B font-bold text-center rounded-b-2xl text-30">
                      <span v-if="formatCurrencyThai(slot.amount) != '0'"> {{ formatCurrencyThai(slot.amount)
                        }}&nbsp;{{
    txtCurrency
  }}</span>
                      <div v-else>
                        -
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- / table -->
        </div>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-4 items-center bg-a-yellow-FFD179 ">
      <div class="bg-img">

      </div>
      <div class="py-20">
        <div class="px-10">
          <h4 class="text-54  md:text-36">ตัวอย่างวิชาที่น่าสนใจ</h4>
          <ul class="normal text-30 mb-8  md:text-24">
            <li> การออกแบบและการผลิตงานอีเว้นท์</li>
            <li> การจัดการงานคอนเสิร์ตและเทศกาลดนตรี</li>
            <li> อุตสาหกรรมสร้างสรรค์และบันเทิง</li>
            <li> เทคโนโลยีสำหรับการออกแบบและผลิตงานอีเว้นท์</li>
            <li> การจัดการระบบแสง เสียง และภาพสำหรับงานอีเว้นท์</li>
            <li> การจัดการงานอีเว้นท์เสมือนจริงและการผลิตสื่อสตรีมมิ่ง</li>
            <li> การจัดการศิลปินสำหรับงานอีเว้นท์</li>
          </ul>

          <h4 class="text-54  md:text-36 leading-none pb-4">
            อาชีพที่สามารถประกอบได้ หลังสำเร็จการศึกษา
          </h4>
          <span class="text-30  md:text-24 mb-0">ทำไมต้องเรียน คณะการท่องเที่ยวฯ ม.หอการค้าไทย</span>
          <ul class="normal leading-tight text-30  md:text-24">
            <li>เป็นคณะเดียวในประเทศไทยที่มีหลักสูตรครอบคลุมทุกศาสตร์</li>
            <li>ด้านการท่องเที่ยวและการบริการ</li>
            <li>เรียนกับคณาจารย์รุ่นใหม่ เข้าใจนักศึกษา</li>
            <li>รายวิชาทันสมัย ตอบโจทย์ Thailand 4.0</li>
            <li>
              เป็นตัวจริงในการสร้างผู้ประกอบการรุ่นใหม่ในธุรกิจการท่องเที่ยวและบริการ
            </li>
          </ul>
          <button class="mt-8 w-[250px]">
            <img src="../../../../public/btn-download.png" alt="ดาวน์โหลดเอกสารเพิ่มเติม" />
          </button>
        </div>
      </div>
    </div>

    <FacilitiesSection client:visible />
  </div>
</template>

<script>
import { ref, defineComponent } from "vue";

import FacilitiesSection from "../../Facilities/FacilitiesSection.vue"
import Loading from "../../Loading/Loading.vue";

export default defineComponent({
  name: "CourseDetail",
  components: {
    FacilitiesSection,
    Loading
  },
  props: {
    currency: { type: String, default: "th" },
  },
  setup(props, ctx) {
    const itemList = ref(null);
    const subtitle = ref("");
    const title = ref("");
    const imageHero = ref("");
    const total_tuition_fees = ref(0);
    const description = ref("");
    const txtCurrency = ref("");
    const detailFee = ref(null)
    const isLoading = ref(true)
    const itemListNew = ref(null)

    const fetchDataAll = async () => {
      await fetch(
        "https://demo2.utcc.ac.th/wp-json/wp/v1/myacf/allcourse", { mode: "cors" }
      )
        .then((response) => response.json())
        .then((data) => ((itemListNew.value = data), initialData()))
        .catch((error) =>
          console.error("Error fetching hero image data:", error)
        );
    };

    const fetchData = async () => {
      isLoading.value = true
      await fetch(
        "https://demo2.utcc.ac.th/wp-json/wp/v1/myacf/options/all_course", { mode: "cors" }
      )
        .then((response) => response.json())
        .then((data) => ((itemList.value = data[0]), initialData()))
        .catch((error) =>
          console.error("Error fetching hero image data:", error)
        );
    };
    const initialData = () => {

      subtitle.value = itemList.value.subtitle;
      title.value = itemList.value.title;
      imageHero.value = itemList.value.hero_layout[0].image;
      total_tuition_fees.value = itemList.value.total_tuition_fees;
      description.value = itemList.value.description;
      detailFee.value = itemList.value.detailFee

      const lang = location.pathname.split("/")[1];
      txtCurrency.value = lang == "th" ? "บาท" : "THB";

      setTimeout(() => {
        isLoading.value = false
      });

    };

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
    // fetchData();
    fetchDataAll();

    return {
      itemList,
      subtitle,
      title,
      imageHero,
      formatCurrencyThai,
      total_tuition_fees,
      description,
      txtCurrency,
      detailFee,
      isLoading
    };
  },
});
</script>

<style scoped>
@import "../../../styles/global.css";

.bg-img {
  background-image: url('../../../../public//image/course_img/bg-career-program-detail.png');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  width: 100%;
  height: 790px;
}

.main-bg {
  background-color: white;
}

.hero-banner {
  width: 1400px;
  height: 246px;
}

.noto-sans-thai-looped-regular {
  font-family: "Noto Sans Thai Looped", sans-serif;
  font-weight: 400;
  font-style: normal;
}

ul.normal {
  list-style: disc !important;
}
</style>
