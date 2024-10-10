import { defineStore } from 'pinia'

 export const useInputStore = defineStore('input', {
   state: () => ({ 


    inputs: [
      {
        type: 'Formats', options: [ 'Paperback', 'Hardback', 'E-Book', 'Audiobook', 'Graphic' ]
      },
      {
        type: 'Genders', options:  [ 'Male', 'Female', 'Other' ]
      },
      {
        type: 'Countries', options: [ 'UK', 'USA', 'Japan', 'South Korea', 'Canada', 'Multi Auth' ]
      },
      {
        type: 'Ages', options: [ 'Adult', 'YA', 'Children' ]
      },
      {
        type: 'Genres', options: [ 'Fantasy', 'Romance', 'Science Fiction', 'Gothic', 'Horror', 'Contemporary', 'Historical Fiction']
      },
      {
        type: 'Statuses', options: [ 'tbr', 'reading', 'read', 'dnf' ]
      }

    ],



  }),
   getters: {

   },
   actions: {

   }
 })
