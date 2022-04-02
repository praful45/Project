import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expenses(props) {
    return (
        <Card className="expenses">
            {props.items.map(exp => {
                return (
                    <ExpenseItem
                        title={exp.title}
                        amount={exp.amount}
                        date={exp.date}
                    />)
            })}
        </Card>
    );
}

export default Expenses;