import React, { useEffect, useState } from 'react';
import Fund from '../Fund/Fund';
import Investor from '../Investor/Investor';
import './Committee.css'
const Committee = () => {
    const [investors, setInvestors] = useState([]);
    const [fund, setFund] = useState([]);
    const [investorName, setInvestorName] = useState('');



    useEffect(() => {
        fetch('./members.json')
            .then(res => res.json())
            .then(data => setInvestors(data));
    }, []);

    const handleSelectedInvestors = (investor) => {
        const newFund = [...fund, investor];
        setFund(newFund);
        setInvestorName(investor.name)
    }
    return (

        <div className="committee mt-5">
            <div className="investor-container">
                <div className="investors mb-3">
                    {
                        investors.map(investor => <Investor
                            key={investor.company}
                            handleSelectedInvestors={handleSelectedInvestors}
                            investors={investor}></Investor>)
                    }
                </div>

            </div>
            <div className="selected-investors">
                <Fund fund={fund}></Fund>
            </div>

        </div>
    );
};

export default Committee;