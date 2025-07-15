import React from 'react'

function Brokerage() {
    return (
        <div className="container my-5 ">
            <div className="row justify-content-center ">


                <div className="col-md-4 p-4 text-center mt-3 mb-5">
                    <div className="display-4 fw-bold mb-3" style={{ color: '#0d6efd' }}>₹0</div>
                    <h3>Commission-Free Investing</h3>
                    <p className="text-muted">
                        All long-term equity investments (NSE, BSE) are completely free —
                        zero brokerage on delivery trades.
                    </p>
                </div>

                {/* Flat Fee */}
                <div className="col-md-4 p-4 text-center">
                    <div className="display-4 fw-bold mb-3" style={{ color: '#0d6efd' }}>₹20</div>
                    <h3>Ultra-Low Trading Fees</h3>
                    <p className="text-muted">
                        Just ₹20 per trade for intraday, F&O, and options — or 0.03%,
                        whichever is lower.
                    </p>
                </div>

                {/* Free MF */}
                <div className="col-md-4 p-4 text-center">
                    <div className="display-4 fw-bold mb-3" style={{ color: '#0d6efd' }}>₹0</div>
                    <h3>Direct Mutual Funds</h3>
                    <p className="text-muted">
                        Invest in direct mutual funds with no commission fees or
                        additional DP charges.
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Brokerage;