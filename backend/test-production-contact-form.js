// Test Contact Form API for Production Deployment
// This simulates how other users will interact with your contact form

const testContactFormAPI = async () => {
    console.log('🧪 Testing Contact Form API for Production...\n');

    // Test data that users might submit
    const testSubmissions = [
        {
            name: 'Rajesh Kumar',
            email: 'rajesh@gmail.com',
            phone: '+91 9876543210',
            company: 'Tech Solutions',
            message: 'I am interested in your services. Please contact me.'
        },
        {
            name: 'Priya Sharma',
            email: 'priya@yahoo.com', 
            phone: '+91 8765432109',
            company: 'Digital Marketing Ltd',
            message: 'Looking for financial consultation services.'
        },
        {
            name: 'Suresh Babu',
            email: 'suresh@hotmail.com',
            phone: '+91 7654321098',
            company: '',
            message: 'Need help with daily money management.'
        }
    ];

    // Test both local and production URLs
    const baseUrls = [
        'http://localhost:4000',  // Local development
        'https://daily-money-backend.vercel.app'  // Production (update with your actual URL)
    ];

    for (const baseUrl of baseUrls) {
        console.log(`\n🌐 Testing: ${baseUrl}`);
        console.log('=' + '='.repeat(50));

        try {
            // Test 1: Health check
            console.log('\n1️⃣ Testing health check...');
            const healthResponse = await fetch(`${baseUrl}/`);
            
            if (healthResponse.ok) {
                const healthData = await healthResponse.json();
                console.log('✅ Health check passed:', healthData.status);
            } else {
                console.log('❌ Health check failed:', healthResponse.status);
                continue; // Skip other tests if server is down
            }

            // Test 2: Submit contact form
            console.log('\n2️⃣ Testing contact form submissions...');
            
            for (let i = 0; i < testSubmissions.length; i++) {
                const submission = testSubmissions[i];
                console.log(`\n   📝 Submitting enquiry ${i + 1}: ${submission.name}`);

                try {
                    const response = await fetch(`${baseUrl}/api/enquiries`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(submission)
                    });

                    if (response.ok) {
                        const result = await response.json();
                        console.log(`   ✅ Success: Enquiry ID ${result.id}`);
                    } else {
                        const error = await response.json();
                        console.log(`   ❌ Failed: ${error.error || response.status}`);
                    }
                } catch (error) {
                    console.log(`   ❌ Network error: ${error.message}`);
                }

                // Wait between submissions to avoid rate limiting
                await new Promise(resolve => setTimeout(resolve, 500));
            }

            // Test 3: Get recent enquiries
            console.log('\n3️⃣ Testing recent enquiries retrieval...');
            
            try {
                const recentResponse = await fetch(`${baseUrl}/api/enquiries/recent`);
                
                if (recentResponse.ok) {
                    const recentData = await recentResponse.json();
                    console.log(`   ✅ Retrieved ${recentData.length} recent enquiries`);
                    
                    if (recentData.length > 0) {
                        console.log('   📊 Sample enquiry:', {
                            name: recentData[0].name,
                            email: recentData[0].email,
                            created_at: recentData[0].created_at
                        });
                    }
                } else {
                    console.log('   ❌ Failed to get recent enquiries:', recentResponse.status);
                }
            } catch (error) {
                console.log(`   ❌ Network error: ${error.message}`);
            }

            // Test 4: CORS validation
            console.log('\n4️⃣ Testing CORS headers...');
            
            try {
                const corsResponse = await fetch(`${baseUrl}/api/enquiries`, {
                    method: 'OPTIONS',
                    headers: {
                        'Origin': 'https://daily-money.vercel.app',
                        'Access-Control-Request-Method': 'POST',
                        'Access-Control-Request-Headers': 'Content-Type'
                    }
                });

                if (corsResponse.ok) {
                    console.log('   ✅ CORS configuration working');
                } else {
                    console.log('   ⚠️ CORS might need adjustment');
                }
            } catch (error) {
                console.log(`   ❌ CORS test error: ${error.message}`);
            }

        } catch (error) {
            console.log(`❌ Server not accessible: ${error.message}`);
        }
    }

    console.log('\n' + '='.repeat(60));
    console.log('🎯 Test Summary:');
    console.log('✅ If all tests pass, your contact form will work for all users');
    console.log('✅ Data will be saved successfully in your database');  
    console.log('✅ Other computers can submit contact forms without issues');
    console.log('\n💡 Next steps:');
    console.log('1. Set up production database (PlanetScale/Railway)');
    console.log('2. Add environment variables to Vercel dashboard');
    console.log('3. Deploy backend with: npm run deploy or vercel --prod');
    console.log('4. Test from your live website');
    console.log('\nउங्கள் contact form எல्लா users-க్కும் perfect-ఆ work ఆగুम్! 🚀');
};

// Run the test
testContactFormAPI().catch(console.error);

// Export for use in other files
module.exports = { testContactFormAPI };