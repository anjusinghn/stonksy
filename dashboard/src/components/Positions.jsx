import React from 'react';
import { positions } from '../data/data';

function Positions() {
    return ( 
        <div style={{
            display: 'flex',
            marginTop: '30px', // keep consistent with Menu + TopBar height
            padding: '0 24px',
        }}>

            {/* Right Side - Positions Table */}
            <div style={{ flex: 2 }}>
                <h3 style={{
                    fontSize: '20px',
                    fontWeight: '600',
                    marginBottom: '16px',
                    color: '#333'
                }}>
                    Positions ({positions.length})
                </h3>

                <div style={{
                    backgroundColor: '#fff',
                    borderRadius: '8px',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
                    padding: '16px',
                    overflowX: 'auto',
                }}>
                    <table style={{
                        width: '100%',
                        borderCollapse: 'collapse',
                        fontSize: '14px'
                    }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid #eee', textAlign: 'left' }}>
                                <th style={{ paddingBottom: '8px' }}>Instrument</th>
                                <th>Product</th>
                                <th>Quantity</th>
                                <th>Avg Cost</th>
                                <th>LTP</th>
                                <th>Cur. Val</th>
                                <th>P&L</th>
                                <th>Net Chg.</th>
                                <th>Day Chg.</th>
                            </tr>
                        </thead>
                        <tbody>
                            {positions.map((stock, index) => {
                                const curValue = stock.price * stock.qty;
                                const isProfit = curValue - stock.avg * stock.qty >= 0;
                                const profitColor = isProfit ? '#10b981' : '#ef4444';
                                const dayColor = stock.isLoss ? '#ef4444' : '#10b981';

                                return (
                                    <tr key={index} style={{ borderBottom: '1px solid #f5f5f5' }}>
                                        <td style={{ padding: '10px 0' }}>{stock.name}</td>
                                        <td>{stock.product}</td>
                                        <td>{stock.qty}</td>
                                        <td>{stock.avg.toFixed(2)}</td>
                                        <td>{stock.price.toFixed(2)}</td>
                                        <td>{curValue.toFixed(2)}</td>
                                        <td style={{ color: profitColor }}>
                                            {(curValue - stock.avg * stock.qty).toFixed(2)}
                                        </td>
                                        <td style={{ color: profitColor }}>{stock.net}</td>
                                        <td style={{ color: dayColor }}>{stock.day}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Positions;
