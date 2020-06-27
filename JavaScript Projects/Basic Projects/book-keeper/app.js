//Book Constructor
function Book(title,author,isbn){
    this.title = title;
    this.author = author;
    this.isbn  = isbn;
}


//UI Constuctor
function UI(){}


//Add the Book
UI.prototype.addBookToList = function(book){
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
//Clear fields
UI.prototype.clearFields = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';

}

//Show alerts
UI.prototype.showAlert = function(msg,classname){
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

//Delete Book
UI.prototype.delteBook = function(target){
    if(target.className == 'delete'){
        target.parentElement.parentElement.remove();
    }
}




//Event Listeners
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
        ui.addBookToList(book);
        ui.clearFields();
    }
    e.preventDefault();
})

//Delete book from list

document.getElementById('book-list').addEventListener('click', function(e){
    
        const ui = new UI();

        ui.delteBook(e.target);
    
    e.preventDefault();
})
