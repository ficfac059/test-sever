<template>
  <div class="container mx-auto py-40" id="course">
    <!-- header -->
    <div class="flex justify-between items-center mb-4">
      <div class="leading-none">
        <h1 class="text-66 font-semibold">หลักสูตร</h1>
        <!-- <h4 class="text-height text-30 text-gradient-gray my-2 text-1-line">คณะการท่องเที่ยวและอุตสาหกรรมบริการ</h4> -->
      </div>
      <div class="">

        <DropdownCourse @degree="clickDegree"> </DropdownCourse>

      </div>
    </div>
    <!-- / header -->

    <!-- content -->
    <div v-if="isLoading" class="grid justify-items-center  h-[305px] items-center  rounded-2xl is-desktop">
      <span class="loading loading-ring loading-lg text-gray-400"></span>
    </div>

    <div v-else class="box-course-items py-2 is-desktop" v-for="(item, index) in courseList" :key="index">

      <CourseHoverItem :isEvenNumber="handleIsEvenNumber(index)" :item="item" :lang="lang"></CourseHoverItem>
    </div>


    <div class="p-4 grid grid-cols-1 gap-8 is-mobile">
      <CourseMobile v-for="(item, index) in courseList" :key="index" :isEvenNumber="handleIsEvenNumber(index)"
        :item="item"></CourseMobile>
    </div>



    <!-- / content -->
    <TermsAndConditions />
  </div>
</template>

<script>
import { ref, defineComponent } from "vue";
//components
import DropdownCourse from "./components/DropdownCourse.vue";
import CourseHoverItem from "./components/CourseHoverItem.vue";
import CourseMobile from "./components/CourseMobile.vue"
import TermsAndConditions from "./components/TermsAndConditions.vue"

export default defineComponent({
  name: "CourseIndex",
  components: {
    DropdownCourse,
    CourseHoverItem,
    CourseMobile,
    TermsAndConditions
  },
  props: {
    lang: { type: String, default: 'th' },
  },
  setup() {
    const data1 = ref(null);
    const degree = ref('bachelor');
    const lang = ref('th');
    const courseList = ref(null);
    const isLoading = ref(false);
    const initialData = () => {

      const newArray = data1.value.map(function (element) {
        if (degree.value == element.acf.category) {
          return lang.value == 'en' ? element.acf.en : element.acf.th
        }
      });
      const filteredArray = newArray.filter(element => element !== undefined);
      courseList.value = filteredArray

    };

    // Function to merge content JSON by ID
    const mergeContent = (data1, data2) => {
      const mergedData = [];
      // const lang = location.pathname.split("/")[1];
      const lang = "th";
      if (lang == 'en') {
        data1.en.forEach((course1) => {
          const course2 = data2.find((course) => course.id === course1.id);
          if (course2) {
            // Merge the content
            const mergedCourse = { ...course1, ...course2 };
            mergedData.push(mergedCourse);
          }
        });
      } else {
        data1.th.forEach((course1) => {
          const course2 = data2.find((course) => course.id === course1.id);
          if (course2) {
            // Merge the content
            const mergedCourse = { ...course1, ...course2 };
            mergedData.push(mergedCourse);
          }
        });
      }


      return mergedData;
    };

    const fetchCoureData = async () => {
      await fetch(
        "https://demo2.utcc.ac.th/wp-json/wp/v2/plan?acf_format=standard&_fields=id,slug,acf", { mode: "cors" }
      )
        .then((response) => response.json())
        .then((data) => {
          data1.value = data;
          initialData();
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };

    fetchCoureData();
    const handleIsEvenNumber = (index) => {
      if (index) {
        return index % 2 == 1;
      }
    };
    const clickDegree = (el) => {
      isLoading.value = true
      setTimeout(() => {
        degree.value = el
        initialData();
        isLoading.value = false
      }, 500);

    }
    return {
      handleIsEvenNumber,
      courseList,
      clickDegree,
      degree,
      isLoading
    };
  },
});
</script>
<style scoped>
@import "../../styles/global.css";

.text-height {
  color: var(--gray-gradient);
}

ul.custom-list {
  list-style-type: "-";
  list-style-position: outside;
}

.custom-list li {
  line-height: normal;
  font-weight: 100;
  font-size: 22px;
  padding: 0.25rem 1.5rem 0.25rem 0.5rem;
}

li {
  display: flex;
  font-size: 22px;
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
