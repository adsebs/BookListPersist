import { defineStore } from 'pinia'

 export const useInputStore = defineStore('input', {
   state: () => ({ 

    formats: [ 'Paperback', 'Hardback', 'E-Book', 'Audiobook', 'Graphic' ],
    genders: [ 'Male', 'Female', 'Other' ],
    countries: [ 'UK', 'USA', 'Japan', 'South Korea', 'Canada', 'Multi Auth' ],
    ages: [ 'Adult', 'Young Adult', 'Children' ],
    genres: [ 'Fantasy', 'Romance', 'Science Fiction', 'Gothic', 'Horror', 'Contemporary', 'Historical Fiction']

  }),
   getters: {

   },
   actions: {

   }
 })
