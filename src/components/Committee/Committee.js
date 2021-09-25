import React, { useEffect, useState } from 'react';
import Investor from '../Investor/Investor';
import './Committee.css'
const Committee = () => {
    const [investors, setInvestors] = useState([]);
    useEffect(() => {
        fetch('./members.json')
            .then(res => res.json())
            .then(data => setInvestors(data));
    }, [])
    return (

        <div className="committee mt-5">
            <div className="investor-container">
                <div className="investors mb-3">
                    {
                        investors.map(investor => <Investor investors={investor}></Investor>)
                    }
                </div>

            </div>
            <div className="selected-investors">
                <h4>Investors Selected: </h4>
                <h5>Fund Gathered: </h5>
            </div>

        </div>
    );
};

export default Committee;