<script setup>

import { useInputStore } from '@/stores/InputData';
import { useBookStore } from '@/stores/BookData';

let input = useInputStore();
let book = useBookStore();



</script>

<template>


<div class="modal" id="addBookForm">
  <div class="modal-dialog modal-xl">
    <div class="modal-content">

      <!-- Modal Header -->
      <div class="modal-header">
        <h4 class="modal-title">Add New Book</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>

      <!-- Modal body -->
      <div class="modal-body">
        
        
        <form id="addBook" @submit.prevent="book.add">
            <div class="row">
                <div class="col">
                    <label class="form-label" for="title">Title</label>
                    <input v-model="book.newTitle" name="title" class="form-control" type="text">
                </div>
                <div class="col">
                    <label class="form-label" for="author">Author</label>
                    <input v-model="book.newAuthor" name="author" class="form-control" type="text">
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <label class="form-label" for="reading">Reading Status</label>
                    <select v-model="book.newStatus" class="form-select" name="status">
                        <option value="tbr">tbr</option>
                        <option value="reading">reading</option>
                        <option value="read">read</option>
                    </select>
                </div>
                <div class="col">
                    <label class="form-label" for="started">Date Started</label>
                    <input v-model="book.newDateStar" name="started" class="form-control" type="text">
                </div>
                <div class="col-1">
                    <label class="form-label" for="collection">Collection &nbsp</label>
                    <input v-model="book.newCollection" name="collection" class="form-control form-check-input" type="checkbox">
                </div>
                <div class="col">
                    <label class="form-label" for="format">Format</label>
                    <select v-model="book.newFormat" class="form-select" name="format">
                        <option v-for="format in input.formats" :value="format">{{ format }}</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <label class="form-label" for="gender">Author Gender</label>
                    <select v-model="book.newGender" class="form-select" name="gender">
                        <option v-for="gender in input.genders" :value="gender">{{ gender }}</option>
                    </select>
                </div>
                <div class="col">
                    <label class="form-label" for="country">Author Country</label>
                    <select v-model="book.newCountry" class="form-select" name="country">
                        <option v-for="country in input.countries" :value="country">{{ country }}</option>
                    </select>
                </div>
                
            </div>
            <div class="row">
                <div class="col">
                    <label class="form-label" for="age">Target Age</label>
                    <select v-model="book.newAge" class="form-select" name="age">
                        <option v-for="age in input.ages" :value="age">{{ age }}</option>
                    </select>
                </div>
                <div class="col">
                    <label class="form-label" for="genre">Primary Genre</label>
                    <select v-model="book.newPrimGenr" class="form-select" name="genre">
                        <option v-for="genre in input.genres" :value="genre">{{ genre }}</option>
                    </select>
                </div>
                <div class="col">
                    <label class="form-label" for="genre">Secondary Genre</label>
                    <select v-model="book.newSecoGenr" class="form-select" name="genre">
                        <option v-for="genre in input.genres" :value="genre">{{ genre }}</option>
                    </select>
                </div>
            </div>

            <div class="row">
                <div class="col-3">
                    <label class="form-label" for="year">Year Published</label>
                    <input v-model="book.newYear" name="year" class="form-control" type="text">
                </div>
                <div class="col-6">
                    <label class="form-label" for="publisher">Publisher</label>
                    <input v-model="book.newPubl" class="form-control" name="publisher" type="text">
                </div>
                <div class="col-3">
                    <label class="form-label" for="pages">Pages</label>
                    <input v-model="book.newPages" name="pages" class="form-control" type="text">
                </div>
                
                
            </div>

            <button class="btn btn-primary" type="submit">Add Book</button>

        </form>

        
      </div>

    </div>
  </div>
</div>


        

</template>

<style>

label, button {
    margin-top: 10px;
}

</style>