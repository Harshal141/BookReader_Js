// classes

class UI {
    static message (text,color){
        let textBox = document.querySelector('#emailHelp');
        textBox.style.color = color;
        textBox.innerText = text;
        //timeout shit
        function remove(){
            textBox.innerText = '';
        }
        setTimeout(remove, 2000);

    }
};

class Book {
    constructor(name,author,code){
        this.name = name;
        this.author = author;
        this.code = code;
    }
}

// Main Function
let but = document.querySelector('.btn');

but.addEventListener('click',function(e) {

    // getting values
    let name = document.querySelector('#exampleInputEmail1').value,
        author = document.querySelector('#exampleInputPassword1').value,
        code = document.querySelector('#InputPassword1').value;

    // next move validation
    if(name === '' || author === '' || code === ''){
        UI.message('Enter Complete Data','red');
    }else{

        // creating book class
        let book = new Book(name,author,code);

        let htmlRow = `<tr>
            <td>${book.name}</td>
            <td>${book.author}</td>
            <td>${book.code}</td>
            <td><a href="#" class = "del">X</a></td>
            </tr>`;
        
        let table = document.querySelector('tbody');
        table.innerHTML += htmlRow;

        // data reset
        document.querySelector('#exampleInputEmail1').value = "";
        document.querySelector('#exampleInputPassword1').value = "";
        document.querySelector('#InputPassword1').value = "";

        UI.message('Data Entered Succesfuly','green');

        

    }

    e.preventDefault();
})

// removing rows

let parent = document.querySelector('tbody');

parent.addEventListener('click',function(e){
    if(e.target.className === 'del'){
        e.target.parentElement.parentElement.remove();
        UI.message('Book Removed','yellow');
    }
})