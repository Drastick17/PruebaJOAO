import { type Task } from '../store/taskStore'
import TaskComponent from './Task'

type TaskListProps = {
  tasks: Task[]
}

export default function TaskList({ tasks }: TaskListProps) {
  if (!tasks || tasks.length === 0)
    return (
      <div className='text-center text-gray-500 py-8'>
        <span
          role='img'
          aria-label='empty'
          className='text-4xl mb-2 block'>
          🗒️
        </span>
        <div>No hay tareas disponibles</div>
      </div>
    )

  return (
    <ul className='w-2xl'>
      {tasks.map((task) => (
        <TaskComponent
          key={task.id}
          {...task}
        />
      ))}
    </ul>
  )
}
