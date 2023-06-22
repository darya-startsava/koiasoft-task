import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

export interface TasksInterface {
    name: string;
    id: string;
}

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
    tasks: TasksInterface[] = [
        { name: 'task1', id: '1' },
        { name: 'task2', id: '2' }
    ];
    newTaskName = new FormControl('');
    isNewTask = false;
    isTaskEdit = false;
    editTaskName = new FormControl('');
    currentTaskEditedId = '';

    openNewTaskTitleInput() {
        this.isNewTask = true;
    }

    onCreateTaskClick(newTaskName: FormControl<string | null>) {
        if (newTaskName.value) {
            this.tasks.push({ name: newTaskName.value, id: new Date().getTime().toString() });
        }
        this.newTaskName.setValue('');
        this.isNewTask = false;
    }

    onEditTaskClick(task: TasksInterface) {
        this.isTaskEdit = true;
        this.editTaskName.setValue(task.name);
        this.currentTaskEditedId = task.id;
    }

    onChangeTaskClick(editTaskName: FormControl<string | null>) {
        if (!editTaskName.value) {
            this.onCancelEditingClick();
        } else {
            this.tasks = this.tasks.map(i => {
                if (i.id === this.currentTaskEditedId) {
                    return { ...i, ...{ name: editTaskName.value || '' } };
                }
                return i;
            });
            this.isTaskEdit = false;
            this.currentTaskEditedId = '';
        }
    }

    onCancelEditingClick() {
        this.isTaskEdit = false;
        this.currentTaskEditedId = '';
    }

    onDeleteTaskClick(id: string) {
        this.tasks = this.tasks.filter(i => i.id !== id);
    }
}
