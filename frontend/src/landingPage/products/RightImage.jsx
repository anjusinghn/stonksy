import React from 'react';

function RightImage({ productName, productDescription, tryDemo, learnMore, googlePlay, appStore, iconType = 'analytics' }) {
    // Icon definitions
    const icons = {
        analytics: (
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 21H3V3" stroke="#0d6efd" strokeWidth="2" strokeLinecap="round"/>
                <path d="M6 15L10 9L14 13L18 7" stroke="#0d6efd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="18" cy="7" r="2" stroke="#0d6efd" strokeWidth="2"/>
                <circle cx="6" cy="15" r="2" stroke="#0d6efd" strokeWidth="2"/>
            </svg>
        ),
        portfolio: (
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 9H21V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V9Z" stroke="#0d6efd" strokeWidth="2"/>
                <path d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V9H3V5Z" stroke="#0d6efd" strokeWidth="2"/>
                <path d="M12 15L12 9" stroke="#0d6efd" strokeWidth="2" strokeLinecap="round"/>
                <path d="M16 15L16 11" stroke="#0d6efd" strokeWidth="2" strokeLinecap="round"/>
                <path d="M8 15L8 13" stroke="#0d6efd" strokeWidth="2" strokeLinecap="round"/>
            </svg>
        ),
        education: (
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 16V22L5 19L12 16Z" stroke="#0d6efd" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M12 16L19 19L12 22V16Z" stroke="#0d6efd" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M5 11V19" stroke="#0d6efd" strokeWidth="2"/>
                <path d="M19 11V19" stroke="#0d6efd" strokeWidth="2"/>
                <path d="M12 7L21 11L12 15L3 11L12 7Z" stroke="#0d6efd" strokeWidth="2" strokeLinejoin="round"/>
            </svg>
        )
    };

    return (
        <div className='container my-5'>
            <div className='row align-items-center'>
                {/* Content Column */}
                <div className="col-md-6 p-4 order-md-1 order-2">
                    <h1 style={{
                        fontWeight: 600,
                        color: '#1a1a1a',
                        marginBottom: '20px',
                        fontSize: '2rem'
                    }}>{productName}</h1>
                    
                    <p style={{
                        color: '#666',
                        lineHeight: 1.7,
                        marginBottom: '30px',
                        fontSize: '1.1rem'
                    }}>{productDescription}</p>
                    
                    <div className="d-flex gap-3 mb-4">
                        <a href={tryDemo} style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '10px 20px',
                            backgroundColor: '#0d6efd',
                            color: 'white',
                            borderRadius: '8px',
                            textDecoration: 'none',
                            fontWeight: 500,
                            fontSize: '1rem'
                        }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 5V19L19 12L8 5Z" fill="white"/>
                            </svg>
                            Try Demo
                        </a>
                        
                        <a href={learnMore} style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '10px 20px',
                            border: '1px solid #0d6efd',
                            color: '#0d6efd',
                            borderRadius: '8px',
                            textDecoration: 'none',
                            fontWeight: 500,
                            fontSize: '1rem'
                        }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 13V19C18 20.1046 17.1046 21 16 21H5C3.89543 21 3 20.1046 3 19V8C3 6.89543 3.89543 6 5 6H11" stroke="#0d6efd" strokeWidth="2" strokeLinecap="round"/>
                                <path d="M15 3H21V9" stroke="#0d6efd" strokeWidth="2" strokeLinecap="round"/>
                                <path d="M10 14L21 3" stroke="#0d6efd" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                            Learn More
                        </a>
                    </div>
                    
                    <div className="d-flex gap-4">
                        <a href={googlePlay} style={{ color: '#333' }}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 20.5V3.5C3 3.5 6 5 10 5C14 5 15 3.5 18 3.5C21 3.5 23 5.5 21 7.5C19 9.5 14 11.5 10 11.5C6 11.5 3 20.5 3 20.5Z" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M3 12C6 11.5 14 11.5 18 12C21.5 12.5 23 15 21 17C19 19 14 20.5 10 20.5C6 20.5 3 20.5 3 20.5" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </a>
                        <a href={appStore} style={{ color: '#333' }}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4Z" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Icon Column */}
                <div className="col-md-6 p-4 order-md-2 order-1">
                    <div style={{
                        backgroundColor: 'rgba(13, 110, 253, 0.05)',
                        borderRadius: '16px',
                        padding: '40px',
                        textAlign: 'center',
                        border: '1px solid rgba(13, 110, 253, 0.1)'
                    }}>
                        {icons[iconType] || icons.analytics}
                        <h3 style={{ 
                            color: '#333',
                            marginTop: '16px',
                            fontWeight: '500'
                        }}>Live Preview</h3>
                    </div>
                </div>
            </div>
            <br />
        </div>
    );
}

export default RightImage;