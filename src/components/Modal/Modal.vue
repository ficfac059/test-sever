<!-- Modal.vue -->
<template>
    <div class="fixed inset-0 z-20" id="modal">
      <div class="flex items-center justify-center min-h-screen">
        <div class="fixed inset-0 bg-black opacity-50"  @click="closeModal"></div>
        <div class="relative  rounded-2xl" >
          <!-- <div class="flex justify-between items-center py-2">
            <span> 
                &nbsp;
            </span>
            <button class="p-2" @click="closeModal">
              <img src="../../../public/icon/close-modal.svg" alt="close modal w-full" class="drop-shadow-sm" />
             </button>
          </div> -->
          <button  @click="closeModal" class="btn btn-sm btn-circle  flex absolute right-5 top-5 z-20 text-20 items-center glass text-white opacity-50 hover:opacity-100">✕</button>

          <div class="modal-dialog drop-shadow-xl relative bg-white rounded-lg">
            <div class="modal-dialog">
                <slot></slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

  <script>
  import {ref,defineComponent,watch} from 'vue'
  export default defineComponent({
    name: "ModalVue",
    emits:["close"],
    props: {
      isShow: {type: Boolean, require: true}
    },
    setup(props,ctx){
        watch(props.isShow, () => {
            if (props.isShow == true) {
                console.log('watch .. isShow');
            }
        })
        const closeModal = () =>{
          document.body.style.overflow = '';
            ctx.emit("close", true);
        }
        return{
            closeModal
        }
    }
  });
  </script>

  <style scoped>
  .modal-dialog {
    max-width: 1080px;
  }
   .modal-body{
     position: relative;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding: 1rem;

   }
  </style>
