import { useState } from 'react'
import { useTaskStore } from '../store/taskStore'

export default function NewTaskInput() {
  const [description, setDescription] = useState('')
  const addNewTask = useTaskStore((state) => state.addTask)

  const addTask = () => {
    addNewTask(description)
    setDescription('')
  }

  return (
    <div className='mb-10 w-full md:w-2xl flex justify-center'>
      <input
        value={description}
        onChange={({ target }) => setDescription(target.value)}
        placeholder='Tarea 1'
        className='w-3/4 px-4 py-2 border-2 border-gray-500 focus:border-gray-500 text-gray-700 focus-visible:outline-0 rounded-sm'
        type='text'
      />
      <button
        disabled={!description.length}
        onClick={addTask}
        className='w-1/3 py-2.5 px-5 disabled:opacity-70 bg-green-500 text-white mx-4 rounded-sm hover:scale-105 duration-100 cursor-pointer'>
        Agregar
      </button>
    </div>
  )
}
