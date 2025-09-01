import React from "react";

const Summary = () => {
  return (
    <div className="p-4" style={{ fontFamily: "'Inter', sans-serif", color: '#333' }}>
      {/* Header */}
      <div className="username mb-4">
        <h6 className="fw-medium mb-3" style={{ fontSize: '1.4rem', letterSpacing: '0.02em' }}>Hi, User</h6>
        <hr style={{ borderColor: '#e5e5e5', opacity: 0.5 }} />
      </div>

      {/* Equity Section */}
      <div className="section mb-4">
        <div className="mb-3">
          <p className="text-secondary mb-0" style={{ fontSize: '0.9rem', fontWeight: '500' }}>Equity</p>
        </div>

        <div className="data">
          <div className="first mb-3">
            <h3 className="fw-bold mb-1" style={{ fontSize: '1.8rem' }}>3.74k</h3>
            <p className="text-secondary" style={{ fontSize: '0.85rem' }}>Margin available</p>
          </div>
          
          <hr style={{ borderColor: '#f0f0f0', margin: '1rem 0' }} />

          <div className="second">
            <div className="d-flex justify-content-between mb-2">
              <span className="text-secondary" style={{ fontSize: '0.85rem' }}>Margins used</span>
              <span className="fw-medium">0</span>
            </div>
            <div className="d-flex justify-content-between">
              <span className="text-secondary" style={{ fontSize: '0.85rem' }}>Opening balance</span>
              <span className="fw-medium">3.74k</span>
            </div>
          </div>
        </div>
        <hr style={{ borderColor: '#e5e5e5', opacity: 0.5, marginTop: '1.5rem' }} />
      </div>

      {/* Holdings Section */}
      <div className="section">
        <div className="mb-3">
          <p className="text-secondary mb-0" style={{ fontSize: '0.9rem', fontWeight: '500' }}>Holdings (13)</p>
        </div>

        <div className="data">
          <div className="first mb-3">
            <h3 className="fw-bold mb-1" style={{ fontSize: '1.8rem', color: '#16a34a' }}>
              1.55k <small style={{ fontSize: '0.9rem', color: '#16a34a' }}>+5.20%</small>
            </h3>
            <p className="text-secondary" style={{ fontSize: '0.85rem' }}>P&L</p>
          </div>
          
          <hr style={{ borderColor: '#f0f0f0', margin: '1rem 0' }} />

          <div className="second">
            <div className="d-flex justify-content-between mb-2">
              <span className="text-secondary" style={{ fontSize: '0.85rem' }}>Current Value</span>
              <span className="fw-medium">31.43k</span>
            </div>
            <div className="d-flex justify-content-between">
              <span className="text-secondary" style={{ fontSize: '0.85rem' }}>Investment</span>
              <span className="fw-medium">29.88k</span>
            </div>
          </div>
        </div>
        <hr style={{ borderColor: '#e5e5e5', opacity: 0.5, marginTop: '1.5rem' }} />
      </div>
    </div>
  );
};

export default Summary;