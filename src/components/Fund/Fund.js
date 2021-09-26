import React from 'react';
import Info from '../Info/Info';
import './Fund.css';

const Fund = (props) => {
    console.log(props);
    const { fund } = props;
    let total = 0;
    for (const investor of fund) {
        total = total + investor.networth;
    }

    return (
        <div>
            <h4>Investors Selected: {props.fund.length}</h4>
            <br />
            <h5>Fund Gathered: ${total} </h5>
            <div>
                {
                    fund.map(singleInvestor => <Info key={singleInvestor.company}
                        info={singleInvestor.name}></Info>)
                }
            </div>
        </div>
    );
};

export default Fund;