import React from 'react';

function OpenAccount() {
    return ( 
        <div style={{
            background: 'linear-gradient(135deg, rgba(230, 230, 255, 0.5) 0%, rgba(220, 235, 255, 0.5) 100%)',
            padding: '100px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: "'Inter', sans-serif"
        }}>
            <div style={{
                textAlign: 'center',
                maxWidth: '800px',
                padding: '0 20px'
            }}>
                <h4 style={{
                    color: '#333',
                    fontWeight: '600',
                    fontSize: '1.8rem',
                    fontStyle: 'italic',
                    marginBottom: '1.5rem',
                    letterSpacing: '0.03em'
                }}>
                    <i>Glitch-free, no fees ₹20 all-in. No hidden Ls</i>
                </h4>
                
                <h2 style={{
                    color: '#222',
                    fontWeight: '600',
                    fontSize: '2rem',
                    marginBottom: '2rem',
                    letterSpacing: '0.02em'
                }}>
                    Open a stonksy account
                </h2>
                
                <button 
                    style={{
                        width: "220px",
                        padding: "16px",
                        backgroundColor: "#4772e7",
                        color: "white",
                        borderRadius: "50px",
                        fontWeight: "600",
                        border: "none",
                        fontSize: '1.1rem',
                        cursor: 'pointer',
                        boxShadow: '0 4px 15px rgba(71, 114, 231, 0.3)',
                        transition: 'all 0.3s ease',
                        letterSpacing: '0.05em'
                    }}
                    onMouseOver={(e) => {
                        e.target.style.opacity = "0.9";
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

export default OpenAccount;