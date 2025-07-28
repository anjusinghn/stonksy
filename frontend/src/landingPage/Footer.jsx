import React from 'react';

function Footer() {
    return (
        <div className="container border-top p-4 ">
            <div className="row mt-5">
                <div className="col">
                    <img src="media/images/logo.svg" alt="Stonksy Logo" />
                    <p className="text-muted mt-2 mb-1">© Stonksy 2025 | Made with ♡ by Anju</p>
                    <p className="text-muted small">Keep trading, stay winning</p>
                </div>
                <div className="col">
                    <p className="text-muted mb-1">Company</p>
                    <p className="mb-1"><a href="" className="text-muted text-decoration-none small">About</a></p>
                    <p className="mb-1"><a href="" className="text-muted text-decoration-none small">Philosophy</a></p>
                    <p className="mb-1"><a href="" className="text-muted text-decoration-none small">Press & media</a></p>
                    <p className="mb-1"><a href="" className="text-muted text-decoration-none small">Careers</a></p>
                </div>
                <div className="col">
                    <p className="text-muted mb-1">Support</p>
                    <p className="mb-1"><a href="" className="text-muted text-decoration-none small">Contact us</a></p>
                    <p className="mb-1"><a href="" className="text-muted text-decoration-none small">Support portal</a></p>
                    <p className="mb-1"><a href="" className="text-muted text-decoration-none small">How to file a complaint?</a></p>
                    <p className="mb-1"><a href="" className="text-muted text-decoration-none small">Status of your complaints</a></p>
                </div>
                <div className="col">
                    <p className="text-muted mb-1">Account</p>
                    <p className="mb-1"><a href="" className="text-muted text-decoration-none small">Open demat account</a></p>
                    <p className="mb-1"><a href="" className="text-muted text-decoration-none small">Minor demat account</a></p>
                    <p className="mb-1"><a href="" className="text-muted text-decoration-none small">NRI demat account</a></p>
                    <p className="mb-1"><a href="" className="text-muted text-decoration-none small">Commodity</a></p>
                </div>
                
            <div className='mt-5 text-muted'>
                <p>We can only take your stocks as margin through pledging (no physical stuff since Sep 2020). Keep your email/phone updated with us so CDSL/NSDL can send you OTPs directly - don't ghost us . Check your monthly CAS statements like you check your portfolio - no cap .</p>
            </div>
            </div>
        </div>
    );
}

export default Footer;