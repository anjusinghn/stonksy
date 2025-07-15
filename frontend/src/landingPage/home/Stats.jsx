import React from 'react';

function Stats() {
    return (
        <div className='container py-5'>
            <div className="row">
                {/* Left Column - Cards */}
                <div className="col-lg-6">
                    <h1 className="mb-4 fw-bold fs-2" style={{
                        fontWeight: 700,
                        letterSpacing: '0.05em',
                        color: '#333'
                    }}>TRUST WITH CONFIDENCE</h1>

                    <div className="card mb-4 border-0" style={{
                        background: 'linear-gradient(135deg, rgba(210, 186, 251, 0.7) 0%, rgba(192, 227, 255, 0.7) 100%)',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                        borderRadius: '12px'
                    }}>
                        <div className="card-body">
                            <h2 className="card-title h4" style={{ color: '#4772e7ff' }}>Customer-first always</h2>
                            <p className="card-text text-muted">
                                That's why 1.6+ crore customers trust us with ~ ₹6 lakh crores of equity investments
                                and contribute to 15% of daily retail exchange volumes in India.
                            </p>
                        </div>
                    </div>

                    <div className="card mb-4 border-0" style={{
                        background: 'linear-gradient(135deg, rgba(210, 186, 251, 0.7) 0%, rgba(192, 227, 255, 0.7) 100%)',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                        borderRadius: '12px'
                    }}>
                        <div className="card-body">
                            <h2 className="card-title h4" style={{ color: '#4772e7ff' }}>No spam or gimmicks</h2>
                            <p className="card-text text-muted">
                                No gimmicks, spam, or annoying push notifications. High quality apps that you use
                                at your pace, the way you like.
                            </p>
                        </div>
                    </div>

                    <div className="card mb-4 border-0" style={{
                        background: 'linear-gradient(135deg, rgba(210, 186, 251, 0.7) 0%, rgba(192, 227, 255, 0.7) 100%)',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                        borderRadius: '12px'
                    }}>
                        <div className="card-body">
                            <h2 className="card-title h4" style={{ color: '#4772e7ff' }}>The YOLO Universe</h2>
                            <p className="card-text text-muted">
                                Not just an app, but a whole ecosystem. Our fintech integrations offer you
                                tailored services specific to your needs.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Column - Image */}
                <div className="col-lg-6 d-flex align-items-center justify-content-center">
                    <img
                        src="media/images/ecosystem.png"
                        alt="YOLO Ecosystem"
                        className="img-fluid rounded-3 shadow"
                        style={{
                            maxHeight: '500px',
                            border: '8px solid white',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Stats;