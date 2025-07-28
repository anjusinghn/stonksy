import React from 'react';

function Hero() {
    return (
        <div>
            <div style={{
                background: 'linear-gradient(135deg, rgba(230, 230, 255, 0.5) 0%, rgba(220, 235, 255, 0.5) 100%)',
                padding: '80px 24px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: "'Inter', sans-serif"
            }}>
                <div style={{ textAlign: 'center', maxWidth: '800px', marginBottom: '24px' }}>
                    <h1 style={{
                        fontWeight: '600',
                        fontSize: '2.5rem',
                        letterSpacing: '-0.5px',
                        marginBottom: '0.5rem',
                        color: '#1a1a1a'
                    }}>Support Center</h1>
                    <p style={{
                        color: '#666',
                        fontSize: '1.1rem',
                        lineHeight: '1.6',
                        marginBottom: '0'
                    }}>Find answers to common questions about fees and charges</p>
                </div>

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '24px',
                    flexWrap: 'wrap',
                    marginBottom: '24px'
                }}>
                    {[
                        {text: 'Account opening', url: '/track-account' },
                        {text: 'Segment activation', url: '/segment-activation' },
                        {text: 'Margin details', url: '/margins' },
                        {text: 'Platform guides', url: '/user-manual' }
                    ].map((item, index) => (
                        <a key={index} href={item.url} style={{
                            display: 'flex',
                            alignItems: 'center',
                            textDecoration: 'none',
                            color: '#1a1a1a',
                            fontWeight: '500',
                            fontSize: '1rem'
                        }}>
                            <span style={{ marginRight: '8px' }}>{item.icon}</span>
                            {item.text}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Hero;