<template>
  <div class="pt-20 layout-page">
    <SkeletonAnimated v-if="isLoading" />
    <div v-else>
      <div
        class="w-full h-[550px] bg-local bg-no-repeat rounded-none"
        :style="{
          backgroundImage: `url(${itemList.imageHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center'
        }"
      >
        <div class="bg-overlay-card-detail-v2">
          <div class="topic container mx-auto">
            <!-- breadcrumbs -->
            <div class="text-sm breadcrumbs absolute top-24">
              <ul class="text-24  text-white">
                <li><a class="">หลักสูตร</a></li>
                <li class="text-white">{{ itemList.title }}</li>
              </ul>
            </div>
            <!-- / breadcrumbs -->
            <!-- topic -->
            <div class="grid gab-8 pb-8 text-shadow hidden">
              <div >
                <h1 class="text-54 md:text-66 lg:text-80 uppercas text-1-line leading-none">{{ itemList.title }}</h1>
              </div>
              <div class="w-full">
                <h4 class="text-36 uppercas text-1-line">{{ itemList.subtitle }} </h4>
              </div>
            </div>
          </div>
          <!-- / topic -->
        </div>
      </div>

      <div class="container mx-auto content-detail">
        <div>
          <div class="topic-design grid gab-8 my-4">
            <div class="title" >
                <h1 class="text-54 md:text-66 lg:text-80 uppercas leading-none uppercase font-black text-2-line">{{ itemList.subtitle }}</h1>
            </div>
            <div class="w-full">
                <h4 class="text-36 uppercas ">{{ itemList.title }} </h4>
            </div>
            </div>
          </div>
        <!-- / topic -->

        <div class="pt-4 grid gap-4">
 
          <div class="text-24 " v-html="itemList.description"></div>
        </div>

        <div class="info pt-4 grid grid-cols-2 gap-4">
          <div>
            <h1 class="text-36 uppercas">จำนวนหน่วยกิตที่เรียนตลอดหลักสูตร {{ itemList.credits.credit }} หน่วยกิต</h1>
          </div>
          <div class="pl-0  md:pl-4 lg:pl-4">
            <h1 class="text-36 uppercas">{{ itemList.course.label }} {{ itemList.course.value }}</h1>
          </div>

        </div>

        <div class="info grid grid-cols-2 gap-4 py-8">
          <div>
            <div class="text-36">{{ itemList.course_name.label }}</div>
            <div class="skeleton text-24 w-full">
              {{ itemList.course_name.title_th }}
            </div>
            <div class="skeleton text-24 w-full">
              {{ itemList.course_name.title_en }}
            </div>
          </div>
          <div class="pl-0  md:pl-4 lg:pl-4">
            <div class="text-36">{{ itemList.degree_name.label }}</div>
            <div class="skeleton text-24 w-full">
              {{ itemList.degree_name.fullname_th }}
            </div>
            <div class="skeleton text-24 w-full">
              {{ itemList.degree_name.shortname_th }}
            </div>
            <div class="skeleton text-24 w-full">
              {{ itemList.degree_name.fullname_en }}
            </div>
            <div class="skeleton text-24 w-full">
              {{ itemList.degree_name.shortname_en }}
            </div>
          </div>
        </div>

        <!-- Table Pricing -->
        <div class="table-pricing grid grid-cols-3 my-4 items-center gap-4 w-full">
          <div class="el leading-none">
            <div>
              <h4 class="text-36 text-1-line">{{ itemList.graduates.label }}</h4>
              <h1 class="text-66 md:text-54 font-bold text-a-yellow-F8AF23 text-1-line">{{ itemList.graduates.value }}</h1>
            </div>
          </div>
          <div class="el leading-none">
            <div>
              <h4 class="text-36">
                {{ itemList.entry.label }}
              </h4>
              <h1 class="text-66 md:text-54 font-bold text-a-yellow-F8AF23 text-1-line"> {{ itemList.entry.value }}</h1>
            </div>
          </div>
          <div class="el leading-none ">
            <div>
              <h4 class="text-36 ">
                {{ itemList.total_tuition.label }}  <span class="text-a-gray-BEC1C1"> ({{ itemList.year_tuition }}) </span>
              </h4>
              <div class="total-tuition grid grid-cols-2 items-center">
                <h1 class="text-66 md:text-54 font-bold text-a-yellow-F8AF23 text-1-line ">{{ itemList.total_tuition.total }} </h1>
                <TypeIcon :activeId="'1'" :isShowAll="false" :isMobile="true" />
              </div>
            </div>
          </div>
        </div>
        <!-- / Table Pricing -->
      </div>
      
      <TableDetailFee :items="itemList.detailFee"  class="container mx-auto my-10" />
      <TermsAndConditions class="container mx-auto my-10" />
      <ImageJobOpp :items="jobOop" />
    </div>
    <FacilitiesSection  :slug="slug"  :title="itemList.title" :lang="lang" />
  <!-- partners -->
  <div id="partners" class="py-24 bg-slate-100">
  <div>
    <div class="container mx-auto">
      <div class="text-66 font-semibold mb-0">พันธมิตร</div>
      <div class="sm:w-30 pt-0 md:pt-4">
        <div class="text-30">
          มหาวิทยาลัยชั้นนำด้านธุรกิจ พร้อมโอกาส <br/>
          ในการ ร่วมงานกับองค์กรชั้นนำระดับประเทศ และระดับโลก
        </div>
      </div>
    </div>
    <div class="partner-section  pt-16">
      <PartnerSwiper client:visible />
    </div>
  </div>
</div>
<!-- / partners -->
<div id="alumni" class="py-24 bg-a-yellow-FFD179">
  <div class="px-4 sm:px-16">
    <div class="container mx-auto">
      <div class="text-66 font-semibold mb-0">ศิษย์เก่า</div>
      <div class="text-30">
        การันตีจากผู้เรียนที่สำเร็จการศึกษา
      </div>
    </div>
    <div class="">
      <div class="sm:w-30 pt-0 md:pt-4">
      </div>
      <div class="partner-section pt-16">
        <AlumniSwiper client:visible />
      </div>
    </div>
  </div>
</div>


  </div>
</template>

<script>
import { ref, defineComponent } from "vue";

// components
import SkeletonAnimated from "../components/SkeletonAnimated.vue";
import TermsAndConditions from "./TermsAndConditions.vue";
import TableDetailFee from "./TableDetailFee.vue";
import TypeIcon from "../../Button/TypeIcon.vue";
import ImageJobOpp from "./ImageJobOpp.vue";
import FacilitiesSection from "../../Facilities/FacilitiesSection.vue";
import PartnerSwiper from "../../Partner/PartnerSwiper.vue"
import AlumniSwiper from "../../Alumni/AlumniSwiper.vue";

export default defineComponent({
  name: "CourseDetailV2",
  components: {
    SkeletonAnimated,
    TermsAndConditions,
    TableDetailFee,
    TypeIcon,
    ImageJobOpp,
    FacilitiesSection,
    PartnerSwiper,
    AlumniSwiper
  },
  props: {
    items: { type: Object, require: true },
    slug: { type: String, require: true },
    currency: { type: String, default: "th" },
    lang: { type: String, default: "th" }
  },
  setup(props, ctx) {
    const isLoading = ref(true);
    const itemList = ref(props.items);
    const jobOop = ref(null)
    const initialData = () => {

      let data = {
        imageHero: props.items.hero_layout[0].image,
        title: props.items.title,
        subtitle: props.items.subtitle,
        description: props.items.description,
        course_name: props.items.course_name,
        degree_name: props.items.degree_name,
        credits: props.items.credits,
        fund: props.items.fund,
        graduates: props.items.graduates,
        course: props.items.course,
        entry: props.items.entry,
        total_tuition: props.items.total_tuition,
        year_tuition: props.items.year_tuition,
        detailFee: props.items.detailFee
      };
      itemList.value = data;

      let data2 = {
        image: props.items.job_opp_image,
        pdf: props.items.pdf_curriculum,
        subjects: props.items.subjects,
        job_opp: props.items.job_opp

      }
      jobOop.value = data2
      setTimeout(() => {
        isLoading.value = false;
      }, 1000);
    };
    initialData();
    return {
      isLoading,
      itemList,
      jobOop
    };
  },
});
</script>

<style scoped>
.breadcrumbs{
  background-color: transparent;
  padding: 0 1rem;
  overflow: hidden;
}
.bg-overlay-card-detail-v2 {
  display: flex;
  justify-items: start;
  align-items: flex-end;

  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 50%,
    rgba(11, 11, 11, 1) 100%
  );
  height: 100%;
  width: 100%;
}
.text-shadow {
  color: #fff;
  font-weight: 300;
  text-shadow: 4px 4px 9px rgba(0, 0, 0, 0.55);
  opacity: 1;
}
.topic-design .title {
  width: 50%;
}
@media only screen and (max-width: 767px) {
  .layout-page{
    padding-top: 3rem;
  }
  .breadcrumbs {
    display: none;
  }
  .breadcrumbs, .topic, .content-detail{
    padding: 0 1rem;
  }
  .topic h1 {
     font-size: 44px;
     line-height: normal;
  }
  .topic h4 {
     font-size: 1.5rem;
  }
  .info {
    display: flex;
    flex-direction: column;
    gap: 0;
  }
  .info div:nth-child(2) {
    padding: 0 !important;
  }
  .table-pricing {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  .table-pricing h1 {
    font-size: 48px;
  }
  .total-tuition{
    display: flex;
    gap: 2rem;
  }
  .topic-design .title {
    width: 100%;
  }
  .topic-design  h1 {
    font-size: 46px;
    line-height: normal;
  }
  .topic-design  h4 {
     font-size: 2.25rem;
  }
}
@media only screen and (min-width: 768px) and (max-width: 1023px)   {
  .breadcrumbs, .topic, .content-detail{
    padding: 0 1rem;
  }
  .info {
    display: flex;
    flex-direction: column;
    gap: 0;
  }
  .info div:nth-child(2) {
    padding: 0 !important;
  }
  .table-pricing {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .table-pricing  div.el:nth-child(1){
    grid-column: span 2 / span 2;
  }
  .total-tuition{
    display: flex;
    gap: 2rem;
  }
  .topic-design .title {
     width: 100%;
  }
}
@media only screen and (min-width: 1366px) and (orientation: landscape) {
  .breadcrumbs, .topic, .content-detail{
    padding: 0 1rem;
  }
  .info {
    display: flex;
    flex-direction: column;
    gap: 0;
  }
  .info div:nth-child(2) {
    padding: 0 !important;
  }
  .table-pricing {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .table-pricing  div.el:nth-child(1){
    grid-column: span 2 / span 2;
  }
  .total-tuition{
    display: flex;
    gap: 2rem;
  }

}
@media only screen and (min-width: 1024px) and (orientation: portrait) {
  .breadcrumbs, .topic, .content-detail{
    padding: 0 1rem;
  }
  .info {
    display: flex;
    flex-direction: column;
    gap: 0;
  }
  .info div:nth-child(2) {
    padding: 0 !important;
  }
  .table-pricing {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .table-pricing  div.el:nth-child(1){
    grid-column: span 2 / span 2;
  }
  .total-tuition{
    display: flex;
    gap: 2rem;
  }

}
</style>
