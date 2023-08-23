import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const BUDGET_LIMIT = 20000
const Budget = () => {
    const { dispatch, budget, totalExpenses, currency } = useContext(AppContext);

    const handleChangeBudget = (payload) => {
        let budgetValue = payload;
        if (payload > 20000) {
            alert(`The value cannot exceed ${currency.symbol}20.000.`);
            budgetValue = 20000
        }

        if (payload < totalExpenses) {
            alert(`The value cannot be lower than spended budget value.`);
            budgetValue = totalExpenses
        }
        
        dispatch({
            type: 'SET_BUDGET',
            payload: budgetValue
        })
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency.symbol}</span>
            <input
                required='required'
                type='number'
                id='budget-input'
                step='10'
                value={budget}
                style={{ marginLeft: '1rem' , size: 10}}
                onChange={(event) => handleChangeBudget(event.target.value)}>
            </input>
        </div>
    );
};
export default Budget;