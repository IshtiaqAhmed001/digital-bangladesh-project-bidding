import React from 'react';
import './Fund.css';

const Fund = (props) => {
    const { fund } = props;
    let total = 0;
    for (const investor of fund) {
        total = total + investor.networth;
    }

    return (
        <div>
            <h4>Investors Selected: {props.fund.length}</h4>
            <h5>Fund Gathered: ${total} </h5>
            <h6>Investor Name: {props.fund.name}</h6>
        </div>
    );
};

export default Fund;