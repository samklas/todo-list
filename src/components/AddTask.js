import { useState } from "react"

const AddTask = ({ addTask }) => {
    const [text, setText] = useState('')
    const onSubmit = (e) => {
        e.preventDefault()
        if (!text) {
            alert('Please enter task')
        }
        else {
            addTask({ text })
            setText('')
        }
    }

    return (
        <form className="add-form">
            <div>
                <input type="text" id="field" value={text} onChange={(e) => setText(e.target.value)} placeholder="Add a new task..."></input>
                <input type="submit" value='Add' id="add" onClick={onSubmit}/>
            </div>
        </form>
    )
}

export default AddTask