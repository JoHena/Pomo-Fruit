import React from "react";
import {
	SortableContext,
	verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import {
	DndContext,
	PointerSensor,
	TouchSensor,
	closestCorners,
	useSensor,
	useSensors,
} from "@dnd-kit/core";
import { Task } from "../typing";
import { TaskCard } from "./Tasks/TaskCard";
import { useAppDispatch } from "../redux/store";
import { changePosition } from "../redux/features/taskSlice";
import { TaskForm } from "./Tasks/TaskForm";

interface ISortableList {
	tasks: Task[];
}

export function SortableList({ tasks }: ISortableList) {
	const dispatch = useAppDispatch();

	const handleDragEnd = (event: any) => {
		const { active, over } = event;
		if (active.id === over.id) return;
		dispatch(changePosition({ oldTaskID: active.id, newTaskID: over.id }));
	};

	const sensors = useSensors(
		useSensor(PointerSensor, {
			activationConstraint: {
				distance: 1,
			},
		}),
		useSensor(TouchSensor),
	);

	return (
		<ul className="flex w-full flex-col gap-5">
			<DndContext
				collisionDetection={closestCorners}
				onDragEnd={handleDragEnd}
				sensors={sensors}
			>
				<SortableContext items={tasks} strategy={verticalListSortingStrategy}>
					{tasks.map((task, index) => (
						<TaskCard
							key={index}
							task={task}
							taskForm={<TaskForm task={task} />}
						/>
					))}
				</SortableContext>
			</DndContext>
		</ul>
	);
}
