class Book {
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn  = isbn;
    }
}

class UI {
    addBookToList(book){
    //Create List
   const list = document.getElementById('book-list');

   //Create tr element
   const row = document.createElement('tr');

   //Insert cols
   row.innerHTML = `
   <td>${book.title}</td>
   <td>${book.author}</td>
   <td>${book.isbn}</td>
   <td><a href="#" class="delete">X</a></td>
   `
   //Append the row to DOM
   list.appendChild(row);

    }

    showAlert(msg,classname) {
        const div = document.createElement('div');

    div.className =  `alert ${classname}`;

    div.appendChild(document.createTextNode(msg));

    //Get the parent
    const container = document.querySelector('.container'),
         form = document.querySelector('#book-form');

     //Insert alert  
     container.insertBefore(div, form)  ;

     //Disappear after 3 seconds
     setTimeout(function(){document.querySelector('.alert').remove()}, 3000)
    }

    delteBook(target){
        if(target.className == 'delete'){
            target.parentElement.parentElement.remove();
        }
    }

    clearFields(){
        document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
    }


}

//Add to Local storage

class Store{
    static getBooks(){
        let books;
        if(localStorage.getItem('books') === null){
            books = [];
        }
        else{
            books = JSON.parse(localStorage.getItem('books'));
 
        }
 
        return books;
 
     }
 
     static displayBooks(){
         const books = Store.getBooks();

         books.forEach(function(book){
             const ui = new UI;
             //Add book to ui
             ui.addBookToList(book);
         })
 
     }
 
     static addBook(book){
         const books = Store.getBooks();
         books.push(book);
         localStorage.setItem('books', JSON.stringify(books))
 
 
     }
 
     static removeBooks(isbn){

        const books = Store.getBooks();
        
       books.forEach(function(book, index){
           if(book.isbn === isbn){
               books.splice(index, 1);
           }

            localStorage.setItem('books', JSON.stringify(books))
       })

        
 
     }
}




//Event Listeners
//DOM Load event
document.addEventListener('DOMContentLoaed', Store.displayBooks())

document.addEventListener('DOMContentLoaded', Store.getBooks)

document.getElementById('book-form').addEventListener('submit',function(e){
    //Get elements
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value;


    //Create a book object
     const book = new Book(title, author, isbn)

    //Call UI func
    const ui = new UI();  

    //Validate
    if(title === '' || author === '' || isbn === ''){
       ui.showAlert('Please fill in all details', 'error');
    }else{
        ui.showAlert('The book was added.', 'success');

        //Add the book to list
        ui.addBookToList(book);

        //Add book to Local storage
        Store.addBook(book);

        ui.clearFields();
    }
    e.preventDefault();
})

//Delete book from list

document.getElementById('book-list').addEventListener('click', function(e){
    
        const ui = new UI();

        //Delete the rom list
        ui.delteBook(e.target);

        //Remove From local Storage
        Store.removeBooks(e.target.parentElement.previousElementSibling.textContent);


    
    e.preventDefault();
})
