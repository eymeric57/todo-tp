const monInput = document.querySelector("input");

const form = document.getElementById("form");
const todoList = document.getElementById("list");

function storeList() {
    window.localStorage.todoList = todoList.innerHTML; 
  }

  function getTodos() {
    todoList.innerHTML = window.localStorage.todoList;
  }

  getTodos();
 
 
  
  
 console.log(localStorage);

  
let todo = "";

monInput.addEventListener("input", (e) => {
  todo = e.target.value;
 
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (todo) {
    const data = {
      todo,
    };
    
    todoList.innerHTML += `<li> ${todo} </li>`;
    monInput.value = ''; 
    storeList();
}

});

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("checked")) {
    e.target.remove();
  } else {
    e.target.classList.add("checked");
  }
  storeList();
});


