const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}


const book = getBook(3);
// const title = book.title;
// title;
book;
/*
//* Destructuring



//?? Destructuring Objects.
//?? Destructuring Objects.
//?? Destructuring Objects.

// Take the title  and author out of the book object

const title1 = book.title
const author1 = book.author
title1
author1

// Now, use destructuring to do the same thing ALL AT ONCE. names.
// MUST MATCH the key names of the objects.
//* We're simulating grabbing API information here! USE IT FOR MAPS!

const {title, author, genres, pages, publicationDate, hasMovieAdaptation} = book
console.log(title, author, genres, pages, publicationDate, hasMovieAdaptation)




//? Destructuring Arrays.
//? Destructuring Arrays.
//? Destructuring Arrays.

// Similar, but we rely on the order of the elements in the array.

const primaryGenre = genres[0]
const secondaryGenre = genres[1]
console.log(primaryGenre, secondaryGenre)

// Now, use destructuring to do the same thing ALL AT ONCE.
const [sciFi,funny] = genres
console.log(sciFi,funny)




//? Rest and Spread Operator
//? Rest and Spread Operator
//? Rest and Spread Operator

// Putting the 'rest' of an array into it's own genre, 'restOfGenres'.
// Must be the LAST ARGUMENT of the destructuring operation.

const [genre1, genre2, ...restOfGenres] = genres
restOfGenres

//* Create a new array with all the genres, but add a new one to the end.

const newGenres = [...genres,'epic fantasy'] 
// Does not matter where you place the spread operator.
newGenres

//* Add new properties (publicationDate) and update existing ones (pages), and create a new book object by destructuring.

const updatedBook = {...book, 
  moviePublicationDate: '2001-12-19', // Creting
  pages: 1210 // Updating
}
console.log(updatedBook)




//? Template Literals
//? Template Literals
//? Template Literals

// Creating a JS expression inside of a string.

//! From below:
function getYear(str) {
  return str.split("-")[0]
}

const summaryString = `${book.title} written by${book.author} contains ${book.pages} pages, published in ${getYear(publicationDate)}, and is made up of these genres: ${book.genres.slice(0, -1).join(', ')}, and ${book.genres.splice(-1)}. The book has ${hasMovieAdaptation ? '' :'not '}been adapted as a movie.`
console.log(summaryString)




//? Ternary Operator
//? Ternary Operator 
//? Ternary Operator 

// 3 operands -  'pages > 1000'. A conditional '?' "return if true", and a ':' "return if false"

const pagesRanges = pages > 1000 ? 'over a thousand' : 'less than 1000'
console.log(`The book has ${pagesRanges} pages.`)




//? Arrow Functions
//? Arrow Functions
//? Arrow Functions

// Automatically returns what's on the right side of the =>

function getYear(str) {
  return str.split("-")[0]
}
console.log(getYear(publicationDate))

const getYearX = (str) => str.split("-")[0]




//? Short Circuiting, with &&, ||, and ??
// &&: Returns the last value only if all are true

console.log(true && 'some stuff') //* No short circuiting here.
console.log(false && 'uh oh...')
console.log(hasMovieAdaptation && "this book has a movei")
console.log('joel' && 'the strING!')

// ||: Returns the 1st truthy value.
console.log(true || "some string")
console.log(false || "uh oh...")
console.log(book.translations.spanish)

//* Setting default values using ||

const spanishTranslation = book.translations.spanish || 'NOT TRANSLATED'
spanishTranslation


//% What about where we want 0 as true?
// console.log(book.reviews.librarything.reviewsCount)
// const countWrong = book.reviews.librarything.reviewsCount || 'no data'
// countWrong // But, we want 0!!!

//? For instances where we want 0 or undefined set as 'true' instead, we use the nullish coalescent operator '??'
//? Nullish Coalescent Operator ??
//? Nullish Coalescent Operator ??
//? Nullish Coalescent Operator ??

const count = book.reviews.librarything?.reviewsCount ?? 'no data'
console.log(count) // Now, we get 0 when we want 0!




//?? Optional Chaining 
//?? Optional Chaining 
//?? Optional Chaining 

// Using a ? to "keep going" only if what came immediately before it exists.

// When a value is 0/undefined, use nullish coalescing to provide the 0 instead of undefined.

function getTotalReviewCount(book) {
  const goodReads = book.reviews?.goodreads?.reviewsCount
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0
  return goodReads + librarything
}

console.log(getTotalReviewCount(book))
*/



//? Array Map Method
//? Array Map Method
//? Array Map Method

//* Map Method

// Similar to forEach but returns an array with all the results from each iteration.

const books = getBooks()

//* Theory example

const x = [1,2,3,4,5].map((el) => el * 2)
x

const bookTitles = books.map((book) => book.title)
bookTitles

