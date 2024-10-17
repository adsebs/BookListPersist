<script setup>

import { useInputStore } from '@/stores/InputData';

let input = useInputStore()

</script>


<template>

<div class="row">
        <div class="col-4">
            <div class="card">
                    <div class="card-title">
                        <h5>Formats</h5>
                    </div>
                    <div class="card-body">
                        <ul>
                            <li v-for="format in input.formats">
                                {{ format }}
                            </li>
                            <li>
                                <form ref="submitFormat" @submit.prevent="input.addFormat">
                                    <input v-model="input.newFormat" type="text">
                                    <button class="btn-purple btn-add-input" type="submit"><i class="bi bi-plus-square"></i></button>
                                </form>
                            </li>
                        </ul>
                    </div>
                </div>
        </div>
        <div class="col-sm-4">
            <div class="card">
                    <div class="card-title">
                        <h5>Genders</h5>
                    </div>
                    <div class="card-body">
                        <ul>
                            <li v-for="gender in input.genders">
                                {{ gender }}
                            </li>
                            <li>
                                <form @submit.prevent="input.addGender">
                                    <input v-model="input.newGender" type="text">
                                    <button class="btn-purple btn-add-input" type="submit"><i class="bi bi-plus-square"></i></button>
                                </form>
                            </li>
                        </ul>
                    </div>
                </div>
        </div>
        <div class="col-sm-4">
            <div class="card">
                    <div class="card-title">
                        <h5>Countries</h5>
                    </div>
                    <div class="card-body">
                        <ul>
                            <li v-for="country in input.countries">
                                {{ country }}
                            </li>
                            <li>
                                <form @submit.prevent="input.addCountry">
                                    <input v-model="input.newCountry" type="text">
                                    <button class="btn-purple btn-add-input" type="submit"><i class="bi bi-plus-square"></i></button>
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
                        <h5>Age Ranges</h5>
                    </div>
                    <div class="card-body">
                        <ul>
                            <li v-for="age in input.ages">
                                {{ age }}
                            </li>
                            <li>
                                <form @submit.prevent="input.addAge">
                                    <input v-model="input.newAge" type="text">
                                    <button class="btn-purple btn-add-input" type="submit"><i class="bi bi-plus-square"></i></button>
                                </form>
                            </li>
                        </ul>
                    </div>
                </div>
        </div>
        <div class="col-sm-4">
            <div class="card">
                    <div class="card-title">
                        <h5>Genres</h5>
                    </div>
                    <div class="card-body">
                        <ul>
                            <li v-for="genre in input.genres">
                                {{ genre }}
                            </li>
                            <li>
                                <form @submit.prevent="input.addGenre">
                                    <input v-model="input.newGenre" type="text">
                                    <button class="btn-purple btn-add-input" type="submit"><i class="bi bi-plus-square"></i></button>
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
        background-color: #f2edfc;
        border: 2px solid #765ea6;
        border-radius: 0 !important;
        margin-bottom: 0;
    }

    .card {
        width: 100%;
        margin-bottom: 10px;
        float: left;
    }

    .card-body {
        padding-top: 8px;
        border-left: 2px solid #765ea6;
        border-bottom: 2px solid #765ea6;
        border-right: 2px solid #765ea6;
        background-color: white;
        padding-bottom: 1px;
    }

    li {
        list-style-type: none;
    }

    .btn-add-input {
        font-size: 13pt;
        padding-top: 2px;
        margin-left: 4px;
        padding-bottom: 3px;
    }

</style>