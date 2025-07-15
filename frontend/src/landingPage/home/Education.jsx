import React from 'react';

function Education() {
    return ( 
        <div className='container mt-4 py-5 my-4'>
            <div className="row align-items-center">
                {/* Visual Element Column */}
                <div className="col-lg-6 mb-4 mb-lg-0">
                        <img 
                            src="media/images/index-education.svg" 
                            alt="Market Education" 
                            style={{
                                maxWidth: '80%',
                                maxHeight: '80%',
                                objectFit: 'contain'
                            }}
                        />
                </div>

                {/* Text Content Column */}
                <div className="col-lg-5 mb-4 mb-lg-0">
                    <h1 className="mb-4 fw-bold fs-2" style={{
                        fontWeight: 700,
                        letterSpacing: '0.05em',
                        color: '#333'
                    }}>YOUR MARKET EDUCATION HUB</h1>
                    
                    <p className='fs-5 text-muted mb-4'>
                        Master the markets with our comprehensive learning resources, from beginner fundamentals to advanced trading strategies.
                    </p>
                    
                    <a href="#" className='d-inline-flex align-items-center text-decoration-none' 
                       style={{
                           color: '#4772e7ff',
                           fontWeight: '500',
                           transition: 'all 0.3s ease'
                       }} onMouseEnter={e => e.currentTarget.style.transform = 'translateX(5px)'}
                       onMouseLeave={e => e.currentTarget.style.transform = 'translateX(0)'}>
                        Explore Learning Modules &nbsp;
                        <i className="fa-solid fa-arrow-right fs-6"></i>
                    </a>

                    <p className='fs-5 text-muted mb-4 mt-5'>
                        Join India's most vibrant trading community to discuss ideas, ask questions, and learn from experienced investors.
                    </p>
                    
                    <a href="#" className='d-inline-flex align-items-center text-decoration-none' 
                       style={{
                           color: '#4772e7ff',
                           fontWeight: '500',
                           transition: 'all 0.3s ease'
                       }} onMouseEnter={e => e.currentTarget.style.transform = 'translateX(5px)'}
                       onMouseLeave={e => e.currentTarget.style.transform = 'translateX(0)'}>
                        Join Trading Community &nbsp;
                        <i className="fa-solid fa-arrow-right fs-6"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Education;