import { useState } from "react";

const FormEdit = ({todo,setIsEdit,onUpdate}) => {

    const [newValue, setNewValue] = useState(todo.title)

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const value = e.target.value
    setNewValue(value)
  }

const handleClick = () => {
    onUpdate(todo.id,newValue)
    setIsEdit(false)
}

  return (
    <form className="todoUpdateForm" onSubmit={handleSubmit}>
      <input type="text"  className="todoInputs" value={newValue} onChange={handleChange}/>
      <button type="submit" className="button" onClick={handleClick}>
        Update
      </button>
    </form>
  );
};

export default FormEdit;
