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
                    }}>Pricing</h1>
                    <h4 className='mt-3 text-muted' style={{
                        fontWeight: '400',
                        lineHeight: '1.5'
                    }}>List of all charges and taxes</h4>

                </div>
            </div>
        </div>
    );
}

export default Hero;