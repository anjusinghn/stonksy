import React from 'react';
import Menu from './Menu';
import Holdings from './Holdings';

function TopBar() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            backgroundColor: '#ffffff',
            padding: '8px 24px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            position: 'fixed',
            top: 0,
            zIndex: 1000,
            height: '60px',
            alignItems: 'center',
            justifyContent: 'space-between',
        }}>
            {/* Left: Market Info */}
            <div style={{ display: 'flex', gap: '32px', flex: 2 }}>
                <div className="nifty" style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <p style={{ 
                        margin: 0,
                        fontSize: '14px',
                        fontWeight: '600',
                        color: '#333'
                    }}>NIFTY 50</p>
                    <p style={{ 
                        margin: 0,
                        fontSize: '14px',
                        fontWeight: '600',
                        color: '#10b981'
                    }}>22,402.40</p>
                    <p style={{ 
                        margin: 0,
                        fontSize: '12px',
                        color: '#10b981'
                    }}>↑ 0.45%</p>
                </div>
                
                <div className="sensex" style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <p style={{ 
                        margin: 0,
                        fontSize: '14px',
                        fontWeight: '600',
                        color: '#333'
                    }}>SENSEX</p>
                    <p style={{ 
                        margin: 0,
                        fontSize: '14px',
                        fontWeight: '600',
                        color: '#ef4444'
                    }}>73,502.64</p>
                    <p style={{ 
                        margin: 0,
                        fontSize: '12px',
                        color: '#ef4444'
                    }}>↓ 0.32%</p>
                </div>
            </div>

            {/* Right: Menu */}
            <div style={{ flex: 4 }}>
                <Menu />
            </div>
        </div>
    );
}

export default TopBar;
