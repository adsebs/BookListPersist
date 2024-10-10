<script setup>

import { useInputStore } from '@/stores/InputData';
import { useBookStore } from '@/stores/BookData';

let input = useInputStore();
let book = useBookStore();

</script>


<template>

<p>Chosen: {{  }}</p>
    
</template>


<!-- <template>

<div class="modal" id="editBookForm">
  <div class="modal-dialog modal-xl">
    <div class="modal-content">

     
      <div class="modal-header">
        <h4 class="modal-title">Edit Book</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>

      
      <div class="modal-body">
        
        
            <p>Content</p>
            {{ chosen_book }}

        
      </div>

    </div>
  </div>
</div>


</template> -->