const taskInp = document.getElementById('task-input');
const addButton = document.getElementById('add-button');
const taskList = document.getElementById('task-list');

addButton.addEventListener('click' , function(){

    const taskTest = taskInp.value.trim();

    if(taskTest !== ""){

        const listItem = document.createElement('li');

        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskTest;
        taskSpan.classList.add('task-text');

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');
        listItem.appendChild(taskSpan);
        listItem.appendChild(deleteButton);

        taskList.appendChild(listItem);

        taskInp.value="";
    }
});

taskList.addEventListener('click' , function(event){
    
    if(event.target.classList.contains('delete-button')){

        const listItem = event.target.parentNode;
        taskList.removeChild(listItem);
    }
});