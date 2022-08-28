// creating variables

let AddTask = document.querySelector(".add-task");
let InputTask = document.querySelector(".input-task");
let TaskContainer = document.querySelector(".taskcontainer");

// adding click event listener on AddTask button

AddTask.addEventListener('click', function(){
    
    let Task = document.createElement('div');
    Task.classList.add('task');

    let li = document.createElement('li');
    li.innerText = `${InputTask.value}`;
    li.classList.add('list');

    let CheckButton = document.createElement("button");
    CheckButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    CheckButton.classList.add('checktask');

    let DeleteButton = document.createElement("button");
    DeleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    DeleteButton.classList.add('deletetask');

    let EditTask = document.createElement("button");
    EditTask.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
    EditTask.classList.add('editask');

    Task.appendChild(li);
    Task.appendChild(CheckButton);
    Task.appendChild(DeleteButton);
    Task.appendChild(EditTask);

    if(InputTask.value === ""){
        alert("Enter a Task");
    }
    else if(InputTask.value.length < 19) {
        TaskContainer.appendChild(Task);
    }
    else{
       
        alert("Task length is too big");
    }

    InputTask.value = "";

    CheckButton.addEventListener('click', function(){
       CheckButton.parentElement.style.textDecoration = "line-through";
    })

    DeleteButton.addEventListener('click', function(){
        Task.style.display = "none";
    })
    
    EditTask.addEventListener('click', function(){
        li.style.display = "none";
        let NewTask = document.createElement('input');

        NewTask.classList.add('newtask');
        Task.appendChild(NewTask);

        Task.style.flexDirection = "row-reverse";
    })
    


})