import { create } from 'zustand'

export type Task = {
  id: string
  description: string
  completed: boolean
}

interface ITaskState {
  tasks: Task[]
  loadTasks: (tasks: Task[]) => void
  addTask: (description: string) => void
  deleteTask: (id: string) => void
  toggleState: (id: string) => void
}

export const useTaskStore = create<ITaskState>()((set) => ({
  tasks: [],
  loadTasks: (tasks) =>
    set((state) => ({
      ...state,
      tasks
    })),
  addTask: (description) =>
    set((state) => {
      const newTask: Task = {
        id: Math.random().toString(36).substr(2, 9), // randomId
        description,
        completed: false
      }
      return { tasks: [newTask, ...state.tasks] }
    }),
  deleteTask: (id) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id)
    })),
  toggleState: (id) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    }))
}))
