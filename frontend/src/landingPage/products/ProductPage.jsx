import React from 'react'
import Hero from './Hero';
import LeftImage from './LeftImage';
import RightImage from './RightImage';
import Universe from './Universe';

function ProductPage() {
    return ( 
        <div>
            <Hero />
            
            {/* Trading Platform Section */}
            <LeftImage 
                productName="Stonksy Pro Trading"
                productDescription="Advanced charting tools and real-time market data to help you make better investment decisions."
                tryDemo="#trading-demo"
                learnMore="#trading-features"
                googlePlay="https://play.google.com"
                appStore="https://apple.com/app-store"
                iconType="chart"
            />
            
            {/* Analytics Section */}
            <RightImage 
                productName="Stonksy Analytics"
                productDescription="Powerful market analytics and predictive tools to identify trading opportunities before they happen."
                tryDemo="#analytics-demo"
                learnMore="#analytics-features"
                googlePlay="https://play.google.com"
                appStore="https://apple.com/app-store"
                iconType="analytics"
            />
            
            {/* Mobile App Section */}
            {/* <LeftImage 
                productName="Stonksy Mobile"
                productDescription="Trade anywhere with our award-winning mobile app featuring instant execution and portfolio tracking."
                tryDemo="#mobile-demo"
                learnMore="#mobile-features" 
                googlePlay="https://play.google.com"
                appStore="https://apple.com/app-store"
                iconType="mobile"
            /> */}
            
            {/* Education Section */}
            {/* <RightImage 
                productName="Stonksy Education"
                productDescription="Comprehensive trading courses and tutorials to help you master the markets at your own pace."
                tryDemo="#education-demo"
                learnMore="#education-features"
                googlePlay="https://play.google.com"
                appStore="https://apple.com/app-store"
                iconType="education"
            /> */}
                <br />
                <p className='text-center'>Behind the scenes: See the technology driving Stonksy's trading platform</p>
            <Universe />
        </div>
    );
}

export default ProductPage;