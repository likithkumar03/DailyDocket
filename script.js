

const form = document.querySelector("#new-task-form");
const input = document.querySelector("#new-task-input");
const Tasks = document.querySelector(".Tasks");

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const userdata = input.value;
    

    if(!userdata){
        alert("please give task before sumbiting");
        return;
 
    }

    const task = document.createElement('div');
    task.classList.add("task");
    task.classList.add("mb-3");
    
    const content = document.createElement('div');
    content.classList.add("content");

    
    const task_input = document.createElement("input");
    task_input.classList.add("text");
    task_input.classList.add("form-control");
    task_input.classList.add("mb-2");
    task_input.value = userdata;
    task_input.setAttribute("readonly","readonly");
    task_input.type="text";


    content.appendChild(task_input);
    task.appendChild(content);
    Tasks.appendChild(task);


    const action =  document.createElement("div")
    action.classList.add("actions");


    const task_edit = document.createElement("button");
    task_edit.classList.add("edit");
    task_edit.classList.add("btn");
    task_edit.classList.add("btn-warning");
    task_edit.innerHTML = "Edit";


    const task_delete = document.createElement("button");
    task_delete.classList.add("delete");
    task_delete.classList.add("btn");
    task_delete.classList.add("btn-danger");
    task_delete.classList.add("mx-2");
    task_delete.innerHTML = "Delete";
    
    action.appendChild(task_edit);
    action.appendChild(task_delete);
    task.appendChild(action);

    input.value = "";


    // edit user data

    task_edit.addEventListener('click', ()=>{
        if(task_edit.innerHTML =="Edit"){
            task_input.removeAttribute("readonly");
            task_edit.innerHTML = "Save";
            task_input.focus();
        }
        else{
            task_input.setAttribute("readonly","readonly");
            task_edit.innerHTML = "Edit";

        }
    })

    // delete user data

    task_delete.addEventListener("click",()=>{
        Tasks.removeChild(task);
    })



});

