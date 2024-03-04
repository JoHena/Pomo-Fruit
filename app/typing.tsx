export enum timerState {
	Work,
	Rest,
}

export interface Task {
	id: number;
	taskName: string;
	pomodoroTime: number;
	completed: boolean;
	editMode: boolean;
}
