import {ref, computed} from 'vue'
import {defineStore} from 'pinia'

export const useTasksStore = defineStore('tasks', () => {
    const tasks = ref([
        {
            id: 1,
            name: 'Task 1',
            description: `Description 1`,
            completed: false,
            deadline: '2025-05-01'
        },
        {
            id: 2,
            name: 'Task 2',
            description: `Description 2`,
            completed: false,
            deadline: '2025-05-02'
        },
        {
            id: 3,
            name: 'Task 3',
            description: `Description 3`,
            completed: false,
            deadline: '2025-05-03'
        }
    ])

    const taskToEdit = ref({
        id: 0,
        name: '',
        description: ``,
        completed: false,
        deadline: ''
    })

    function findTaskToEdit(id){
        taskToEdit.value = tasks.value.find(task => task.id === id)
    }

    
    function addTask(newTaskname, newTaskdescription, newTaskdeadline) {
        tasks.value.push({
            id: tasks.value[tasks.value.length-1].id+1,
            name: newTaskname || 'nincs név',
            description: newTaskdescription || 'üres leírás',
            completed: false,
            deadline: newTaskdeadline || 'nincs határidő'
        })
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


    return {tasks, taskToEdit, addTask, Complete, unComplete, findTaskToEdit}
})