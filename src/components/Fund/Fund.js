import React from 'react';
import './Fund.css';

const Fund = (props) => {
    console.log(props);
    const { fund } = props;
    let total = 0;
    let name = fund.name;
    for (const investor of fund) {
        total = total + investor.networth;
    }

    return (
        <div>
            <h4>Investors Selected: {props.fund.length}</h4>
            <br />
            <h5>Fund Gathered: ${total} </h5>
            <h6>Investor Name: {name}</h6>
        </div>
    );
};

export default Fund;