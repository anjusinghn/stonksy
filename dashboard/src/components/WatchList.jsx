import React, { useState } from 'react';
import { watchlist } from '../data/data';
import '../index.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Tooltip,Grow } from '@mui/material';
import BuyActionWindow from './BuyActionWindow';
import { DonoughtChart } from './DonoughtChart';

const WatchList = () => {

    const data = {
      labels: watchlist.map((subArray) => subArray["name"]),
      datasets: [
        {
          label: 'Price',
          data: watchlist.map((stock) => stock.price),
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };
    

    return (
        <div className="watchlist-container">
            <div className="search-container">
                <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search eg: infy, nifty fut weekly"
                    className="search"
                />
                <span className="counts">{watchlist.length}</span>
            </div>

            <ul className="list">
                {watchlist.map((stock, index) => (
                    <WatchListItem stock={stock} key={index} />
                ))}
            </ul>
            <DonoughtChart data={data}/>
        </div>
    );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
    const [showWatchlistActions, setShowWatchlistActions] = useState(false);
    const [showBuyWindow, setShowBuyWindow] = useState(false);

    const handleMenuEnter = (e) => {
        setShowWatchlistActions(true);
    }

    const handleMouseExit = (e) => {
        setShowWatchlistActions(false);
    }

    const handleBuyClick = () => {
        setShowBuyWindow(true);
    };

    const handleCloseBuyWindow = () => {
        setShowBuyWindow(false);
    };

    const handleBuy = (data) => {
        console.log('Buy order:', data);
        // Implement buy logic here
    };

    return (
        <li
            onMouseEnter= {handleMenuEnter}
            onMouseLeave={handleMouseExit}
        >
            <div className="item">
                <div className="item-left">
                    <p className={stock.isDown ? 'red' : 'green'}>
                        {stock.name}
                    </p>
                </div>
                <div className="item-right">
                    <span className="percent">{stock.percent}</span>
                    {stock.isDown ? (
                        <KeyboardArrowDownIcon className="down" />
                    ) : (
                        <KeyboardArrowUpIcon className="up" />
                    )}
                    <span className="price">{stock.price}</span>
                </div>
            </div>
            {showWatchlistActions && <WatchListActions uid={stock.name} onBuyClick={handleBuyClick} />}
            {showBuyWindow && <BuyActionWindow onClose={handleCloseBuyWindow} onBuy={handleBuy} />}
        </li>
    );    
};

const WatchListActions = ({uid, onBuyClick}) => {
    return(
        <span className='actions'>
            <span>
                <Tooltip title="Buy (B)" placement='top' arrow TransitionComponent={Grow}>
                    <button onClick={onBuyClick}>Buy</button>
                </Tooltip>
            </span>
            <span>
                <Tooltip title="Sell (S)" placement='top' arrow TransitionComponent={Grow}>
                    <button>Sell</button>
                </Tooltip>
            </span>
            <span>
                <Tooltip title="Analytics (A)" placement='top' arrow TransitionComponent={Grow}>
                    <button>Analytics</button>
                </Tooltip>
            </span>
            <span>
                <Tooltip title="More Options (M)" placement='top' arrow TransitionComponent={Grow}>
                    <button>More</button>
                </Tooltip>
            </span>
        </span>
    )
}
