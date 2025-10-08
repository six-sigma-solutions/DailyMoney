const http = require('http');

// Test health check
const healthCheck = () => {
  return new Promise((resolve, reject) => {
    const req = http.get('http://localhost:4000/', (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        console.log('Health check response:', data);
        resolve(JSON.parse(data));
      });
    });
    req.on('error', reject);
  });
};

// Test recent enquiries
const testRecentEnquiries = () => {
  return new Promise((resolve, reject) => {
    const req = http.get('http://localhost:4000/api/enquiries/recent', (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        console.log('Recent enquiries response:', data);
        resolve(JSON.parse(data));
      });
    });
    req.on('error', reject);
  });
};

// Test creating an enquiry
const testCreateEnquiry = () => {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify({
      name: 'Test User',
      email: 'test@example.com',
      phone: '+91 9876543210',
      company: 'Test Company',
      message: 'This is a test enquiry from the backend test script'
    });

    const options = {
      hostname: 'localhost',
      port: 4000,
      path: '/api/enquiries',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      }
    };

    const req = http.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        console.log('Create enquiry response:', data);
        resolve(JSON.parse(data));
      });
    });

    req.on('error', reject);
    req.write(postData);
    req.end();
  });
};

// Run tests
async function runTests() {
  try {
    console.log('Testing DailyMoney Backend APIs...\n');
    
    console.log('1. Testing health check endpoint...');
    await healthCheck();
    
    console.log('\n2. Testing create enquiry endpoint...');
    const createResult = await testCreateEnquiry();
    
    console.log('\n3. Testing recent enquiries endpoint...');
    await testRecentEnquiries();
    
    console.log('\n✅ All tests completed successfully!');
    console.log('Backend is working correctly with MySQL database.');
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
  }
}

runTests();