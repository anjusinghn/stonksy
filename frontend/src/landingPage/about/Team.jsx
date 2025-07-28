import React from 'react'

function Team() {
    return ( 
        <div style={{ backgroundColor: '#fafafa', paddingBottom: '100px' }}>
            {/* Title Section */}
            <div style={{
                padding: '80px 20px 40px',
                display: 'flex',
                justifyContent: 'center',
                fontFamily: "'Inter', sans-serif"
            }}>
                <div style={{ textAlign: 'center', maxWidth: '800px' }}>
                    <h1 style={{
                        fontWeight: 600,
                        fontSize: '2.5rem',
                        color: '#1a1a1a',
                        letterSpacing: '-0.5px',
                        marginBottom: '8px'
                    }}>
                        The Brain Behind Stonksy
                    </h1>
                    <div style={{
                        height: '3px',
                        width: '60px',
                        backgroundColor: '#1a1a1a',
                        margin: '0 auto'
                    }}></div>
                </div>
            </div>

            {/* 3-Column Profile Section */}
            <div style={{
                display: 'flex',
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '40px 20px',
                gap: '30px'
            }}>
                {/* Column 1 - Photo */}
                <div style={{
                    flex: 1,
                    textAlign: 'center'
                }}>
                    <img 
                        src="media/images/my.jpg" 
                        style={{
                            borderRadius: '100%',
                            width: '200px',
                            height: '200px',
                            objectFit: 'cover',
                            border: '1px solid #eee',
                            boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
                        }} 
                        alt="Anju Singh" 
                    />
                    <h4 style={{
                        marginTop: '24px',
                        fontWeight: 500,
                        fontSize: '1.25rem',
                        color: '#333'
                    }}>
                        Anju Singh
                    </h4>
                    <p style={{
                        color: '#666',
                        marginTop: '4px'
                    }}>
                        CS Student • DSA Enthusiast • Sleep Deprived
                    </p>
                </div>

                {/* Column 2 - The Confession */}
                <div style={{
                    flex: 1,
                    padding: '20px'
                }}>
                    <h3 style={{
                        fontWeight: 500,
                        marginBottom: '16px'
                    }}>
                        Full Disclosure
                    </h3>
                    <p style={{ lineHeight: 1.7 }}>
                        <span style={{ fontWeight: 500 }}>I'm not a finance expert.</span> In fact, I started this project mainly because:
                    </p>
                    <ul style={{
                        marginTop: '12px',
                        paddingLeft: '20px',
                        listStyleType: 'none'
                    }}>
                        <li style={{ marginBottom: '8px' }}>• Got bored solving DSA problems</li>
                        <li style={{ marginBottom: '8px' }}>• Wanted to play with stock charts</li>
                        <li>• Needed an excuse to drink more coffee</li>
                    </ul>
                    <p style={{ marginTop: '16px', fontStyle: 'italic' }}>
                        "It's not a bug, it's a... learning opportunity?"
                    </p>
                </div>

                {/* Column 3 - The Reality */}
                <div style={{
                    flex: 1,
                    padding: '20px'
                }}>
                    <h3 style={{
                        fontWeight: 500,
                        marginBottom: '16px'
                    }}>
                        The Real Motivation
                    </h3>
                    <p style={{ lineHeight: 1.7 }}>
                        Between classes and solving dsa, I needed a creative outlet. So I thought:
                    </p>
                    <ul style={{
                        marginTop: '12px',
                        paddingLeft: '20px',
                        listStyleType: 'none'
                    }}>
                        <li style={{ marginBottom: '8px' }}>• Why not learn React the hard way?</li>
                        <li style={{ marginBottom: '8px' }}>• How hard could stock APIs be?</li>
                        <li>• At least it's more fun than Leetcode</li>
                    </ul>
                    <div style={{
                        marginTop: '20px',
                        padding: '12px',
                        backgroundColor: '#f8f9fa',
                        borderRadius: '6px',
                        fontSize: '0.9rem'
                    }}>
                        Current Status: <span style={{ fontWeight: 500 }}>Regretting my life choices</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team;