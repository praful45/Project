import React from 'react'
import ExpenseItem from "./ExpenseItem"
import "./ExpenseList.css"

function ExpenseList(props) {
    return (props.items.length === 0 ? <h2 className='expenses-list__fallback'>No Expenses available</h2> :
        props.items.map(exp => {
            return (
                <ExpenseItem
                    key={exp.id}
                    title={exp.title}
                    amount={exp.amount}
                    date={exp.date}
                />)
        }))
}

export default ExpenseList