import { defineStore } from 'pinia'

 export const useCounterStore = defineStore('counter', {
   state: () => ({ 
    count: 0, 
    name: 'Eduardo',
    formats: [ 'paperback', 'hardback', 'e-book', 'audiobook', 'graphic' ]
  }),
   getters: {
     doubleCount: (state) => state.count * 2,
   },
   actions: {
     increment() {
       this.count++
     },
   },
 })
