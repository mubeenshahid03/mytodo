
let todos = []
let hurray=false;

const getid = (getfieldid) => {
    return document.getElementById("getfield")
}
function randomid() {
    return Math.random().toString(36).slice(2)
}
//login page

// let val=document.getElementById("firstname").innerHTML="hello"
// console.log(val)

const lo = () => {
    event.preventDefault()
    let title = document.getElementById("title").value
    let location = document.getElementById("location").value
    let description = document.getElementById("description").value
    title = title.trim()
    location = location.trim()
    description = description.trim()
hurray=true;


    if (title.length < 3) {
        alert("Please Enter Correct Title")
        return
    }
    if (location.length < 3) {
        alert("Please Enter Correct location")
        return
    }
    if (description.length < 3) {
        alert("Please Enter Correct description")
        return
    }
    let todo = {
        title,
        location,
        description,
    }
    todo.id = randomid()
    todo.date = new Date().getDate()

    const todos = JSON.parse(localStorage.getItem("todos")) || []
    todos.push(todo)
    localStorage.setItem("todos", JSON.stringify(todos))
    alert("A Todo Has Been Successfully Added!")
    document.getElementById("title").value = ""
    document.getElementById("location").value = ""
    document.getElementById("description").value = ""
    document.getElementById("please").innerHTML=""


    showoutput()




}
function showoutput() {
    const todos = JSON.parse(localStorage.getItem("todos")) || []
    if (!todos.length) {
        document.getElementById("subtab").innerHTML = "<h5>HURRAY! No task Available :)</h5>"
    }
    let starting = '<div class="table-responsive">   <table class="table">'
    let ending = '</table></div>'
    let head = '<thead><tr><th scope="col">#</th><th scope="col">Tite</th><th scope="col">Location</th><th scope="col">Description</th><th scope="col">Action</th>'
    let body = ""

    for (i = 0; i < todos.length; i++) {
        let todo = todos[i];
        //    body+='<tr><td scope="row">'+(i+1)+'</td><td scope="row">'+todos[i].title+'</td><td scope="row">'+todos[i].location+'</td><td scope="row">'+todos[i].description+'</td></tr>'
        // console.log(todo.id)
        body += `<tr><td scope="row">${i + 1}</td><td scope="row">${todos[i].title}</td><td scope="row">${todos[i].location}</td><td scope="row">${todos[i].description}</td><td><button id="bt" type="button" data-value="${todo.id}" onclick="deletetodo(event)" class="btn btn-danger btn-sm">Delete</button></td></tr>`
    }

    let show = starting + head + "<tbody>" + body + "</tbody>" + ending
    document.getElementById("subtab").innerHTML = show

}


const deletetodo = (event) => {
    console.log(event.target)
    let todoId = event.target.getAttribute('data-value')
    const todos = JSON.parse(localStorage.getItem("todos"));
    console.log(todoId)
    let todosafterdelete = todos.filter((todo) => {
        return todo.id !== todoId
    }

    )
    localStorage.setItem("todos", JSON.stringify(todosafterdelete));
    // alert("deleted successfully")
    showoutput()

    // console.log(todoId)
}

window.onload = showoutput()




setInterval(() => {
    let current = new Date()
    document.getElementById("timea").innerHTML = current
}, 1000)
    // setInterval(()=>{
    //     let current=new Date()
    //     let fc=current.getDay()
    //     let fb=current.getDay()
    //     let fk=current.getTime()
    //     let sum=`${fc} ${fb} ${fk}`
    //      document.getElementById("timec").innerHTML=sum
    //     },1000)




