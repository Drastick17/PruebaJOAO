/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect } from 'react'
import NewTaskInput from './components/NewTaskInput'
import TaskList from './components/TaskList'
import { useTaskStore } from './store/taskStore'
import useLocalStorage from './hooks/useLocalStorage'

function App() {
  const tasks = useTaskStore((state) => state.tasks)
  const loadTasks = useTaskStore((state) => state.loadTasks)
  const [savedTasks, setSavedTasks] = useLocalStorage('tasks', [])

  useEffect(() => {
    loadTasks(savedTasks)
  }, [])

  useEffect(() => {
    setSavedTasks(tasks)
  }, [tasks])

  return (
    <main className='flex flex-col justify-start items-center px-10 py-20 min-h-screen bg-slate-100'>
      <h1 className='text-5xl md:text-7xl my-10'>Lista de Tareas</h1>
      <NewTaskInput />
      <TaskList tasks={tasks} />
    </main>
  )
}

export default App
