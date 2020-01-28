import React from 'react';
import './Partners.css';
import Icon from './Icon.svg'

const copyText = (event) => {

    const copyTextFrom = event.currentTarget.previousSibling;
    copyTextFrom.select();
    copyTextFrom.setSelectionRange(0, 99999);
    document.execCommand("copy");

};

const Partner = ({ title, description, link, promocode, idx }) => {

    return (
        <div className="card mb-4" key={idx}>
            <div className="card-body">
                <div className="row p-2">
                    <div className="col-lg-6 col-md-12">
                        <h4 className="card-title">{title}</h4>
                        <div className="text-muted mb-2">{description}</div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">

                        <div className="form-group input-group-lg myInput">
                            <label htmlFor={`promo_${idx}`}>Промокод</label>
                            <input type="text" className="form-control" id={`promo_${idx}`} value={promocode} readOnly/>
                            <span className="copy-code" onClick={copyText} name={`promo_${idx}`}><Icon width={14} /></span>
                        </div>


                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 col-btn">
                        <a href={link} className="btn btn-primary btn-block btn-lg">Получить бонус</a>
                    </div>
                </div>
                {/*<p className="card-text">With supporting text below as a natural lead-in to additional content.</p>*/}
            </div>
        </div>
    )
};


const Partners = ({data = []}) => data.map((res, idx) => Partner({...res, idx}));

export default Partners;
