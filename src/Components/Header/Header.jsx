import React from 'react';
import './Header.css';


const getCurrency = ({value = 0, currency = "rub"}) => parseInt(value).toLocaleString('ru',{ style: 'currency', currency: currency, maximumFractionDigits: 0, minimumFractionDigits: 0 });

const Elem = ({name = "Баланс", value = 11111, currency = "rub", ml = false}) => {

    // Хз) в голову пока больше ничего не пришло
    const classes = `${ml ? "ml-md-3 " : ""}col-lg-2 col-md-4 py-3`;

    return (
        <div className={classes}>
        <span className="col-info">
            <div className="text-small">
                {name}
            </div>
            <div className="text-value">
                {getCurrency({value: value, currency: currency})}
            </div>
        </span>
        </div>
    );
};


const Header = ({ data }) => {
    return (
        <div className="container-fluid bg-light">
            <div className="container">
                {data && <div className="row main-header">
                    {data.balance && <Elem name="Баланс" value={data.balance} ml/> }
                    {data.next_payout && <Elem name="К выплате" value={data.next_payout}/> }
                </div>}
            </div>
        </div>
    );
};

export default Header;
