export enum timerState {
	Work,
	Rest,
	LongRest,
}

export interface ITimer {
	isTicking: boolean;
	timerMode: timerState;
}

export interface IPomodoro extends ITimer {
	percentage: number;
	minutes: number;
	seconds: number;
	modeTime: {
		[key in timerState]: number;
	};
}

export interface Task {
	id: number;
	taskName: string;
	pomosFinished: number;
	pomoTime: number;
	completed: boolean;
	editMode: boolean;
}
