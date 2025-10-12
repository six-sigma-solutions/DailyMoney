// Test Railway Database Connection
// Run this after updating .env with correct Railway hostname

const mysql = require('mysql2/promise');
require('dotenv').config();

async function testRailwayConnection() {
    console.log('🧪 Testing Railway MySQL Database Connection...\n');
    
    console.log('📋 Current Configuration:');
    console.log(`   Host: ${process.env.DB_HOST}`);
    console.log(`   User: ${process.env.DB_USER}`);
    console.log(`   Database: ${process.env.DB_NAME}`);
    console.log(`   Port: ${process.env.DB_PORT}`);
    console.log(`   Password: ${process.env.DB_PASS ? '***' + process.env.DB_PASS.slice(-4) : 'NOT SET'}`);
    console.log('');

    try {
        console.log('🔌 Attempting to connect to Railway MySQL...');
        
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME,
            port: process.env.DB_PORT || 3306,
            ssl: {
                rejectUnauthorized: false
            },
            connectTimeout: 10000
        });

        console.log('✅ Connected successfully to Railway MySQL!');
        
        // Test basic query
        console.log('\n📊 Testing basic query...');
        const [rows] = await connection.execute('SELECT 1 as test');
        console.log('✅ Basic query successful:', rows[0]);

        // Check if database exists
        console.log('\n🗄️  Checking database...');
        const [databases] = await connection.execute('SHOW DATABASES');
        const dbExists = databases.some(db => db.Database === process.env.DB_NAME);
        
        if (dbExists) {
            console.log(`✅ Database '${process.env.DB_NAME}' exists`);
        } else {
            console.log(`❌ Database '${process.env.DB_NAME}' not found`);
            console.log('Available databases:', databases.map(db => db.Database));
        }

        // Switch to our database and check tables
        await connection.execute(`USE ${process.env.DB_NAME}`);
        
        console.log('\n📋 Checking tables...');
        const [tables] = await connection.execute('SHOW TABLES');
        
        if (tables.length > 0) {
            console.log('✅ Found tables:', tables.map(t => Object.values(t)[0]));
            
            // Check if enquiry table exists
            const enquiryExists = tables.some(t => Object.values(t)[0] === 'enquiry');
            if (enquiryExists) {
                console.log('✅ enquiry table found');
                
                // Test inserting and reading data
                console.log('\n🔄 Testing insert/select operations...');
                
                const testData = {
                    name: 'Test User',
                    email: 'test@railway.com',
                    phone: '+91 9876543210',
                    company: 'Railway Test',
                    message: 'Testing Railway connection from local development'
                };
                
                const [insertResult] = await connection.execute(
                    'INSERT INTO enquiry (name, email, phone, company, message) VALUES (?, ?, ?, ?, ?)',
                    [testData.name, testData.email, testData.phone, testData.company, testData.message]
                );
                
                console.log('✅ Test record inserted with ID:', insertResult.insertId);
                
                // Read back the data
                const [selectResult] = await connection.execute(
                    'SELECT * FROM enquiry WHERE id = ?',
                    [insertResult.insertId]
                );
                
                console.log('✅ Test record retrieved:', selectResult[0]);
                
                // Clean up test data
                await connection.execute('DELETE FROM enquiry WHERE id = ?', [insertResult.insertId]);
                console.log('✅ Test record cleaned up');
                
            } else {
                console.log('❌ enquiry table not found');
                console.log('💡 Run the initialization script to create tables');
            }
        } else {
            console.log('⚠️  No tables found - database needs initialization');
        }

        await connection.end();
        
        console.log('\n🎉 Railway connection test completed successfully!');
        console.log('✅ Your backend is ready to connect to Railway MySQL');
        console.log('✅ Contact form will work for production deployment');
        
    } catch (error) {
        console.error('\n❌ Connection failed:', error.message);
        
        if (error.code === 'ENOTFOUND') {
            console.error('\n🔧 SOLUTION:');
            console.error('   1. Check your Railway dashboard for the correct external hostname');
            console.error('   2. Update DB_HOST in .env file');
            console.error('   3. Common Railway hostnames: junction.proxy.rlwy.net, viaduct.proxy.rlwy.net');
        } else if (error.code === 'ER_ACCESS_DENIED_ERROR') {
            console.error('\n🔧 SOLUTION:');
            console.error('   1. Check your Railway database credentials');
            console.error('   2. Verify DB_USER and DB_PASS in .env file');
        } else if (error.code === 'ETIMEDOUT') {
            console.error('\n🔧 SOLUTION:');
            console.error('   1. Check if Railway database is running');
            console.error('   2. Verify port number in DB_PORT');
            console.error('   3. Check your internet connection');
        }
        
        console.error('\n📚 Check RAILWAY_CONNECTION_FIX.md for detailed help');
    }
}

// Run the test
testRailwayConnection();