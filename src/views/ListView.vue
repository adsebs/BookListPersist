<script setup>

import BookTable from '../components/BookTable.vue'
import AddBook from '../components/AddBook.vue'

</script>

<template>

    <div class="container content">

        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addBookForm">Add <i class="bi bi-bookmark-plus"></i></button>

        
        <BookTable />
        <AddBook />
        
    </div>

</template>