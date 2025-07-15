import React from 'react'

function Universe() {
    return (
        <div className='container text-center mt-5'>
            <div className="row">
                <h1>The Stonksy Ecosystem</h1>
                <p>Powerful integrations to enhance your trading journey</p>
                <div className="col-4 p-3">
                    <img src="" alt="" />
                </div>
                <div className="col-4 p-3">
                    <img src="" alt="" />
                </div>
                <div className="col-4 p-3">
                    <img src="" alt="" />
                </div>
                <div style={{
                    textAlign: 'center',
                    marginBottom: '50px'
                }}>
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
        </div>
    );
}

export default Universe;