


const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// adding New Task using Enter
inputBox.addEventListener("keydown", function(e){
    if(e.key === "Enter"){
        addTask();
    }
})


function addTask(){
    if(inputBox.value === ''){
        alert("You Must Write Something!");
    }
    else{
        
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}




// to Handle checked - unchecked item & delete item
listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
})

// save items to local storage
// save data on adding new item - state change[from unchecked to checked or vice versa] - removing item
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showData();