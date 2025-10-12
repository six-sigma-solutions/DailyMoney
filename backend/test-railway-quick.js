// Quick Railway Connection Test
// Run this first to check if Railway database is accessible

const mysql = require('mysql2/promise');
require('dotenv').config();

async function quickConnectionTest() {
    console.log('🔍 Quick Railway Connection Test...\n');

    const config = {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        port: parseInt(process.env.DB_PORT) || 3306,
        ssl: { rejectUnauthorized: false },
        connectTimeout: 10000,
        timeout: 10000
    };

    console.log('📋 Testing connection to:');
    console.log(`   ${config.host}:${config.port}`);
    console.log(`   Database: ${config.database}`);
    console.log(`   User: ${config.user}\n`);

    try {
        console.log('🔌 Attempting connection...');
        const connection = await mysql.createConnection(config);
        
        console.log('✅ Connection successful!');
        
        const [result] = await connection.execute('SELECT "Railway MySQL is working!" as message, NOW() as timestamp');
        console.log('✅ Query successful:', result[0]);
        
        await connection.end();
        
        console.log('\n🎉 Railway database is accessible!');
        console.log('💡 You can now run: node init-railway-robust.js');
        
        return true;
        
    } catch (error) {
        console.error('\n❌ Connection failed:', error.message);
        
        if (error.code === 'ETIMEDOUT') {
            console.error('\n🔧 Timeout Error Solutions:');
            console.error('   1. Railway database might be sleeping (free tier)');
            console.error('   2. Try again in 30 seconds');
            console.error('   3. Check Railway dashboard service status');
            console.error('   4. Verify your internet connection');
        } else if (error.code === 'ECONNREFUSED') {
            console.error('\n🔧 Connection Refused:');
            console.error('   1. Railway database service might be stopped');
            console.error('   2. Check Railway dashboard');
            console.error('   3. Restart the database service');
        }
        
        return false;
    }
}

// Run the test
quickConnectionTest();

module.exports = { quickConnectionTest };