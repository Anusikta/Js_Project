let todos = [];
let main = document.getElementById("main");

async function fetchData() {
    try {
        // const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        // const data = await response.json();
        // return data.map(todo => todo.title);
        const res = fetch("https://jsonplaceholder.typicode.com/todos");
        res.then(response=>{
            response.json().then(data=>{
                console.log({data})
            })
        })
       console.log({res})
        
    } catch(e) {
        console.error("Error",e);
        return [];
    }
}

async function add() {
    let val = document.getElementById("input").value;
    todos.push(val);
    console.log(todos);
    const data = await fetchData();
    todos = todos.concat(data);
    document.getElementById("main").innerHTML = "";
    appendData(todos);

}

function appendData(arr) {
    arr.forEach(element => {
        let para = document.createElement("p");
        para.innerText = element;
        main.append(para);

    });
}