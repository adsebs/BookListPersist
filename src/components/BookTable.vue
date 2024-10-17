
<script setup>

import { useBookStore } from '@/stores/BookData';
import EditBook from './EditBook.vue'

let book = useBookStore()

let thisId = "book0"
let thisTitle= "Default Title"

// import EditBook from '../components/EditBook.vue'

let chosenbook = "default title"

</script>

<template> 


<div id="accordion">

<div v-for="item in book.tblCols" class="card accordion-item">
  <div class="card-header accordion-header">
    <a class="btn" data-bs-toggle="collapse" :href="'#'+item.status">
        {{ item.title }}
    </a>
  </div>
  <div :id="item.status" class="collapse" data-bs-parent="#accordion">
    <div class="card-body accordion-body">
        <table class="table table-striped">
        <thead>
            <tr>
                <th v-for="heading in item.headings">
                    {{ heading }}
                </th>
                <th>&nbsp</th>
            </tr>
        </thead>
        <tbody>
            <template v-for="book in book.books" :key=book.id>
                <template v-if="book.active == true">
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
                        <label class="form-checkbox-label">
                            <input class="form-checkbox" type="checkbox" v-model="book.collection" disabled>     
                        </label>
                        
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
                        <button class="btn-purple btn-edit" data-bs-toggle="modal" :data-bs-target="'#book'+book.id"><i class="bi bi-pencil"></i></button>
                    </td>

                
            </tr>
            </template>
            </template>
        </tbody>
    </table>
    </div>
  </div>
</div>

</div>

    <EditBook />
 

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

    #btn-edit {
        margin-bottom: 10px;
        font-size: 13.5pt!important;
        font-size: 12pt;
        padding-top: 2px;
    }

    .accordion-header {
        background-color: #f2edfc;
        border: 2px solid #765ea6;
        border-radius: 0 !important;
    }

    .accordion-body {
        border-left: 2px solid #765ea6;
        border-bottom: 2px solid #765ea6;
        border-right: 2px solid #765ea6;
        background-color: white;
    }

    .accordion-item {
        margin-bottom: 4px;
        margin-top: 6px;
    }

</style>