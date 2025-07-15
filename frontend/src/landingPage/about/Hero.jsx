import React from 'react'

function Hero() {
    return (
        <div>
            {/* Title Section */}
            <div style={{
                background: 'linear-gradient(135deg, rgba(230, 230, 255, 0.5) 0%, rgba(220, 235, 255, 0.5) 100%)',
                padding: '100px 24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: "'Inter', sans-serif"
            }}>
                <div style={{ textAlign: 'center', maxWidth: '800px' }}>
                    <h1 style={{
                        fontSize: '2rem',
                        fontWeight: 500,
                        lineHeight: 1.3,
                        color: '#1a1a1a'
                    }}>
                        We pioneered <span style={{ fontWeight: 600 }}>commission-free trading</span> in India.
                        <br /> Now, we're revolutionizing it with crypto and AI.
                    </h1>
                </div>
            </div>

            {/* Two Columns */}
            <div style={{
                display: 'flex',
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '60px 20px',
                borderTop: '1px solid #f5f5f5'
            }}>
                {/* Left Column */}
                <div style={{
                    flex: 1,
                    padding: '0 40px 0 20px',
                    borderRight: '1px solid #f5f5f5'
                }}>
                    <p style={{
                        fontSize: '1rem',
                        lineHeight: 1.7,
                        color: '#333',
                        fontWeight: 400
                    }}>
                        <span style={{
                            display: 'block',
                            fontWeight: 500,
                            marginBottom: '16px',
                            fontSize: '1.1rem'
                        }}>Stonksy launched in 2020</span>
                        with one goal - to make investing accessible to everyone. Our name comes from "Stocks" meets "Sky" - representing limitless potential.

                        <br /><br />Today, our zero-commission model and AI-powered tools have made us the fastest growing trading platform in India.

                        <br /><br />Over <span style={{ fontWeight: 500 }}>2.5+ million users</span> trust Stonksy for stocks, crypto, and ETFs.
                    </p>
                </div>

                {/* Right Column */}
                <div style={{
                    flex: 1,
                    padding: '0 20px 0 40px'
                }}>
                    <p style={{
                        fontSize: '1rem',
                        lineHeight: 1.7,
                        color: '#333',
                        fontWeight: 400
                    }}>
                        <span style={{
                            display: 'block',
                            fontWeight: 500,
                            marginBottom: '16px',
                            fontSize: '1.1rem'
                        }}>Why we're different</span>
                        We built Stonksy because traditional brokers were too slow and expensive. Our technology gives you institutional-grade tools at retail prices.

                        <br /><br />From college students to seasoned traders, everyone gets the same powerful platform with no hidden fees.

                        <br /><br />
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Hero;