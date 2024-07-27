// Write your code here
import './index.css'

const TodoItem = props => {
  const {data, onDelete} = props
  const {id, title} = data

  const handleDelete = () => {
    onDelete(id)
  }

  return (
    <div className="btn-container">
      <p className="title-heading">{title}</p>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  )
}

export default TodoItem
