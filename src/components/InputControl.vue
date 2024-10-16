<script setup>

import { useInputStore } from '@/stores/InputData';

let input = useInputStore()

</script>


<template>

    <div class="row">

        <div class="col-sm-4">
            <div class="card">
                    <div class="card-title">
                        <h4>Formats</h4>
                    </div>
                    <div class="card-body">
                        <ul>
                            <li v-for="format in input.formats">
                                {{ format }}
                            </li>
                            <li>
                                <form @submit.prevent="input.addFormat">
                                    <input v-model="input.newFormat" type="text">
                                    <button class="btn btn-primary btn-add-input" type="submit"><i class="bi bi-plus-square"></i></button>
                                </form>
                            </li>
                        </ul>
                    </div>
                </div>
        </div>
        <div class="col-sm-4">
            <div class="card">
                    <div class="card-title">
                        <h4>Genders</h4>
                    </div>
                    <div class="card-body">
                        <ul>
                            <li v-for="gender in input.genders">
                                {{ gender }}
                            </li>
                            <li>
                                <form @submit.prevent="input.addGender">
                                    <input v-model="input.newGender" type="text">
                                    <button class="btn btn-primary btn-add-input" type="submit"><i class="bi bi-plus-square"></i></button>
                                </form>
                            </li>
                        </ul>
                    </div>
                </div>
        </div>
        <div class="col-sm-4">
            <div class="card">
                    <div class="card-title">
                        Countries
                    </div>
                    <div class="card-body">
                        <ul>
                            <li v-for="country in input.countries">
                                {{ country }}
                            </li>
                            <li>
                                <form @submit.prevent="input.addCountry">
                                    <input v-model="input.newCountry" type="text">
                                    <button class="btn btn-primary btn-add-input" type="submit"><i class="bi bi-plus-square"></i></button>
                                </form>
                            </li>
                        </ul>
                    </div>
                </div>
        </div>

    </div>
    <div class="row">

        <div class="col-sm-4">
            <div class="card">
                    <div class="card-title">
                        Age Ranges
                    </div>
                    <div class="card-body">
                        <ul>
                            <li v-for="age in input.ages">
                                {{ age }}
                            </li>
                            <li>
                                <form @submit.prevent="input.addAge">
                                    <input v-model="input.newAge" type="text">
                                    <button class="btn btn-primary btn-add-input" type="submit"><i class="bi bi-plus-square"></i></button>
                                </form>
                            </li>
                        </ul>
                    </div>
                </div>
        </div>
        <div class="col-sm-4">
            <div class="card">
                    <div class="card-title">
                        Genres
                    </div>
                    <div class="card-body">
                        <ul>
                            <li v-for="genre in input.genres">
                                {{ genre }}
                            </li>
                            <li>
                                <form @submit.prevent="input.addGenre">
                                    <input v-model="input.newGenre" type="text">
                                    <button class="btn btn-primary btn-add-input" type="submit"><i class="bi bi-plus-square"></i></button>
                                </form>
                            </li>
                        </ul>
                    </div>
                </div>
        </div>
        <div class="col-sm-4">

        </div>

    </div>

    
    
    
    
    

</template>

<style>

    .card-title {
        padding-top: 4px;
        padding-left: 10px;
    }

    .card {
        margin-bottom: 10px;
    }

    .card-body {
        padding-top: 0;
    }

    li {
        list-style-type: none;
    }

    .btn-add-input {
        margin-left: 4px;
        font-size: 12pt;
        padding-top: 2px;
        padding-bottom: 2px;
        padding-left: 5px;
        padding-right: 5px;
        border-radius: 0;
    }

</style>