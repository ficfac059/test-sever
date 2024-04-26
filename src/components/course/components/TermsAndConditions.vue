<template>
  <div class="p-4 text-a-gray-696F6F">
    <h4 class="text-30">เงื่อนไขและข้อกำหนดของมหาวิทยลัย</h4>
    <div class="container-content gap-8">
      <div class="item flex gap-4">
        *
        <ul class="custom-list">
          <li>
            ค่าเล่าเรียนอัตราเหมาจ่าย
            อยู่ภายใต้เงื่อนไขเตามที่มหาวิทยาลัยหอการค้าไทยกำหนด
            โดยได้รวมค่าประกันของเสียหายไว้เรียบร้อยแล้ว และค่าเล่าเรียนงวด 1
            ของแต่ละปีได้รวมค่า เบี้ยประกันอุบัติเหตุกลุ่ม หรือ
            ค่าประกันสุขภาพนักศึกษาต่างชาติ ไว้เรียบร้อยแล้ว
          </li>
          <li>
            ค่าเล่าเรียนตลอดหลักสูตรจะขึ้นอยู่กับจำนวนวิชาที่เทียบโอนได้ในแต่ละหลักสูตร
          </li>
          <li>อ้างอิงข้อมูล ปีการศึกษา 2564</li>
        </ul>
      </div>
      <div class="item font-light">
        <div class="flex gap-4">
          **
          <ul>
            <li class="mt-1">
              <img src="../../../../public/icon/Type-1.svg" alt="type1" /><span class="ml-2">
                ลักษณะที่ 1 ทุนรัตนมงคล ส่วนลดค่าเล่าเรียน 100% เกรดเฉลี่ยสะสมไม่ต่ำกว่า 3.50
              </span>
            </li>
            <li>
              <img src="../../../../public/icon/Type-2.svg" alt="type2" /><span class="ml-2">
                ลักษณะที่ 2 ทุน UTCC Gold ส่วนลดค่าเล่าเรียน 40% เกรดเฉลี่ยสะสมไม่ต่ำกว่า 3.00
              </span>
            </li>
            <li>
              <img src="../../../../public/icon/Type-3.svg" alt="type3" /><span class="ml-2">
                ลักษณะที่ 3 ทุน UTCC Silver ส่วนลดค่าเล่าเรียน 25% เกรดเฉลี่ยสะสมไม่ต่ำกว่า 2.50
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@import "../../../styles/global.css";

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

.container-content {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  font-size: 24px;
}

.ttem {
  padding: 0 1rem;
}

@media only screen and (max-width: 767px) {
  h4 {
    font-size: 24px;
  }

  li {
    font-size: 20px;
  }

  .custom-list li {
    font-size: 20px;
  }

  .item,
  .item .flex {
    gap: 0;
  }

  .container-content {
    display: flex;
    font-size: 20px;
    flex-direction: column;
  }

  .item:nth-child(1) {
    order: 2;
    /* Make this item appear second */
  }

  .item:nth-child(2) {
    order: 1;
    /* Make this item appear first */
  }
}
</style>