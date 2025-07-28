import React from 'react';

function Pricing() {
    return ( 
        <div className='container mt-5 py-5 my-4'> {/* Increased vertical padding */}
            <div className="row align-items-center">
                <div className="col-lg-5 mb-4 mb-lg-0"> {/* Added bottom margin on mobile */}
                    <h1 className="mb-4 fw-bold fs-2" style={{
                        fontWeight: 700,
                        letterSpacing: '0.05em',
                        color: '#333'
                    }}>TRANSPARENT PRICING</h1>
                    
                    <p className='fs-5 text-muted mb-4'> {/* Larger text with muted color */}
                        India's pioneer of discount broking with completely transparent, flat fees.
                    </p>
                    
                    <a href="#" className='d-inline-flex align-items-center text-decoration-none' 
                       style={{
                           color: '#4772e7ff',
                           fontWeight: '500',
                           transition: 'all 0.3s ease'
                       }}
                       onMouseEnter={e => e.currentTarget.style.transform = 'translateX(5px)'}
                       onMouseLeave={e => e.currentTarget.style.transform = 'translateX(0)'}>
                        See pricing &nbsp;
                        <i className="fa-solid fa-arrow-right fs-6"></i> {/* Smaller icon */}
                    </a>
                </div>
                
                <div className="col-lg-7">
                    <div className="row g-4"> {/* Added gap between columns */}
                        <div className="col-md p-4 border rounded-3" style={{ /* Rounded corners */
                            backgroundColor: 'rgba(255,255,255,0.8)',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                        }}>
                            <h1 className="mb-3 display-6" style={{color: "#4772e7ff"}}><b>$0</b></h1>
                            <p className='mb-0 text-muted'>Free account opening and direct mutual funds</p>
                        </div>
                        
                        <div className="col-md p-4 border rounded-3" style={{
                            backgroundColor: 'rgba(255,255,255,0.8)',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                        }}>
                            <h1 className="mb-3 display-6" style={{color: "#4772e7ff"}}><b>$20</b></h1>
                            <p className='mb-0 text-muted'>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;