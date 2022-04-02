import React, { useState } from 'react'
import "./NewExpenseForm.css"

function NewExpenseForm(props) {
    function resetForm() {
        return {
            title: '',
            amount: "",
            date: '',
        }
    }
    const [form, setForm] = useState(resetForm())

    function formHandler(e) {
        setForm(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }

    function submitHandler(e) {
        e.preventDefault();
        props.collectData(form)
        setForm(resetForm())
    }
    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label >Title</label>
                    <input type="text" onChange={formHandler} name="title" value={form.title} placeholder="Title" />
                </div>
                <div className='new-expense__control'>
                    <label htmlFor="">Price</label>
                    <input type="number" onChange={formHandler} min={0.01} step="0.01" name="amount" value={form.amount} placeholder="0.00" />
                </div>
                <div className='new-expense__control'>
                    <label >Date</label>
                    <input type="date" onChange={formHandler} min="2019-01-01" max="2023-12-31" name="date" value={form.date} />
                </div>
                <div className='new-expense__actions'>
                    <button type='submit'>Submit</button>
                </div>
            </div>
        </form>
    )
}

export default NewExpenseForm