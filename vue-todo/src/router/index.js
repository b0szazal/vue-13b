import { createRouter, createWebHistory } from 'vue-router'
import TasksView from '../views/TasksView.vue'
import NewTaskView from '../views/NewTaskView.vue'
import EditTaskView from '../views/EditTaskView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/tasks',
      name: 'tasks',
      component: TasksView,
    },
    {
      path: '/newtask',
      name: 'new task',
      component: NewTaskView,
    },
    {
      path: '/edittask',
      name: 'edit task',
      component: EditTaskView,
    },
  ],
})

export default router
