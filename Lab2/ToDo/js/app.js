function addTask() {
    let input = document.querySelector('.input');
    let list = document.querySelector('.list'); 
    if(input.value == "") {
        alert("Enter the task");
    }

    else{
        let li = document.createElement('li');
            li.className = 'task';
            list.appendChild(li)
        let checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.className = 'checkbox';
            checkbox.addEventListener('change', checkTask);
        let text = document.createElement('div');
            text.textContent = input.value;
            input.value = '';
            text.className = 'text';
        let deleteButton = document.createElement('button');
            deleteButton.className = 'deleteButton';
            deleteButton.textContent = 'X';
            deleteButton.addEventListener('click', delTask);
        li.appendChild(checkbox);
        li.appendChild(text);
        li.appendChild(deleteButton);
    } 
}

function delTask({target}){
    target.closest('.task').remove();
}

function checkTask({target}){
    let text = target.closest('.task').querySelector('.text');
    text.classList.add('done');
    target.remove();
}
