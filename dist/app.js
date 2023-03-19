import { renderTasks } from './helpers/render-tasks.helper.js';
const addTaskButton = document.querySelector('.add-button');
const tasksList = document.querySelector('.tasks-list');
const tasks = [
	{ title: 'Wyrzucić śmieci', done: false },
	{ title: 'Siłka', done: true, category: 'gym' },
	{ title: 'Nakarmić koty', done: false, category: 'work' },
];
const addTask = e => {
	e.preventDefault();
	const task = document.querySelector('#task-name');
	const selectedRadioElement = document.querySelector('input[type="radio"]:checked');
	const selectedCategory = selectedRadioElement.value;
	console.log(selectedCategory);
	tasksList.innerHTML = '';
	tasks.push({ title: task.value, done: false, category: selectedCategory });
	task.value = '';
	renderTasks(tasks, tasksList);
};
renderTasks(tasks, tasksList);
addTaskButton.addEventListener('click', addTask);
