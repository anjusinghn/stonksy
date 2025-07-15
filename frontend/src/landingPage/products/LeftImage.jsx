import React from 'react'

function LeftImage({ productName, productDescription, tryDemo, learnMore, googlePlay, appStore, icon }) {
    return (
        <div className='container my-5'>
            <div className='row align-items-center'>
                <div className="col-md-6 p-4">
                    <div style={{
                        backgroundColor: '#f8f9fa',
                        borderRadius: '16px',
                        padding: '40px',
                        textAlign: 'center'
                    }}>
                        {icon || ( // Fallback to default icon if none provided
                            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ margin: '0 auto 20px' }}>
                                <path d="M3 17L9 11L13 15L21 7" stroke="#0d6efd" strokeWidth="2" strokeLinecap="round" />
                                <path d="M3 14L9 8L13 12L21 4" stroke="#0d6efd" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
                            </svg>
                        )}
                        <h3 style={{ color: '#333' }}>Live Preview</h3>
                    </div>
                </div>

                {/* Content Column */}
                <div className="col-md-6 p-4">
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
                                <path d="M8 5V19L19 12L8 5Z" fill="white" />
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
                                <path d="M18 13V19C18 20.1046 17.1046 21 16 21H5C3.89543 21 3 20.1046 3 19V8C3 6.89543 3.89543 6 5 6H11" stroke="#0d6efd" strokeWidth="2" strokeLinecap="round" />
                                <path d="M15 3H21V9" stroke="#0d6efd" strokeWidth="2" strokeLinecap="round" />
                                <path d="M10 14L21 3" stroke="#0d6efd" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                            Learn More
                        </a>
                    </div>

                    <div className="d-flex gap-4">
                        <a href={googlePlay} style={{ color: '#333' }}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 20.5V3.5C3 3.5 6 5 10 5C14 5 15 3.5 18 3.5C21 3.5 23 5.5 21 7.5C19 9.5 14 11.5 10 11.5C6 11.5 3 20.5 3 20.5Z" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M3 12C6 11.5 14 11.5 18 12C21.5 12.5 23 15 21 17C19 19 14 20.5 10 20.5C6 20.5 3 20.5 3 20.5" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                        <a href={appStore} style={{ color: '#333' }}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4Z" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <br />
        </div>
    );
}

export default LeftImage;