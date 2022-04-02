import React from 'react'
import NewExpenseForm from './NewExpenseForm'
import "./NewExpense.css"

function NewExpense(props) {
    const collectData = (data) => {
        const modData = {
            ...data,
            date: new Date(data.date),
            id: Math.floor(Math.random() * 100)
        }
        props.finalData(modData)
    }
    return (
        <div className='new-expense'>
            <NewExpenseForm collectData={collectData} />
        </div>
    )
}

export default NewExpense