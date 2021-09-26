import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import './Investor.css';


const Investor = (props) => {

    const { name, age, networth, country, company, img } = props.investors;
    const checkIcon = <FontAwesomeIcon icon={faCheck} />

    return (
        <div className="investor">
            <div>
                <div className="text-center mb-3">
                    <img className="investor-img" src={img} alt="" />
                </div>
                <div className="investor-details">
                    <h5>Name: {name}</h5>
                    <h5>Age: {age}</h5>
                    <h5>Company: {company}</h5>
                    <h5>Networth: {networth}</h5>
                    <h5>Country: {country}</h5>
                </div>
                <div className="text-center">
                    <button onClick={() => props.handleSelectedInvestors(props.investors)}
                        className="add-investor-btn" >{checkIcon} Add Investor</button>
                </div>
            </div>
        </div>
    );
};

export default Investor;