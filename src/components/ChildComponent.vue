
<script setup>

import { useBookStore } from '@/stores/BookData';

let book = useBookStore()

import { ref } from 'vue'
defineProps({
  thisId: Number
})
const count = ref(0)
</script>

<template>

  <!-- <p>{{ thisId }}</p> -->

  <!-- <button @click="count++">You clicked me {{ count }} times. The title is: {{ title }}</button> -->



  <template v-for="book in book.books">

      <div class="modal" :id="'book'+book.id">
        <div class="modal-dialog modal-xl">
          <div class="modal-content">


            <div class="modal-header">
              <h4 class="modal-title">Edit {{ book.title }}</h4>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>


            <div class="modal-body">
              
              
              <p>{{ book.author }}</p>
              <p>{{ book.genre }}</p>
              <p>{{ book.age }}</p>
              <p>{{ book.format }}</p>

              
            </div>

          </div>
        </div>
      </div>

  </template>

  
  <!-- <div class="modal" :id="'book'+thisId">
  <div class="modal-dialog modal-xl">
    <div class="modal-content">


      <div class="modal-header">
        <h4 class="modal-title">Edit Book</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>


      <div class="modal-body">
        
        
        <p>{{ book.title }}</p>

        
      </div>

    </div>
  </div>
  </div> -->

</template>