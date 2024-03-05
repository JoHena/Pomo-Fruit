export enum timerState {
	Work,
	Rest,
}

export interface Task {
	id: number;
	taskName: string;
	pomosFinished?: number;
	pomoTime: number;
	completed: boolean;
	editMode: boolean;
}
