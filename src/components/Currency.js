import React, { useContext, useState } from 'react';
import { AppContext, CURRENCY_CONSTANT } from '../context/AppContext';



const Currency = () => {
    const [showDropdown, setShowDropDown] = useState(false)
    const { dispatch, currency } = useContext(AppContext);

    const handleChooseCurrency = (payload) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload,
        })

        setShowDropDown(false)
    }

    return (
        <div className="dropdown">
            <button 
            className="btn dropdown-toggle"
            style={{backgroundColor: '#94e499', border: 'none', color: '#fff'}}
            type="button" 
            data-toggle="dropdown" 
            aria-haspopup="true"
            onClick={() => setShowDropDown(!showDropdown)}>
                Currency ({`${currency.symbol} ${currency.label}`})
            </button>
            <div 
                className={`dropdown-menu ${!!showDropdown ? 'show' : ''}`}
                style={{backgroundColor: '#94e499', border: '1px solid #000'}}
                aria-labelledby="dropdownMenuButton">
                {Object.keys(CURRENCY_CONSTANT).map((key) => (
                    <a 
                        key={`${CURRENCY_CONSTANT[key].symbol}-${CURRENCY_CONSTANT[key].label}`}
                        className="dropdown-item"
                        href="#"
                        onClick={() => handleChooseCurrency(key)}>
                            {CURRENCY_CONSTANT[key].symbol} {CURRENCY_CONSTANT[key].label}
                    </a>
                ))}
            </div>
        </div>
    );
};
export default Currency;