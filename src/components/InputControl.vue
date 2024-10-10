<script setup>

import { useInputStore } from '@/stores/InputData';

let input = useInputStore()

</script>


<template>

<div class="row">
    <template v-for="type in input.inputs">
        <div v-if="type.type != 'Statuses'" class="col-4">
            <div class="card">
                    <div class="card-title">
                        <h4>{{ type.type }}</h4>
                    </div>
                    <div class="card-body">
                        <ul>
                            <li v-for="option in type.options">
                                {{ option }}
                            </li>
                            <li>
                                <!-- Add input functionality -->
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </template>
    </div>
    
    
    

</template>

<style>

    .card-title {
        padding-top: 4px;
        padding-left: 10px;
    }

    .card {
        width: 100%;
        margin-bottom: 10px;
        float: left;
    }

    .card-body {
        padding-top: 0;
    }

</style>