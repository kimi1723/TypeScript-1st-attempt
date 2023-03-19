import { Category, Task } from './types/types';
import { renderTasks } from './helpers/render-tasks.helper.js';

const addTaskButton: HTMLButtonElement = document.querySelector('.add-button');
const tasksList: HTMLElement = document.querySelector('.tasks-list');

const tasks: Task[] = [
	{ title: 'Wyrzucić śmieci', done: false },
	{ title: 'Siłka', done: true, category: 'gym' },
	{ title: 'Nakarmić koty', done: false, category: 'work' },
];

const addTask = (e: Event) => {
	e.preventDefault();

	const task: HTMLInputElement = document.querySelector('#task-name');
	const selectedRadioElement: HTMLInputElement = document.querySelector('input[type="radio"]:checked');
	const selectedCategory: Category = selectedRadioElement.value as Category;
	console.log(selectedCategory);

	tasksList.innerHTML = '';
	tasks.push({ title: task.value, done: false, category: selectedCategory });

	task.value = '';
	renderTasks(tasks, tasksList);
};

renderTasks(tasks, tasksList);
addTaskButton.addEventListener('click', addTask);
