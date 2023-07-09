let myLibrary=[]
const container = document.querySelector('.container');
let bookCount=0;


function Book(title,author,pages,read){
    this.title = title;
    this.author=author;
    this.pages=pages;
    this.read = read;
    this.info = function(){
        if(this.read)
            return `${this.title} by ${this.author}, ${this.pages} pages, read`
        else 
            return `${this.title} by ${this.author}, ${this.pages} pages, not read yet`
    }
}
function addBookToLibrary(book){
    myLibrary.push(book);
    bookCount++;
}
function displayBooks(){
    let x=0;
    let y;
    if(bookCount<3)
        y=bookCount-1;
    else 
        y=2;
    
    for(let i=1;i<=bookCount;i+=3){
        const row = document.createElement('div');
        row.classList.add('row')
        row.classList.add('mb-3')


        for(let k=x;k<=y;k++){
            myLibrary[k].index=k;
            const outerCol = document.createElement('div');
            outerCol.classList.add('col-4');

            
            const card=document.createElement('div');
            card.classList.add('card');
            card.classList.add('bg-warning')
                const h5 = document.createElement('h5');
                h5.classList.add('card-title');
                h5.textContent = `Title :${myLibrary[k].title}`;
                card.appendChild(h5);

                // const p1 = document.createElement('p');
                // p1.classList.add('card-text');
                // p1.textContent = `Book index :${myLibrary[k].index}`;
                // card.appendChild(p1);

                const p2 = document.createElement('p');
                p2.classList.add('card-text');
                p2.textContent = `Author :${myLibrary[k].author}`;
                card.appendChild(p2);

                const p3 = document.createElement('p');
                p3.classList.add('card-text');
                p3.textContent = `Total pages :${myLibrary[k].pages}`;
                card.appendChild(p3);

                const p4 = document.createElement('p');
                p4.classList.add('card-text');
                p4.textContent = `Finished the book :${myLibrary[k].read}`;
                card.appendChild(p4);

                const button = document.createElement('button');
                button.classList.add('btn');
                button.classList.add('btn-danger');
                button.setAttribute('style','width:100px;margin:0 auto;');
                button.textContent = 'Delete';
                card.appendChild(button);
                button.addEventListener('click',function(e){
                    myLibrary.splice(myLibrary[k].index,1);
                    outerCol.remove();
                    bookCount--;
                })

            outerCol.appendChild(card);
            row.appendChild(outerCol);
        }
        x+=3;
        y+=3;
        if(y>=bookCount){
            y=bookCount-1;
        }
        container.appendChild(row);
    }
}

const b1 = new Book('Hobbit','JRR',145,true);
const b2 = new Book('It','King',165,false);
const b3 = new Book('Pride and prejudice','Jane Austen',230,true);
addBookToLibrary(b1);
addBookToLibrary(b2);
addBookToLibrary(b3);
displayBooks();

function openForm(){
    document.getElementById("myForm").style.display = "block";
}
function insertBook() {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById('exampleCheck1').checked;
    const newBook = new Book(title,author,pages,read);
    addBookToLibrary(newBook);
    container.textContent="";
    document.getElementById("myForm").style.display = "none";
    displayBooks();
} 

