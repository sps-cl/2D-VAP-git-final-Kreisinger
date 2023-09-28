const inputBox =document.getElementById("input-box");
const listContainer =document.getElementById("list-container");
removeTodo();
checking();

function addTodo(){
    if(inputBox.value === ''){
        alert("you must write someting!");
    } else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }   
    inputBox.value = "";
}

function checking(){
listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
}, false)
}



function removeTodo() {
    listContainer.addEventListener("click",function(e){
        if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
        }
    }, false)
}

