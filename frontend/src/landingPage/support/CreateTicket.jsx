import React from 'react';

function CreateTicket() {
    return (
        <div className='container py-5'>
            
            {/* Ticket Categories */}
            <div className="text-center mt-5">
                <h4 className="mb-5">To create a ticket, select a relevant topic</h4>
                <div className="row">
                    {/* Account Opening */}
                    <div className="col-md-4 p-4">
                        <div className="p-4 border rounded h-100">
                            <i className="fas fa-user-plus fa-2x mb-3" style={{ color: '#0d6efd' }}></i>
                            <h5 className="mb-4">Account Opening</h5>
                            <ul className="list-unstyled text-start">
                                <li className="mb-2">
                                    <a href="/resident-account" className="text-decoration-none text-dark">
                                        <i className="fas fa-user me-2 text-muted"></i>Resident individual
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="/minor-account" className="text-decoration-none text-dark">
                                        <i className="fas fa-child me-2 text-muted"></i>Minor account
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="/nri-account" className="text-decoration-none text-dark">
                                        <i className="fas fa-passport me-2 text-muted"></i>Non Resident Indian (NRI)
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="/business-account" className="text-decoration-none text-dark">
                                        <i className="fas fa-building me-2 text-muted"></i>Company and Partnership
                                    </a>
                                </li>
                                <li>
                                    <a href="/glossary" className="text-decoration-none text-dark">
                                        <i className="fas fa-book me-2 text-muted"></i>Glossary
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Your Stonksy Account */}
                    <div className="col-md-4 p-4">
                        <div className="p-4 border rounded h-100">
                            <i className="fas fa-id-card fa-2x mb-3" style={{ color: '#0d6efd' }}></i>
                            <h5 className="mb-4">Your Stonksy Account</h5>
                            <ul className="list-unstyled text-start">
                                <li className="mb-2">
                                    <a href="/profile" className="text-decoration-none text-dark">
                                        <i className="fas fa-user-circle me-2 text-muted"></i>Your Profile
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="/account-settings" className="text-decoration-none text-dark">
                                        <i className="fas fa-edit me-2 text-muted"></i>Account settings
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="/account-documents" className="text-decoration-none text-dark">
                                        <i className="fas fa-file-alt me-2 text-muted"></i>Account documents
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="/nomination" className="text-decoration-none text-dark">
                                        <i className="fas fa-user-friends me-2 text-muted"></i>Nomination
                                    </a>
                                </li>
                                <li>
                                    <a href="/security-transfer" className="text-decoration-none text-dark">
                                        <i className="fas fa-exchange-alt me-2 text-muted"></i>Security transfers
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Trading Platform */}
                    <div className="col-md-4 p-4">
                        <div className="p-4 border rounded h-100">
                            <i className="fas fa-mobile-alt fa-2x mb-3" style={{ color: '#0d6efd' }}></i>
                            <h5 className="mb-4">Trading Platform</h5>
                            <ul className="list-unstyled text-start">
                                <li className="mb-2">
                                    <a href="/ipo" className="text-decoration-none text-dark">
                                        <i className="fas fa-landmark me-2 text-muted"></i>IPO applications
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="/trading-faq" className="text-decoration-none text-dark">
                                        <i className="fas fa-question-circle me-2 text-muted"></i>Trading FAQs
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="/margins" className="text-decoration-none text-dark">
                                        <i className="fas fa-percentage me-2 text-muted"></i>Margin requirements
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="/charts" className="text-decoration-none text-dark">
                                        <i className="fas fa-chart-bar me-2 text-muted"></i>Charts and analysis
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="/alerts" className="text-decoration-none text-dark">
                                        <i className="fas fa-bell me-2 text-muted"></i>Price alerts
                                    </a>
                                </li>
                                <li>
                                    <a href="/platform-settings" className="text-decoration-none text-dark">
                                        <i className="fas fa-cog me-2 text-muted"></i>Platform settings
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateTicket;