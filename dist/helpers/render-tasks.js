export const renderTasks = (tasks, tasksList) => {
    tasks.forEach((task, index) => {
        const listElement = document.createElement('li');
        const labelElement = document.createElement('label');
        const checkboxElement = document.createElement('input');
        const id = `task-${index}`;
        if (task.category) {
            listElement.classList.add(task.category);
        }
        labelElement.textContent = task.title;
        labelElement.setAttribute('for', id);
        checkboxElement.type = 'checkbox';
        checkboxElement.checked = task.done;
        checkboxElement.id = id;
        checkboxElement.addEventListener('change', () => {
            task.done = !task.done;
        });
        listElement.append(labelElement);
        listElement.append(checkboxElement);
        tasksList.append(listElement);
    });
};
