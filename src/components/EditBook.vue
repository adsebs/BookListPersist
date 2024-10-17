
<script setup>

import { useInputStore } from '@/stores/InputData';
import { useBookStore } from '@/stores/BookData';

let input = useInputStore();
let book = useBookStore();

import { ref } from 'vue'
// defineProps({
//   thisId: Number
// })
const count = ref(0)
</script>

<template>

<template v-for="book in book.books">

  <!-- <p>{{ thisId }}</p> -->

  <!-- <button @click="count++">You clicked me {{ count }} times. The title is: {{ title }}</button> -->



  <template v-if="book.active == true">

      <div class="modal" :id="'book'+book.id">
        <div class="modal-dialog modal-xl">
          <div class="modal-content">


            <div class="modal-header">
              <h4 class="modal-title">Edit {{ book.title }}</h4>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>


            <div class="modal-body">
              
              <form>
                <div class="row">
                  <div class="col">
                    <label class="form-label" for="title">Title</label>
                    <input class="form-control" type="text" v-model="book.title" name="title">
                  </div>
                  <div class="col">
                    <label class="form-label" for="author">Author</label>
                    <input class="form-control" type="text" v-model="book.author" name="author">
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <label class="form-label" for="reading">Reading Status</label>
                    <select v-model="book.status" class="form-select" name="status">
                        <option value="tbr">tbr</option>
                        <option value="reading">reading</option>
                        <option value="read">read</option>
                    </select>
                  </div>
                  <div class="col">
                    <label class="form-label" for="started">Date Started</label>
                    <input v-model="book.dateStar" name="started" class="form-control" type="text">
                  </div>
                  <div class="col">
                    <label class="form-label" for="finished">Date Finished</label>
                    <input v-model="book.dateFini" name="finished" class="form-control" type="text">
                  </div>
                  <div class="col-1">
                    <label class="form-label" for="collection">Collection &nbsp</label>
                    <input v-model="book.collection" name="collection" class="form-checkbox" type="checkbox">
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <label class="form-label" for="format">Format</label>
                    <select v-model="book.format" class="form-select" name="format">
                        <option v-for="format in input.formats" :value="format">{{ format }}</option>
                    </select>
                  </div>

                </div>
                <div class="row">
                <div class="col">
                    <label class="form-label" for="gender">Author Gender</label>
                    <select v-model="book.gender" class="form-select" name="gender">
                        <option v-for="gender in input.genders" :value="gender">{{ gender }}</option>
                    </select>
                </div>
                <div class="col">
                    <label class="form-label" for="country">Author Country</label>
                    <select v-model="book.country" class="form-select" name="country">
                        <option v-for="country in input.countries" :value="country">{{ country }}</option>
                    </select>
                </div>
                </div>
                <div class="row">
                <div class="col">
                    <label class="form-label" for="age">Target Age</label>
                    <select v-model="book.age" class="form-select" name="age">
                        <option v-for="age in input.ages" :value="age">{{ age }}</option>
                    </select>
                </div>
                <div class="col">
                    <label class="form-label" for="genre">Primary Genre</label>
                    <select v-model="book.primGenr" class="form-select" name="genre">
                        <option v-for="genre in input.genres" :value="genre">{{ genre }}</option>
                    </select>
                </div>
                <div class="col">
                    <label class="form-label" for="genre">Secondary Genre</label>
                    <select v-model="book.secoGenr" class="form-select" name="genre">
                        <option v-for="genre in input.genres" :value="genre">{{ genre }}</option>
                    </select>
                </div>
            </div>
                <div class="row">
                  <div class="col-3">
                    <label class="form-label" for="year">Year Published</label>
                    <input v-model="book.publYear" name="year" class="form-control" type="text">
                </div>
                <div class="col-6">
                    <label class="form-label" for="publisher">Publisher</label>
                    <input v-model="book.publisher" class="form-control" name="publisher" type="text">
                </div>
                <div class="col-3">
                    <label class="form-label" for="pages">Pages</label>
                    <input v-model="book.pages" name="pages" class="form-control" type="text">
                </div>
                  
                </div>
                
                <!-- <label for="deletebook">
                  <input type="checkbox" name="deletebook" id="deletebook" class="delete-checkbox" v-model="book.active"> 
                  <button class="btn-purple" data-bs-dismiss="modal">Delete Book</button>
                </label> -->
              
              
                <!-- <button class="btn-purple" type="submit">Update</button> -->
              </form>
                
                
                <!-- <button type="button" class="btn-purple">Delete Book</button> -->
              

              <button type="button" class="btn-grey" data-bs-dismiss="modal">Close</button>

              
            </div>

          </div>
        </div>
      </div>

  </template>
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

<style>

.delete-checkbox {

  margin-right: 6px;
}

/* #deletebook {
  display: none;
} */


</style>
