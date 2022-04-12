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

class Store {
    static tableView(name,author,code){
        let htmlRow = `<tr>
            <td>${name}</td>
            <td>${author}</td>
            <td>${code}</td>
            <td><a href="#" class = "del">X</a></td>
            </tr>`;
        
        let table = document.querySelector('tbody');
        table.innerHTML += htmlRow;

    }
    static store(namee,author,code){

        let namme = localStorage.getItem('list');
        if(namme){
        }else{
            namme = JSON.stringify([]);
        }
        let mainList = JSON.parse(namme);
        let temp = [namee,author,code];
        mainList.push(temp);
        mainList = JSON.stringify(mainList);
        localStorage.setItem("list",mainList);
    }
}

// view data
let list = localStorage.getItem('list');
if(list){
    list = JSON.parse(list);

    for(let i = 0; i < list.length ;i++){
        let name = list[i][0],
            author = list[i][1],
            code = list[i][2];
        Store.tableView(name,author,code);
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
        console.log('fix')
        Store.store(name,author,code);

        Store.tableView(name,author,code);

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
        let delCode = e.target.parentElement.previousElementSibling.innerText;
        let list = localStorage.getItem('list');
        list = JSON.parse(list);
        for(let i = 0; i < list.length ;i++){
            let code = list[i][2];
            if(code === delCode){
                console.log(list,i);
                list.splice(i,1);
                list = JSON.stringify(list);
                localStorage.setItem('list',list);
            }

        }

        
    }
})
