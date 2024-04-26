<template>
  <div class="is-desktop grid lg:grid-cols-2 items-center my-8 ">
    <div >
        <SwiperEtc :items="data.image"></SwiperEtc>
    </div>

    <div class="div-info px-16 py-20 relative bg-a-yellow-FFD179 h-[885px]">
        <div>
            <h4 class="text-30 uppercas">{{ data.subjects.label }} </h4>
            <ul>
                <li v-for="(item,index) in data.subjects.value" :key="index">{{ item.text }}</li>
            </ul>
        </div>
        <div class="mt-20">
            <h4 class="text-30 uppercas">{{ data.job_opp.label }} </h4>
            <ul>
                <li v-for="(item,index) in data.job_opp.value" :key="index">{{ item.text }}</li>
            </ul>
        </div>
        <div >
            <a :href="`${items.pdf}`" target="_blank" >
                <button class="mt-8 w-[250px]" >
            <img src="../../../../public/btn-download.png" alt="ดาวน์โหลดเอกสารเพิ่มเติม"/> 
            </button>
            </a>
        </div>
        <img class="absolute bottom-0 right-0" src="../../../../public/image/TS.png" alt="ts" />
    </div>
  </div>

  <div class="container-tablet is-mobile pt-16
  ">
  <div class="container mx-auto  md:h-[458.89px] "> 
    <div class="w-full h-[458.89px] carousel rounded-t-box">
        <div class="carousel-item w-full  h-[458.89px]"    v-for="(item, index) in data.image" :key="index"   :style="{
            backgroundImage: `url(${item.image})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
          }" >
          
        </div> 
    </div>
  </div>
  <div class="content-tablet pb-32  bg-a-yellow-F8AF23 " >
    <div class="bg-a-yellow-FFF4DF site-icon container mx-auto w-full rounded-b-box">
        <div class="" >

        </div>
        <div class="div-info px-4 py-10 relative bg-a-yellow-FFF4DF  rounded-b-box">
        <div>
            <h4 class="text-30 uppercas">{{ data.subjects.label }} </h4>
            <ul>
                <li v-for="(item,index) in data.subjects.value" :key="index">{{ item.text }}</li>
            </ul>
        </div>
        <div class="mt-10">
            <h4 class="text-30 uppercas">{{ data.job_opp.label }} </h4>
            <ul>
                <li v-for="(item,index) in data.job_opp.value" :key="index">{{ item.text }}</li>
            </ul>
        </div>
        <div class="flex justify-center">
            <a :href="`${items.pdf}`" target="_blank" >
                <button class="mt-8 w-[250px]" >
            <img src="../../../../public/btn-download.png" alt="ดาวน์โหลดเอกสารเพิ่มเติม"/> 
            </button>
            </a>
        </div>

    </div>
    </div>
  </div>
  </div>

</template>

<script>
import { ref, defineComponent } from 'vue';
// components
import SwiperEtc from '../../SlideShow/SwiperEtc.vue';

export default defineComponent({
    name: "ImageJobOop",
    components: {
        SwiperEtc
    },
    props: {
        items: { type: Object, require: true },
    },
    setup(props,ctx){
        const data = ref(null)
        const clickPdf = (val) => {
            location = val
            target = "_blank"

        }
        const initialData = () => {
            data.value = props.items
            console.log(data.value);
        }
        initialData()
        return{
            data,
            clickPdf
        }
    }

})
</script>

<style scoped>
@import "../../../styles/global.css";


ul {
    font-size: 24px;
    list-style-type: disc;
    list-style-position: inside;
    margin-left: 1rem;
}
.div-info::before {
content: "";
background-image: url('../../../../public/image/TS.png');
position: absolute;
z-index: 10;
bottom: 0;
}

@media only screen and (max-width: 767px) {
  .is-desktop {
	display: none;
   }

}
@media only screen and (min-width: 768px) and (max-width: 1023px) {
   .is-desktop {
    display: none;
  }
}
@media only screen and (min-width: 1024px) {
.is-mobile {
	display: none;
 }
}
</style>