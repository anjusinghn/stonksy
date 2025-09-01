import React from 'react'
import { Routes, Route } from 'react-router-dom';
import WatchList from './WatchList';
import Summary from './Summary';
import Orders from './Orders';
import Holdings from './Holdings';
import Positions from './Positions';
import Funds from './Funds';
import Apps from './Apps';
import BuyActionWindow from './BuyActionWindow';

function Dashboard() {
    return ( 
        <div className="dashboard-container"> {/* spelling fixed */}
            <WatchList />
            {/* <BuyActionWindow /> */}
            <div className="dashboard-content">
                <Routes>
                    <Route path="/" element={<Summary />} />
                    <Route path="/dashboard" element={<Summary />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/holdings" element={<Holdings />} />
                    <Route path='/positions' element={<Positions />} />
                    <Route path="/funds" element={<Funds />} />
                    <Route path="/apps" element={<Apps />} />
                </Routes>
            </div>
        </div>
     );
}

export default Dashboard;
