<template>
    <div id="whyus" class="grid grid-cols-2 items-center">
    <div class="bg-img">
       &nbsp;
    </div>
    <div class="content bg-a-yellow-FFD179 h-full w-full" >
        <h1 class="text-54 font-bold uppercase">
          ทำไมต้องเรียนที่นี่
        </h1>
        <div class="desc text-30">
          ทำไมต้องเรียน คณะการท่องเที่ยวและอุตสาหกรรมบริการ มหาวิทยาลัยหอการค้าไทย
        </div>
        <ol class="decimal text-30  md:text-24 ">
          <li>หลักสูตรได้รับการรับรองมาตรฐานจากองค์การการท่องเที่ยวโลกแห่งสหประชาชาติ (UNWTO.TedQual)</li>
          <li>พรั่งพร้อมด้วยห้องปฏิบัติการที่ทันสมัย ทั้งบริษัทนำเที่ยว โรงแรม ครัว ภัตตาคาร สายการบิน และอีเว้นท์</li>
          <li>ฝึกปฏิบัติงานจริงทั้งในและต่างประเทศ</li>
          <li>มีเครือข่ายกับหอการค้าไทย และสถานประกอบการชั้นนำทั่วประเทศ</li>
          <li>เป็นตัวจริงในการสร้างนักบริหาร และผู้ประกอบการรุ่นใหม่ที่ขับเคลื่อนด้วยนวัตกรรม</li>
        </ol>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
 .bg-img {
    background-image: url('../../../public/image/aboutus-03.jpeg');
    background-repeat: no-repeat;
    background-position: center center;
    background-size:  cover;
    width: 100%;
    height: 590px;
 }
 .content {
    padding: 5.75rem 3rem;
 }
 ol.decimal {
  list-style: decimal;
}

@media only screen and (max-width: 767px) {
 #whyus{
  display: flex;
  flex-direction: column;
 }

 h1 {
   font-size: 42px;
   margin-bottom: 1rem;
 }
 .desc {
  margin-bottom: 1rem;
 }
 ol.decimal, .desc {
  font-size: 20px;
 }

}
@media only screen and (min-width: 768px) and (max-width: 1023px) {
 #whyus{
  display: flex;
  flex-direction: column;
 }

 h1 {
   font-size: 42px;
   margin-bottom: 1rem;
 }
 .desc {
  margin-bottom: 1rem;
 }
 ol.decimal, .desc {
  font-size: 20px;
 }

}
</style>