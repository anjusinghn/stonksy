import React from 'react';

function NotFound() {
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

                <h2 style={{
                    color: '#222',
                    fontWeight: '600',
                    fontSize: '2rem',
                    marginBottom: '2rem',
                    letterSpacing: '0.02em'
                }}>
                    404 Page Not Found
                </h2>

                <h4><i>The page you are looking for does not exist</i></h4>
            </div>
        </div>
    );
}

export default NotFound;