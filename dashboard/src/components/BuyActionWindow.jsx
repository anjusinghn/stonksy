import React, { useState } from 'react';

const BuyActionWindow = ({ onClose, onBuy }) => {
    const [qty, setQty] = useState('');
    const [price, setPrice] = useState('');

    const handleBuy = () => {
        if (qty && price) {
            onBuy({ qty: Number(qty), price: Number(price) });
            onClose();
        }
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
                <h3 style={{ margin: 0, fontSize: '18px', color: '#333' }}>Buy Stock</h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontSize: '14px', color: '#555' }}>Quantity</label>
                    <input
                        type="number"
                        value={qty}
                        onChange={(e) => setQty(e.target.value)}
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
                        onChange={(e) => setPrice(e.target.value)}
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
                        onClick={onClose}
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
