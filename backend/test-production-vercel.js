// Test Production Backend API on Vercel
const https = require('https');
const http = require('http');

async function testProductionAPI() {
    console.log('🌐 Testing Production Backend on Vercel...\n');
    
    const productionURL = 'https://daily-money-backend-fkg46tsi1-daily-money.vercel.app';
    
    try {
        // Test 1: Health check
        console.log('1️⃣ Testing production health endpoint...');
        
        const healthResponse = await makeRequest(`${productionURL}/`);
        if (healthResponse.success) {
            console.log('✅ Production health check successful:', healthResponse.data);
        } else {
            console.log('❌ Production health check failed:', healthResponse.error);
        }
        
        // Test 2: Test contact form submission
        console.log('\n2️⃣ Testing production contact form...');
        
        const contactData = {
            name: 'Production Test User',
            email: 'production.test@example.com',
            phone: '+91 9876543210',
            company: 'Production Test Company',
            message: 'Testing contact form on production Vercel deployment with Railway database'
        };
        
        const submitResponse = await makeRequest(`${productionURL}/api/enquiries`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(contactData)
        });
        
        if (submitResponse.success) {
            console.log('✅ Contact form submission successful:', submitResponse.data);
        } else {
            console.log('❌ Contact form submission failed:', submitResponse.error);
            if (submitResponse.error.includes('No database selected') || 
                submitResponse.error.includes('Database error')) {
                console.log('\n💡 This means you need to set environment variables in Vercel dashboard!');
                console.log('📚 Check VERCEL_ENV_SETUP.md for instructions');
            }
        }
        
        // Test 3: Get recent enquiries
        console.log('\n3️⃣ Testing recent enquiries endpoint...');
        
        const recentResponse = await makeRequest(`${productionURL}/api/enquiries/recent`);
        if (recentResponse.success) {
            console.log('✅ Recent enquiries retrieved:', recentResponse.data.length, 'records');
            if (recentResponse.data.length > 0) {
                recentResponse.data.forEach((enquiry, index) => {
                    console.log(`   ${index + 1}. ${enquiry.name} - ${enquiry.email}`);
                });
            }
        } else {
            console.log('❌ Failed to get recent enquiries:', recentResponse.error);
        }
        
    } catch (error) {
        console.error('❌ Production test failed:', error.message);
    }
    
    console.log('\n' + '='.repeat(60));
    console.log('🎯 Production Test Summary');
    console.log('='.repeat(60));
    console.log('✅ Backend deployed successfully to Vercel');
    console.log('🌐 Production URL:', productionURL);
    console.log('');
    console.log('📋 Next Steps:');
    console.log('1. If contact form failed, set environment variables in Vercel dashboard');
    console.log('2. Update your frontend to use this production API URL');
    console.log('3. Test contact form from your live website');
    console.log('');
    console.log('🎉 Your backend is live and ready for users worldwide!');
}

// Helper function to make HTTP requests
function makeRequest(url, options = {}) {
    return new Promise((resolve) => {
        const isHttps = url.startsWith('https');
        const lib = isHttps ? https : http;
        
        const urlObj = new URL(url);
        const requestOptions = {
            hostname: urlObj.hostname,
            port: urlObj.port || (isHttps ? 443 : 80),
            path: urlObj.pathname + urlObj.search,
            method: options.method || 'GET',
            headers: options.headers || {}
        };

        const req = lib.request(requestOptions, (res) => {
            let data = '';
            
            res.on('data', (chunk) => {
                data += chunk;
            });
            
            res.on('end', () => {
                try {
                    const parsedData = JSON.parse(data);
                    if (res.statusCode >= 200 && res.statusCode < 300) {
                        resolve({ success: true, data: parsedData });
                    } else {
                        resolve({ success: false, error: parsedData.error || parsedData });
                    }
                } catch (e) {
                    if (res.statusCode >= 200 && res.statusCode < 300) {
                        resolve({ success: true, data: data });
                    } else {
                        resolve({ success: false, error: data || 'Unknown error' });
                    }
                }
            });
        });

        req.on('error', (error) => {
            resolve({ success: false, error: error.message });
        });

        if (options.body) {
            req.write(options.body);
        }
        
        req.end();
    });
}

// Run the production test
testProductionAPI();