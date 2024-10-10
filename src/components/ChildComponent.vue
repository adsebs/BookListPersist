<script setup>
import { ref } from 'vue'
defineProps(['title'])
const count = ref(0)
</script>

<template>



  <p>The book is: {{ title }}</p>


</template>