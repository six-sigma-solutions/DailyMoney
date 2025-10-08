// Quick test to check backend connectivity from frontend perspective
const testBackend = async () => {
  console.log('Testing backend connection from frontend...');
  
  try {
    // Test health check
    const response = await fetch('http://localhost:4000/', {
      method: 'GET',
      mode: 'cors'
    });
    const data = await response.json();
    console.log('✅ Health check successful:', data);
    
    // Test POST endpoint
    const testData = {
      name: 'Frontend Test',
      email: 'frontend@test.com',
      phone: '1234567890',
      company: 'Test Co',
      message: 'Testing from frontend'
    };
    
    const postResponse = await fetch('http://localhost:4000/api/enquiries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    });
    
    if (postResponse.ok) {
      const result = await postResponse.json();
      console.log('✅ POST request successful:', result);
    } else {
      console.error('❌ POST request failed:', postResponse.status, postResponse.statusText);
      const errorText = await postResponse.text();
      console.error('Error details:', errorText);
    }
    
  } catch (error) {
    console.error('❌ Connection failed:', error);
  }
};

testBackend();