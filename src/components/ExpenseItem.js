import React, { useContext } from 'react';
import { IconContext } from 'react-icons';
import { TiDelete } from 'react-icons/ti';
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import { AppContext } from '../context/AppContext';
const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);
    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };
    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });
    }
    return (
        
        <tr>
            <td>{props.name}</td>
            <td>{currency.symbol}{props.cost}</td>
            <IconContext.Provider value={{color: '#4fac5c'}}>
                <td><AiFillPlusCircle size='2em' onClick={event=> increaseAllocation(props.name)} /></td>
            </IconContext.Provider>
            <IconContext.Provider value={{color: '#b01e11'}}>
                <td><AiFillMinusCircle size='2em' onClick={event=> decreaseAllocation(props.name)} /></td>
            </IconContext.Provider>
            <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};
export default ExpenseItem;