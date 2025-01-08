import {ref, computed} from 'vue'
import {defineStore} from 'pinia'

export const useTasksStore = defineStore('tasks', () => {
    const tasks = ref([
        {
            id: 1,
            name: 'Task 1',
            description: 'Description 1',
            completed: false,
            deadline: new Date('2025-05-01') 
        },
        {
            id: 2,
            name: 'Task 2',
            description: 'Description 2',
            completed: false,
            deadline: new Date('2025-05-02') 
        },
        {
            id: 3,
            name: 'Task 3',
            description: 'Description 3',
            completed: false,
            deadline: new Date('2025-05-03') 
        }
    ])
    
    function addTask(newTask) {
        tasks.value.push(newTask)
    }
    
    function editTask(editTask) {
        tasks.value.find(task => task.id === editTask.id)=editTask
    }

    function Complete(id){
        let ctask = tasks.value.find(task => task.id === id)
        if(!ctask.completed){
            ctask.completed = true
        }
        else{
            removeTask(id)
        }
    }

    function unComplete(id){
        tasks.value.find(task => task.id === id).completed=false
    }

    function removeTask(id){
        tasks.value = tasks.value.filter(task => task.id !== id)
    }

    return {tasks, addTask, editTask, Complete, unComplete}
})