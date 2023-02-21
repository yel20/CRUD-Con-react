import { useState } from "react"
import FormEdit from "./FormEdit"
import TodoElement from "./TodoElement"


const Todo = ({todo, onUpdate,onDelete}) => {
    const [isEdit, setIsEdit] = useState(false)

   

  return (
    <div className="todo">
        {
           isEdit ?  <FormEdit todo={todo} setIsEdit={setIsEdit} onUpdate={onUpdate} /> : <TodoElement todo={todo} setIsEdit={setIsEdit} onDelete={onDelete} />
        }
    </div>
  )
}

export default Todo