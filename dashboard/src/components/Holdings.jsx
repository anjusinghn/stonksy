import React from 'react';
import { holdings } from '../data/data';

function Holdings() {
    return (
        <div style={{
            display: 'flex',
            marginTop: '30px',  // push below topbar/menu
            padding: '0 24px',
        }}>

            {/* Right Side - Holdings */}
            <div style={{ flex: 2 }}>
                <h3 style={{
                    fontSize: '20px',
                    fontWeight: '600',
                    marginBottom: '16px',
                    color: '#333'
                }}>
                    Holdings ({holdings.length})
                </h3>

                <div style={{
                    backgroundColor: '#fff',
                    borderRadius: '8px',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
                    padding: '10px',
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
                                <th>Quantity</th>
                                <th>Avg Cost</th>
                                <th>LTP</th>
                                <th>Cur. val</th>
                                <th>P&L</th>
                                <th>Net chg.</th>
                                <th>Day chg.</th>
                            </tr>
                        </thead>
                        <tbody>
                            {holdings.map((stock, index) => {
                                const curValue = stock.price * stock.qty;
                                const isProfit = curValue - stock.avg * stock.qty >= 0;
                                const profitColor = isProfit ? '#10b981' : '#ef4444'; // green or red
                                const dayColor = stock.isLoss ? '#ef4444' : '#10b981';

                                return (
                                    <tr key={index} style={{ borderBottom: '1px solid #f5f5f5' }}>
                                        <td style={{ padding: '10px 0' }}>{stock.name}</td>
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

export default Holdings;
