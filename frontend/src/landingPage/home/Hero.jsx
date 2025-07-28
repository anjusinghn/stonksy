import React from 'react';

function Hero() {
    return (
        <div style={{
            background: 'linear-gradient(135deg, rgb(210 186 251) 0%,  rgb(192 227 255) 100%)',
            minHeight: '100vh',
            width: '100vw',
            margin: '0 -12px',
            padding: '0 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: "'Inter', sans-serif"
        }}>
            <div style={{
                textAlign: 'center',
                maxWidth: '800px',
                padding: '0 20px',
                marginBottom: '80px' // Pulls content up from absolute bottom
            }}>
                <h1 style={{
                        color: '#000',
                        fontWeight: '900',
                        fontSize: '3rem',
                        textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
                        lineHeight: '1.3',
                        marginTop: '50px',
                        marginBottom: '200px' // Added gap after h1
                    }}>
                       Invest smarter in stocks, commodities & funds
                    </h1>
                
                <h4 style={{
                    color: '#333',
                    fontWeight: '600',
                    fontSize: '1.8rem',
                    fontStyle: 'italic',
                    marginBottom: '1.5rem'
                }}>
                    <i>Trade Smarter, Not Harder</i>
                </h4>
                
                <h2 style={{
                    color: '#222',
                    fontWeight: '600',
                    fontSize: '2rem',
                    marginBottom: '1rem',
                    letterSpacing: '0.02em'
                }}>
                    Start Investing Today
                </h2>
                
                <button 
                    style={{
                        width: "220px",
                        padding: "16px",
                        backgroundColor: "#4772e7ff",
                        color: "white",
                        borderRadius: "50px",
                        fontWeight: "600",
                        border: "none",
                        fontSize: '1.1rem',
                        cursor: 'pointer',
                        boxShadow: '0 4px 15px rgba(62, 69, 237, 0.3)',
                        transition: 'all 0.3s ease',
                        letterSpacing: '0.05em'
                    }}
                    onMouseOver={(e) => {
                        e.target.style.opacity = "0.7";
                        e.target.style.transform = "translateY(-2px)";
                    }}
                    onMouseOut={(e) => {
                        e.target.style.opacity = "1";
                        e.target.style.transform = "translateY(0)";
                    }}
                >
                    SIGN UP NOW
                </button>
            </div>
        </div>
    );
}

export default Hero;