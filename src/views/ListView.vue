<script setup>

import BookTable from '../components/BookTable.vue'
import AddBook from '../components/AddBook.vue'

</script>

<template>

    <div class="container content">

        <button class="btn-purple" data-bs-toggle="modal" data-bs-target="#addBookForm">Add <i class="bi bi-bookmark-plus"></i></button>

        
        <BookTable />

        
        <AddBook />
        
    </div>

</template>

<style>




.form-checkbox {
    height: 24px;
    width: 24px;
    color: white;
    margin-top: -20px;
    margin-left: 30%;
}

</style>