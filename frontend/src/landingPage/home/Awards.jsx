import React from 'react';

function Awards() {
  return (
    <div className="py-5 mt-3 mb-3 bg-white">
      <div className="container text-center">
        <h2 className="mb-5" style={{ 
          fontWeight: 700, 
          letterSpacing: '0.05em',
          color: '#333'
        }}>
          RECOGNIZED EXCELLENCE
        </h2>
        
        <div className="d-flex justify-content-center flex-wrap gap-4">
          {/* Award 1 */}
          <div className="text-center" style={{ width: '160px' }}>
            <div className="bg-light rounded-circle p-4 mb-3 mx-auto" 
                 style={{ width: '120px', height: '120px' }}>
              <img 
                src="https://cdn-icons-png.flaticon.com/512/2583/2583344.png" 
                alt="Best Trading Platform" 
                style={{ width: '100%', filter: 'invert(60%) sepia(90%) saturate(2500%) hue-rotate(200deg)' }} 
              />
            </div>
            <h5 style={{ fontWeight: 600 }}>Best Trading Platform 2023</h5>
            <p className="text-muted">Finance Monthly</p>
          </div>

          {/* Award 2 */}
          <div className="text-center" style={{ width: '160px' }}>
            <div className="bg-light rounded-circle p-4 mb-3 mx-auto" 
                 style={{ width: '120px', height: '120px' }}>
              <img 
                src="https://cdn-icons-png.flaticon.com/512/3132/3132735.png" 
                alt="Innovation Award" 
                style={{ width: '100%', filter: 'invert(60%) sepia(90%) saturate(2500%) hue-rotate(200deg)' }} 
              />
            </div>
            <h5 style={{ fontWeight: 600 }}>Most Innovative 2023</h5>
            <p className="text-muted">Global Finance</p>
          </div>

          {/* Award 3 */}
          <div className="text-center" style={{ width: '160px' }}>
            <div className="bg-light rounded-circle p-4 mb-3 mx-auto" 
                 style={{ width: '120px', height: '120px' }}>
              <img 
                src="https://cdn-icons-png.flaticon.com/512/2583/2583437.png" 
                alt="User Choice" 
                style={{ width: '100%', filter: 'invert(60%) sepia(90%) saturate(2500%) hue-rotate(200deg)' }} 
              />
            </div>
            <h5 style={{ fontWeight: 600 }}>Users' Choice Award</h5>
            <p className="text-muted">Traders' Digest</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;