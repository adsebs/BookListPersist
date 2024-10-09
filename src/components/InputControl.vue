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
                                <!-- Add input functionality -->
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

</style>