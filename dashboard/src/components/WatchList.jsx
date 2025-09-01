import React, { useState } from 'react';
import { watchlist } from '../data/data';
import '../index.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Tooltip,Grow } from '@mui/material';

const WatchList = () => {
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
        </div>
    );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
    const [showWatchlistActions, setShowWatchlistActions] = useState(false);

    const handleMenuEnter = (e) => {
        setShowWatchlistActions(true);
    }

    const handleMouseExit = (e) => {
        setShowWatchlistActions(false);
    }
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
            {showWatchlistActions && <WatchListActions uid={stock.name}/>}
        </li>
    );    
};

const WatchListActions = ({uid}) => {
    return(
        <span className='actions'>
            <span>
                <Tooltip title="Buy (B)" placement='top' arrow TransitionComponent={Grow}>
                    <button>Buy</button>
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
