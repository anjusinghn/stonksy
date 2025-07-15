import React from 'react'

function Hero() {
    return (
        <div >
            <div style={{
                background: 'linear-gradient(135deg, rgba(230, 230, 255, 0.5) 0%, rgba(220, 235, 255, 0.5) 100%)',
                padding: '80px 24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: "'Inter', sans-serif"
            }}>
                <div style={{ textAlign: 'center', maxWidth: '800px' }}>
                    <h1 style={{
                        fontWeight: '600',
                        letterSpacing: '-0.5px',
                        marginBottom: '1rem'
                    }}>Stonksy Trading Suite</h1>
                    <h4 className='mt-3 text-muted' style={{
                    fontWeight: '400',
                    lineHeight: '1.5'
                }}>Cutting-edge tools for modern investors</h4>

                <p className='mt-4' style={{ fontSize: '1.1rem' }}>
                    Explore our <a href="#" className='d-inline-flex align-items-center text-decoration-none'
                        style={{
                            color: '#4772e7ff',
                            fontWeight: '500',
                            transition: 'all 0.3s ease'
                        }} onMouseEnter={e => e.currentTarget.style.transform = 'translateX(5px)'}
                        onMouseLeave={e => e.currentTarget.style.transform = 'translateX(0)'}>
                        platform features &nbsp;
                        <i className="fa-solid fa-arrow-right fs-6"></i>
                    </a>
                </p>
                </div>
            </div>
        </div>
    );
}

export default Hero;