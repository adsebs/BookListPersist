<script setup>

import { useBookStore } from '@/stores/BookData';

let book = useBookStore()

// import EditBook from '../components/EditBook.vue'

let chosenbook = "default title"

</script>

<template> 

<!-- <ChildComponent :title="chosenbook" /> -->

<p>{{ chosenbook }}</p>

<div id="accordion">

<<<<<<< Updated upstream
=======
    <!-- <ChildComponent :title="sendtitle" /> -->

>>>>>>> Stashed changes
<div v-for="item in book.tblCols" class="card">
  <div class="card-header">
    <a class="btn" data-bs-toggle="collapse" :href="'#'+item.status">
        {{ item.title }}
    </a>
  </div>
  <div :id="item.status" class="collapse" data-bs-parent="#accordion">
    <div class="card-body">
        <table class="table">
        <thead>
            <tr>
                <th v-for="heading in item.headings">
                    {{ heading }}
                </th>
            </tr>
        </thead>
        <tbody>
            <template v-for="book in book.books" :key="book.id">
                <tr  v-if="book.status == item.status">
                    <td>{{ book.title }}</td>
                    <td>{{ book.author }}</td>
                    <td>{{ book.primGenr }}<template v-if="book.secoGenr !== ''">, {{ book.secoGenr }}</template></td>
                    <td>{{ book.age }}</td>
                    <td>{{ book.format }}</td>
                    <td>{{ book.pages }}</td>
                    <td>{{ book.authCoun }}</td>
                    <td>{{ book.authGend }}</td>
                    <td>{{ book.publYear }}</td>
                    <td>{{ book.publisher }}</td>
                    <td>
                        <input class="form-check-input" type="checkbox" v-model="book.collection" disabled>
                    </td>
                    <template v-if="item.status != 'tbr'">
                        <td >{{ book.dateStar }}</td>
                    </template>
                    <template v-if="item.status == 'read'">
                        <td>{{ book.dateFini }}</td>
                        <td>{{ book.rating }}</td>
                        <td><a href="#">Read</a></td>
                    </template>
                    <td>
                        
                    <form @submit.prevent="chosenbook = book.id">
                        <button type="submit" class="btn btn-primary" id="btn-edit"><i class="bi bi-pencil"></i></button>
                    </form>

                        
                        <!-- <button class="btn-primary" id="btn-edit" data-bs-toggle="modal" data-bs-target="#editBookForm"><i class="bi bi-pencil"></i></button> -->
                    </td>
                </tr>
            </template>
        </tbody>
    </table>
    </div>
  </div>
</div>

</div>

</template>


<style>

    table {
        font-size: 12pt;
    }

    table i {
        font-size: 13.5pt;
        padding: 0;
    }

    th, td {
        max-width: 5%;
    }

    button {
        margin-bottom: 10px;
        border-radius: 0px!important;
        font-size: 13.5pt!important;
    }

    #btn-edit {
        font-size: 12pt;
        padding-top: 2px;
        padding-bottom: 2px;
        padding-left: 5px;
        padding-right: 5px;
        margin: 0;
    }

</style>