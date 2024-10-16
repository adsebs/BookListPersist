import { defineStore } from 'pinia'

 export const useInputStore = defineStore('input', {
   state: () => ({ 

    formats: [ 'Paperback', 'Hardback', 'E-Book', 'Audiobook', 'Graphic' ],
    genders: [ 'Male', 'Female', 'Other' ],
    countries: [ 'UK', 'USA', 'Japan', 'South Korea', 'Canada', 'Multi Auth' ],
    ages: [ 'Adult', 'YA', 'Children' ],
    genres: [ 'Fantasy', 'Romance', 'Science Fiction', 'Gothic', 'Horror', 'Contemporary', 'Historical Fiction'],

    newFormat: '',
    newGender: '',
    newCountry: '',
    newAge: '',
    newGenre: ''

  }),
   getters: {

   },
   actions: {
    addFormat() {
      this.formats.push(this.newFormat);
    },
    addGender() {
      this.genders.push(this.newGender);
    },
    addCountry() {
      this.countries.push(this.newCountry);
    },
    addAge() {
      this.ages.push(this.newAge);
    },
    addGenre() {
      this.genres.push(this.newGenre);
    }
   }
 })
