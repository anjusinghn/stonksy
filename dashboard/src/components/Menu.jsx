import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    const [selectedMenu, setSelectedMenu] = useState(0);
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

    const handleMenuClick = (index) => {
        setSelectedMenu(index);
    };

    const menuItems = [
        { label: 'Dashboard', path: '/' },
        { label: 'Orders', path: '/orders' },
        { label: 'Holdings', path: '/holdings' },
        { label: 'Positions', path: '/positions' },
        { label: 'Funds', path: '/funds' },
        { label: 'Apps', path: '/apps' }
    ];

    return (
        <nav className="navbar navbar-expand-lg bg-white" style={{
            backgroundColor: '#ffffff',
            padding: '12px 24px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
            borderTop: '1px solid #f0f0f0'
        }}>
            <div className="container-fluid d-flex justify-content-between align-items-center">
                
                <img
                    src="logo.svg"
                    alt="Logo"
                    style={{
                        height: "35px",
                        width: "auto",
                        objectFit: "contain"
                    }}
                />

                {/* Toggle Button for Mobile */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menuItems" aria-controls="menuItems" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Menu Items */}
                <div className="collapse navbar-collapse justify-content-center" id="menuItems">
                    <nav>
                        <ul style={{
                            display: 'flex',
                            listStyle: 'none',
                            margin: 0,
                            marginLeft: '200px',
                            padding: 0,
                            gap: '24px'
                        }}>
                            {menuItems.map((item, index) => (
                                <li key={item.label}>
                                    <Link
                                        to={item.path}
                                        onClick={() => handleMenuClick(index)}
                                        style={{
                                            textDecoration: 'none',
                                            color: selectedMenu === index ? '#4772e7' : '#1a1a1a',
                                            fontWeight: '500',
                                            fontSize: '14px',
                                            padding: '8px 0',
                                            position: 'relative',
                                            transition: 'color 0.2s ease'
                                        }}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                {/* User Section */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            cursor: 'pointer'
                        }}
                    >
                        <div style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: '50%',
                            backgroundColor: '#f0f0f0',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#333',
                            fontWeight: '600'
                        }}>
                            U
                        </div>
                        <span style={{ fontSize: '14px' }}>Username</span>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Menu;
