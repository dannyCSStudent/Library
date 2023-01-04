let title;
let author;
let pageCount;
let rb_yes;
let rb_no;
let isRead;
let book;
let i = 0;

const bookOne = {
    t : "The Last King: Rome's Greatest Enemy",
    a : 'Michael Curtis Ford',
    pc : 384,
    r : true
}

const bookTwo = {
    t : 'I, Claudius',
    a : 'Robert Graves',
    pc : 384,
    r : true
}

const bookThree = {
    t : 'The Art of Thinking Clearly',
    a : 'Rolf Dobelli',
    pc : 384,
    r : false
}

// function Book (ti, au, paCo, re) {
//     this.title = ti;
//     this.author = au;
//     this.pageCount = paCo;
//     this.isRead = re;
// }
class Book {
    constructor (ti, au, paCo, re) {
        this.title = ti;
        this.author = au;
        this.pageCount = paCo;
        this.isRead = re;
    }
}



const loadBooks = () => {
    for (let j = 0; j < myLibrary.length; j++) {
        book = new Book(
            myLibrary[j].t, 
            myLibrary[j].a, 
            myLibrary[j].pc, 
            myLibrary[j].r
            );
        addBook(book);
    }
}

const removeBook = (bk) => {
    const bookToRemove = document.getElementById(bk);
    bookToRemove.parentNode.removeChild(bookToRemove);
}

const changeReadStatus = (bk, ti, au, paCo) => {
    removeBook(bk);
    book = new Book(ti, au, paCo, true);
    addBook(book);
}

let myLibrary = [bookOne, bookTwo, bookThree];

const addBook = (bk) => {
    let bkContainer;
    let fetch;
    let x;
    

    if (bk.isRead === true) {
        bkContainer = document.querySelector('.booksRead');
        fetch = document.querySelector('.booksRead').innerHTML; 
        x = `<button class="btn_delete" 
        onclick="removeBook('book${i}')">X</button>`;
    } else {
        bkContainer = document.querySelector('.notRead');
        fetch = document.querySelector('.notRead').innerHTML; 
        x = `<div class="button-container">
                <button class="btn_read" 
                onclick="changeReadStatus('book${i}', 
                '${bk.title}',
                '${bk.author}', 
                '${bk.pageCount}')">R</button>
                <button class="btn_delete" 
                onclick="removeBook('book${i}')">X</button>
        </div>`;
    }
    bkContainer.innerHTML = `<div class="book" id="book${i}">
        <p>${bk.title}</p>
        <p>By: ${bk.author}</p>
        <p>${bk.pageCount} pages</p>
        ${x}
    </div>` + fetch;
    i++;
}

const validate = () => {
    if (title == ''
    || author == '' 
    || pageCount == '' 
    || (rb_yes === false && rb_no === false)) {
        return false;
    }
    
    let result = (rb_yes === true) ? true : false;
    isRead = result;
    return true;
}

const getBookInfo = () => {
    title = document.getElementById('title').value;
    author = document.getElementById('author').value;
    pageCount = document.getElementById('pageCount').value;
    rb_yes = document.getElementById('yes').checked;
    rb_no = document.getElementById('no').checked;
}

const add = document.getElementById('add');
add.addEventListener('click', (e) => {
    e.preventDefault();
    getBookInfo();
    
    if (validate() === false) {
        alert('Fill in all fields to enter a new book.');
        return;
    }
    book = new Book(title, author, pageCount, isRead);
    addBook(book);
    document.getElementById('addForm').reset();
})

loadBooks();














































