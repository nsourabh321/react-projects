import React, { useState } from 'react';
const AddToDo = ({addToDo}) => {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Ttile and Description cannot be empty");
        }else{
        addToDo(title, desc);
        setTitle("");
        setDesc("");
        }
    }

    return (
        <div className='container my-3 ' >
            <h3 className='text-center '>Add  Items To ToDo </h3>

            <form onSubmit={submit}>

                <div className="mb-3">
                    <label htmlFor="title" className="form-label">ToDo Title:</label>
                    <input type="text" value={title} onChange={((e) => {
                        setTitle(e.target.value)
                    })}
                        className="form-control" id="title" />
                </div>

                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">ToDo description:</label>
                    <input type="text" value={desc} onChange={((e) => {
                        setDesc(e.target.value)
                    })}
                        className="form-control" id="desc" />
                </div>

                <button type="submit" className="btn btn-sm  btn-success">Add Todo</button>
            </form>
        </div>
    )
}

export default AddToDo
