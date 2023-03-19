import { Task } from '../types/types';

export const renderTasks = (tasks: Task[], tasksList: HTMLElement) => {
	tasks.forEach((task, index) => {
		const listElement: HTMLElement = document.createElement('li');
		const labelElement: HTMLLabelElement = document.createElement('label');
		const checkboxElement: HTMLInputElement = document.createElement('input');
		const id: string = `task-${index}`;

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
