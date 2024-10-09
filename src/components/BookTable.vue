<script setup>

import { useBookStore } from '@/stores/BookData';

let book = useBookStore()



</script>

<template> <!-- for "TBR" -->

<button class="btn btn-primary">Add <i class="bi bi-bookmark-plus"></i></button>

<div id="accordion">

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
            <template v-for="book in book.books">
                <tr  v-if="book.status === item.status">
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
                    <template v-if="item.status !== 'tbr'">
                        <td >{{ book.dateStar }}</td>
                    </template>
                    <template v-if="item.status === 'read'">
                        <td>{{ book.dateFini }}</td>
                        <td>{{ book.rating }}</td>
                        <td><a href="#">Read</a></td>
                    </template>
                    <td><a href="#"><i class="bi bi-pencil"></i></a></td>
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

</style>