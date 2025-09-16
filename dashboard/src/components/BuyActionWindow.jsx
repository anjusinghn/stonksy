import React, { useState } from 'react';
import axios from 'axios';

const BuyActionWindow = ({ uid, onClose }) => { // Add onClose prop
    const [qty, setQty] = useState(1);
    const [price, setPrice] = useState(0.0);

    const handleBuy = () => {
        axios.post('http://localhost:3002/newOrder', {
            name: uid,
            qty: qty,
            price: price,
            mode: "BUY",
        })
        .then(() => {
            onClose(); // Close after successful API call
        })
        .catch((error) => {
            console.error('Order failed:', error);
            // Optional: show error message to user
        });
    };

    return (
        <div style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.3)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 999
        }}>
            <div style={{
                backgroundColor: '#fff',
                padding: '24px',
                borderRadius: '12px',
                width: '300px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
            }}>
                <h3 style={{ margin: 0, fontSize: '18px', color: '#333' }}>Buy {uid}</h3> {/* Show stock name */}

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontSize: '14px', color: '#555' }}>Quantity</label>
                    <input
                        type="number"
                        value={qty}
                        onChange={(e) => setQty(Number(e.target.value))}
                        placeholder="Enter quantity"
                        style={{
                            padding: '8px 12px',
                            borderRadius: '8px',
                            border: '1px solid #ccc',
                            outline: 'none',
                            fontSize: '14px'
                        }}
                    />

                    <label style={{ fontSize: '14px', color: '#555' }}>Price</label>
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(Number(e.target.value))}
                        placeholder="Enter price"
                        style={{
                            padding: '8px 12px',
                            borderRadius: '8px',
                            border: '1px solid #ccc',
                            outline: 'none',
                            fontSize: '14px'
                        }}
                    />
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
                    <button
                        onClick={onClose} // Now this will work
                        style={{
                            padding: '8px 16px',
                            backgroundColor: '#e5e7eb',
                            color: '#111',
                            border: 'none',
                            borderRadius: '8px',
                            cursor: 'pointer'
                        }}
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleBuy}
                        style={{
                            padding: '8px 16px',
                            backgroundColor: '#4772e7',
                            color: 'white',
                            border: 'none',
                            borderRadius: '8px',
                            cursor: 'pointer'
                        }}
                    >
                        Buy
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BuyActionWindow;