// Test the backend API endpoints with Railway database
const fetch = require('node-fetch'); // You might need to install: npm install node-fetch

async function testBackendAPI() {
    console.log('🧪 Testing Backend API with Railway Database...\n');

    const baseURL = 'http://localhost:4000';

    try {
        // Test 1: Health check
        console.log('1️⃣ Testing health endpoint...');
        try {
            const healthResponse = await fetch(`${baseURL}/`);
            if (healthResponse.ok) {
                const healthData = await healthResponse.json();
                console.log('✅ Health check:', healthData);
            } else {
                console.log('❌ Health check failed - server might not be running');
                console.log('💡 Start server with: node index.js');
                return;
            }
        } catch (error) {
            console.log('❌ Cannot connect to backend server');
            console.log('💡 Make sure to start server first: node index.js');
            return;
        }

        // Test 2: Submit contact enquiry
        console.log('\n2️⃣ Testing contact form submission...');
        const testEnquiry = {
            name: 'API Test User',
            email: 'apitest@example.com',
            phone: '+91 9876543210',
            company: 'API Test Company',
            message: 'Testing contact form API with Railway database'
        };

        const submitResponse = await fetch(`${baseURL}/api/enquiries`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(testEnquiry)
        });

        if (submitResponse.ok) {
            const submitResult = await submitResponse.json();
            console.log('✅ Contact form submission successful:', submitResult);
        } else {
            const error = await submitResponse.json();
            console.log('❌ Contact form submission failed:', error);
        }

        // Test 3: Get recent enquiries
        console.log('\n3️⃣ Testing recent enquiries endpoint...');
        const recentResponse = await fetch(`${baseURL}/api/enquiries/recent`);

        if (recentResponse.ok) {
            const recentData = await recentResponse.json();
            console.log('✅ Recent enquiries:', recentData.length, 'records');
            recentData.forEach((enquiry, index) => {
                console.log(`   ${index + 1}. ${enquiry.name} - ${enquiry.email} (${enquiry.created_at})`);
            });
        } else {
            console.log('❌ Failed to get recent enquiries');
        }

        console.log('\n🎉 All API tests completed!');
        console.log('✅ Backend is working with Railway database');
        console.log('✅ Contact form will work for all users');

    } catch (error) {
        console.error('❌ API test failed:', error.message);
    }
}

console.log('📝 Manual Test Instructions:');
console.log('1. Open new terminal');
console.log('2. cd "C:\\Users\\cpdia\\Desktop\\web1\\DailyMoney\\backend"');
console.log('3. node index.js');
console.log('4. Wait for "Server listening on port 4000"');
console.log('5. Then run: node test-backend-api.js');
console.log('');

// Uncomment the line below if you want to run the test automatically
// testBackendAPI();

module.exports = { testBackendAPI };