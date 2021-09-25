import React from 'react';
import './Investor.css';

const Investor = (props) => {
    const { name, age, networth, country, company, img } = props.investors;
    return (
        <div className="investor">
            <div>
                <div className="text-center mb-3">
                    <img className="investor-img" src={img} alt="" />
                </div>
                <div>
                    <h6>Name:{name}</h6>
                    <h6>Age:{age}</h6>
                    <h6>Company:{company}</h6>
                    <h6>Networth:{networth}</h6>
                    <h6>Country:{country}</h6>
                </div>
            </div>
        </div>
    );
};

export default Investor;