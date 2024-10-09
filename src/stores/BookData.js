import { defineStore } from 'pinia'

 export const useBookStore = defineStore('book', {
   state: () => ({ 

    //BOOKS
    books: [
        { id: '0', status: 'reading', collection: true, title: 'Making It So', author: 'Patrick Stewart', authGend: 'Male', authCoun: 'UK', age: 'Adult', primGenr: 'Memoir', secoGenr: '', pages: 443, publYear: 2023, publisher: 'Simon & Schuster', format: 'Hardback', dateStar: '2023-10-18', dateFini: '', rating: '', review: '' },

        { id: '1', status: 'reading', collection: false, title: 'In a Glass Darkly', author: 'Sheridan Le Fanu', authGend: 'Male', authCoun: 'Ireland', age: 'Adult', primGenr: 'gothic', secoGenr: 'Horror', pages: 384, publYear: 1872, publisher: 'Oxford University Press', format: 'Paperback', dateStar: '2024-03-17', dateFini: '', rating: '', review: '' },

        { id: '2', status: 'reading', collection: true, title: 'Blood Scion', author: 'Deborah Falaye', authGend: 'Female', authCoun: 'Canada', age: 'YA', primGenr: 'Fantasy', secoGenr: '', pages: 415, publYear: 2023, publisher: 'Harper Collins', format: 'hardback', dateStar: '2024-08-12', dateFini: '', rating: '', review: '' },

        { id: '3', status: 'reading', collection: true, title: 'City of Last Chances', author: 'Adrian Tchaikovsky', authGend: 'Male', authCoun: 'UK', age: 'Adult', primGenr: 'Fantasy', secoGenr: '', pages: 498, publYear: 2022, publisher: 'Bloomsbury', format: 'Paperback', dateStar: '2024-08-28', dateFini: '', rating: '', review: '' },

        { id: '4', status: 'reading', collection: true, title: 'Want', author: 'Gillian Anderson, Anonymous', authGend: 'Multi Auth', authCoun: 'USA', age: 'Adult', primGenr: 'Essays', secoGenr: 'Sexuality', pages: 372, publYear: 2024, publisher: 'Bloomsbury', format: 'Hardback', dateStar: '2024-09-06', dateFini: '', rating: '', review: '' },

        { id: '5', status: 'read', collection: true, title: 'The Final Strife', author: 'Saara El-Arifi', authGend: 'Female', authCoun: 'UK', age: 'Adult', primGenr: 'Fantasy', secoGenr: '', pages: 475, publYear: 2022, publisher: 'Harper Collins', format: 'Paperback', dateStar: '2024-09-19', dateFini: '2024-09-27', rating: 9, review: '' },

        { id: '6', status: 'reading', collection: false, title: 'Management: A Very Short Introduction', author: 'John Hendry', authGend: 'Male', authCoun: 'UK', age: 'Adult', primGenr: 'Management', secoGenr: 'Business', pages: 160, publYear: 2013, publisher: 'Oxford University Press', format: 'Audiobook', dateStar: '2024-09-20', dateFini: '', rating: '', review: '' },

        { id: '7', status: 'reading', collection: false, title: 'Brisingr', author: 'Christopher Paolini', authGend: 'Male', authCoun: 'USA', age: 'YA', primGenr: 'Fantasy', secoGenr: 'Coming of Age', pages: 748, publYear: 2008, publisher: 'Penguin', format: 'Audiobook', dateStar: '2024-09-20', dateFini: '', rating: '', review: '' },

        { id: '8', status: 'read', collection: true, title: 'Snow White and Other Grimms Fairy Tales', author: 'The Brothers Grimm', authGend: 'Multi Auth', authCoun: 'Multi Auth', age: 'Children', primGenr: 'Fantasy', secoGenr: '', pages: 220, publYear: 2022, publisher: 'Harper Collins', format: 'Hardback', dateStar: '2024-09-24', dateFini: '2024-09-29', rating: 10, review: '' },

        { id: '9', status: 'reading', collection: false, title: 'The Hobbit', author: 'J.R.R Tolkien', authGend: 'Male', authCoun: 'UK', age: 'Children', primGenr: 'Fantasy', secoGenr: '', pages: 305, publYear: 1937, publisher: 'Harper Collins', format: 'E-Book', dateStar: '2024-09-24', dateFini: '', rating: '', review: '' },

        { id: '10', status: 'reading', collection: true, title: 'An Ember in the Ashes', author: 'Sabaa Tahir', authGend: 'Female', authCoun: 'USA', age: 'YA', primGenr: 'Fantasy', secoGenr: '', pages: 448, publYear: 2016, publisher: 'Harper Collins', format: 'Paperback', dateStar: '2024-09-29', dateFini: '', rating: '', review: '' },

        { id: '11', status: 'tbr', collection: true, title: 'The Map that Led to You', author: 'Ella Mcleod', authGend: 'female', authCoun: 'UK', age: 'YA', primGenr: 'Fantasy', secoGenr: '', pages: 470, publYear: 2024, publisher: 'Scholastic', format: 'Paperback', dateStar: '', dateFini: '', rating: '', review: '' },

        { id: '12', status: 'tbr', collection: true, title: 'Fathomfolk', author: 'Eliza Chan', authGend: 'Female', authCoun: 'UK', age: 'Adult', primGenr: 'Fantasy', secoGenr: 'Sci-Fi', pages: 421, publYear: 2024, publisher: 'Hachette', format: 'Hardback', dateStar: '', dateFini: '', rating: '', review: '' },

        { id: '13', status: 'tbr', collection: true, title: 'Not for the Faint of Heart', author: 'Lex Croucher', authGend: 'Other', authCoun: 'UK', age: 'YA', primGenr: 'Historical Fiction', secoGenr: '', pages: 378, publYear: 2024, publisher: 'Bloomsbury', format: 'Paperback', dateStar: '', dateFini: '', rating: '', review: '' },

        { id: '14', status: 'tbr', collection: true, title: 'The Battle Drum', author: 'Saara El-Arifi', authGend: 'Female', authCoun: 'UK', age: 'Adult', primGenr: 'Fantasy', secoGenr: '', pages: 421, publYear: 2023, publisher: 'Harper Collins', format: 'Paperback', dateStar: '', dateFini: '', rating: '', review: '' },

        { id: '15', status: 'tbr', collection: true, title: 'The Invisible Life of Addie LaRue', author: 'V.E. Schwab', authGend: 'Female', authCoun: 'USA', age: 'Adult', primGenr: 'Fantasy', secoGenr: 'Historical Fiction', pages: 541, publYear: 2020, publisher: 'Titan Books', format: 'Paperback', dateStar: '', dateFini: '', rating: '', review: '' },

        { id: '16', status: 'read', collection: true, title: 'More Days at the Morisaki Bookshop', author: 'Satoshi Yagisawa, Eric Ozawa', authGend: 'Male', authCoun: 'Japan', age: 'Adult', primGenr: 'Contemporary', secoGenr: '', pages: 163, publYear: 2024, publisher: 'Bonnier', format: 'Paperback', dateStar: '2024-08-30', dateFini: '2024-09-21', rating: 7, review: '' },

        { id: '17', status: 'read', collection: true, title: 'The Revenant Games', author: 'Margie Fuston', authGend: 'Female', authCoun: 'USA', age: 'YA', primGenr: 'Fantasy', secoGenr: 'Romance', pages: 416, publYear: 2024, publisher: 'Simon & Schuster', format: 'Audiobook', dateStar: '2024-09-12', dateFini: '2024-09-19', rating: 5, review: '' },

        { id: '18', status: 'read', collection: true, title: 'How the King of Elfhame Learned to Hate Stories', author: 'Holly Black', authGend: 'Female', authCoun: 'USA', age: 'YA', primGenr: 'Fantasy', secoGenr: '', pages: 173, publYear: 2020, publisher: 'Bonnier', format: 'Hardback', dateStar: '2024-09-16', dateFini: '2024-09-18', rating: 9, review: '' },

        { id: '19', status: 'read', collection: true, title: 'When Among Crows', author: 'Veronica Roth', authGend: 'Female', authCoun: 'USA', age: 'Adult', primGenr: 'Fantasy', secoGenr: '', pages: 165, publYear: 2024, publisher: 'Titan Books', format: 'Hardback', dateStar: '2024-09-03', dateFini: '2024-09-17', rating: 8, review: '' },

        { id: '20', status: 'read', collection: false, title: 'Eldest', author: 'Christopher Paolini', authGend: 'Male', authCoun: 'USA', age: 'YA', primGenr: 'Fantasy', secoGenr: 'Coming of Age', pages: 704, publYear: 2005, publisher: 'Penguin', format: 'Audiobook', dateStar: '2024-09-07', dateFini: '2024-09-12', rating: 8, review: '' },

        { id: '21', status: 'tbr', collection: true, title: 'The Hedge Witch of Foxhall', author: 'Anna Bright', authGend: 'Female', authCoun: 'USA', age: 'YA', primGenr: 'Fantasy', secoGenr: '', pages: 389, publYear: 2024, publisher: 'Harper Collins', format: 'Hardback', dateStar: '', dateFini: '', rating: '', review: '' },

        { id: '22', status: 'tbr', collection: true, title: 'The Crimson Moth', author: 'Kristen Ciccarelli', authGend: 'Female', authCoun: 'Canada', age: 'YA', primGenr: 'Fantasy', secoGenr: '', pages: 404, publYear: 2024, publisher: 'Harper Collins', format: 'Hardback', dateStar: '', dateFini: '', rating: '', review: '' },

        { id: '23', status: 'tbr', collection: true, title: 'Never a Hero', author: 'Vanessa Len', authGend: 'Female', authCoun: 'Australia', age: 'YA', primGenr: 'Fantasy', secoGenr: 'Historical Fiction', pages: 485, publYear: 2024, publisher: 'Hachette', format: 'Paperback', dateStar: '', dateFini: '', rating: '', review: '' },

        { id: '24', status: 'tbr', collection: true, title: 'Get a Life Chloe Brown', author: 'Talia Hibbert', authGend: 'Female', authCoun: 'UK', age: 'Adult', primGenr: 'Contemporary', secoGenr: 'Romance', pages: 369, publYear: 2019, publisher: 'Hachette', format: 'Paperback', dateStar: '', dateFini: '', rating: '', review: '' },

        { id: '25', status: 'tbr', collection: true, title: 'Weird Woods: Tales From The Haunted Forests of Britain', author: 'Mult Auth', authGend: 'Multi Auth', authCoun: 'Multi Auth', age: 'Adult', primGenr: 'Horror', secoGenr: 'Fantasy', pages: 238, publYear: 2020, publisher: 'The British Library', format: 'Paperback', dateStar: '', dateFini: '', rating: '', review: '' },

        { id: '26', status: 'reading', collection: true, title: 'Lucy Undying', author: 'Kiersten White', authGend: 'Female', authCoun: 'USA', age: 'Adult', primGenr: 'Gothic', secoGenr: 'Romance', pages: 446, publYear: 2024, publisher: 'Penguin', format: 'Hardback', dateStar: '2024-10-07', dateFini: '', rating: '', review: '' },

        { id: '27', status: 'read', collection: false, title: 'Star Trek: Lower Decks', author: 'Ryan North, Illustrator: Chris Fengolio', authGend: 'Multi Auth', authCoun: 'USA', age: 'Adult', primGenr: 'Science Fiction', secoGenr: '', pages: 120, publYear: 2023, publisher: 'Idea & Design Works (IDW)', format: 'Graphic', dateStar: '2024-09-30', dateFini: '2024-09-29', rating: 10, review: '' }

        //{ id: '', status: '', collection: '', title: '', author: '', authGend: '', authCoun: '', age: '', primGenr: '', secoGenr: '', pages: '', publYear: '', publisher: '', format: '', dateStar: '', dateFini: '', rating: '', review: '' },
    ],

    tblCols: [
        { status: 'tbr', title: 'To Be Read', headings: { h0: 'Title', h1: 'Author', h2: 'Genre', h3: 'Age', h4: 'Format', h5: 'Pages', h6: 'Author Country', h7: 'Author Gender', h8: 'Publication Year', h9: 'Publisher', h10: 'Collection', h11: '' } },
        { status: 'reading', title: 'Currently Reading', headings: { h0: 'Title', h1: 'Author', h2: 'Genre', h3: 'Age', h4: 'Format', h5: 'Pages', h6: 'Author Country', h7: 'Author Gender', h8: 'Publication Year', h9: 'Publisher', h10: 'Collection', h11: 'Date Started', h12: '' } },
        { status: 'read', title: 'Read', headings: { h0: 'Title', h1: 'Author', h2: 'Genre', h3: 'Age', h4: 'Format', h5: 'Pages', h6: 'Author Country', h7: 'Author Gender', h8: 'Publication Year', h9: 'Publisher', h10: 'Collection', h11: 'Date Started', h12: 'Date Finished', h13: 'Rating', h14: 'Review', h15: '' } },
    ],

    //form entry holders
    newId: '',
    newStatus: '',
    newCollection: '',
    newTitle: '',
    newAuthor: '',
    newGender: '',
    newCountry: '',
    newAge: '',
    newPrimGenr: '',
    newSecoGenr: '',
    newPages: '',
    newYear: '',
    newPubl: '',
    newFormat: '',
    newDateStar: ''
    

  }),
   getters: {

   },
   //methods
   actions: {
    add() {
        this.books.push({
            id: this.newId,
            status: this.newStatus,
            collection: this.newCollection,
            title: this.newTitle,
            author: this.newAuthor,
            authGend: this.newGender,
            authCoun: this.newCountry,
            age: this.newAge,
            primGenr: this.newPrimGenr,
            secoGenr: this.newSecoGenr,
            pages: this.newPages,
            publYear: this.newYear,
            publisher: this.newPubl,
            format: this.newFormat,
            dateStar: this.newDateStar
            
            

        })
    }
   }
 })

