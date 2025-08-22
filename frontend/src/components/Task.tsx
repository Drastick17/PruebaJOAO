import { useTaskStore, type Task } from '../store/taskStore'
import clsx from 'clsx'

type TaskProps = Task & { key: string }

export default function Task({ completed, description, id }: TaskProps) {
  const toggleState = useTaskStore((state) => state.toggleState)
  const deleteTask = useTaskStore((state) => state.deleteTask)
  return (
    <li
      id={`item-${id}`}
      className="flex items-center justify-between p-4 mb-2 bg-white rounded shadow hover:bg-gray-50 transition"
    >
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => toggleState(id)}
          className="cursor-pointer form-checkbox h-5 w-5 text-blue-600"
        />
        <span
          className={clsx('text-lg text-pretty', {
            'line-through text-gray-400': completed,
            'text-gray-800': !completed,
          })}
        >
          {description}
        </span>
      </div>
      <button
        onClick={() => deleteTask(id)}
        className="cursor-pointer px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition"
      >
        Borrar
      </button>
    </li>
  )
}
