<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { useCounterStore } from '@/stores/counter'

// const store = useCounterStore()

let counter = useCounterStore()
</script>

<template>
  <header>

    <div class="wrapper">

      <nav class="navbar navbar-expand-sm bg-light">

        <div class="container-fluid">
          <!-- Links -->
          <ul class="navbar-nav">
            <li class="nav-item">
              <h5>Book List 2.0</h5>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/">Home</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/list">List</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/settings">Settings</RouterLink>
            </li>
          </ul>
        </div>

        </nav>



        <!--
      <p>{{ counter.count }} <button @click="counter.increment">Increment</button></p>
      <p>{{ counter.name }}</p>
      <p v-for="item in counter.formats">{{ item }}</p>
      -->



    </div>
  </header>

  <div class="container-fluid">
    <RouterView />
  </div>
</template>

<style scoped>

.container {
  padding-top: 20px;
  min-width: 90%;
}

nav {
  padding-left: 16px;
}

h5 {
  padding-top: 8px;
  padding-right: 14px;
}

</style>
