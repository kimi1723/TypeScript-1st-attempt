export type Category = 'general' | 'work' | 'hobby' | 'gym';

export interface Task {
	title: string;
	done: boolean;
	category?: Category;
}
