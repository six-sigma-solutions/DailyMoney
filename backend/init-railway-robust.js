const mysql = require('mysql2/promise');
require('dotenv').config();

async function initializeRailwayDB() {
    console.log('🚀 Initializing Railway MySQL Database...\n');
    
    const config = {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        port: parseInt(process.env.DB_PORT) || 3306,
        ssl: {
            rejectUnauthorized: false
        },
        connectTimeout: 30000,      // 30 seconds
        acquireTimeout: 30000,      // 30 seconds  
        timeout: 30000,             // 30 seconds
        reconnect: true,
        multipleStatements: true
    };

    console.log('📋 Connection Configuration:');
    console.log(`   Host: ${config.host}`);
    console.log(`   Port: ${config.port}`);
    console.log(`   User: ${config.user}`);
    console.log(`   Database: ${config.database}`);
    console.log(`   SSL: Enabled\n`);

    let connection;

    try {
        console.log('🔌 Connecting to Railway MySQL...');
        connection = await mysql.createConnection(config);
        console.log('✅ Connected successfully!\n');

        // Test basic connectivity
        console.log('🧪 Testing basic query...');
        const [testResult] = await connection.execute('SELECT 1 as test, NOW() as currenttime');
        console.log('✅ Test query successful:', testResult[0]);

        // Check and create enquiry table
        console.log('\n📋 Setting up enquiry table...');
        
        const createTableSQL = `
            CREATE TABLE IF NOT EXISTS enquiry (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(100) NOT NULL,
                email VARCHAR(100) NOT NULL,
                phone VARCHAR(20),
                company VARCHAR(100),
                message TEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                INDEX idx_created_at (created_at),
                INDEX idx_email (email)
            )
        `;
        
        await connection.execute(createTableSQL);
        console.log('✅ enquiry table created/verified');

        // Check and create users table
        console.log('\n👥 Setting up users table...');
        
        const createUsersSQL = `
            CREATE TABLE IF NOT EXISTS users (
                id INT AUTO_INCREMENT PRIMARY KEY,
                username VARCHAR(50) UNIQUE NOT NULL,
                email VARCHAR(100) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL,
                full_name VARCHAR(100),
                phone VARCHAR(20),
                is_verified BOOLEAN DEFAULT FALSE,
                verification_token VARCHAR(255),
                reset_token VARCHAR(255),
                reset_token_expiry DATETIME,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                INDEX idx_username (username),
                INDEX idx_email (email)
            )
        `;
        
        await connection.execute(createUsersSQL);
        console.log('✅ users table created/verified');

        // Check and create user_sessions table
        console.log('\n🔐 Setting up user_sessions table...');
        
        const createSessionsSQL = `
            CREATE TABLE IF NOT EXISTS user_sessions (
                id INT AUTO_INCREMENT PRIMARY KEY,
                user_id INT NOT NULL,
                session_token VARCHAR(255) NOT NULL,
                expires_at DATETIME NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
                INDEX idx_user_id (user_id),
                INDEX idx_session_token (session_token)
            )
        `;
        
        await connection.execute(createSessionsSQL);
        console.log('✅ user_sessions table created/verified');

        // Insert test data
        console.log('\n📝 Inserting sample data...');
        
        const insertTestData = `
            INSERT IGNORE INTO enquiry (name, email, phone, company, message) VALUES 
            ('Test User', 'test@example.com', '+91 9876543210', 'Test Company', 'Sample enquiry for testing Railway MySQL connection'),
            ('Sample Contact', 'contact@sample.com', '+91 8765432109', 'Sample Corp', 'Another test enquiry to verify database functionality')
        `;
        
        const [insertResult] = await connection.execute(insertTestData);
        console.log('✅ Sample data inserted');

        // Verify data
        console.log('\n📊 Verifying setup...');
        const [enquiries] = await connection.execute('SELECT COUNT(*) as count FROM enquiry');
        const [users] = await connection.execute('SELECT COUNT(*) as count FROM users');
        const [sessions] = await connection.execute('SELECT COUNT(*) as count FROM user_sessions');

        console.log(`   Enquiries: ${enquiries[0].count} records`);
        console.log(`   Users: ${users[0].count} records`);
        console.log(`   Sessions: ${sessions[0].count} records`);

        // Show recent enquiries
        console.log('\n📋 Recent enquiries:');
        const [recentEnquiries] = await connection.execute(
            'SELECT id, name, email, company, created_at FROM enquiry ORDER BY created_at DESC LIMIT 3'
        );
        
        recentEnquiries.forEach(enquiry => {
            console.log(`   ${enquiry.id}: ${enquiry.name} (${enquiry.email}) - ${enquiry.company}`);
        });

        console.log('\n🎉 Railway MySQL Database initialized successfully!');
        console.log('✅ All tables created and ready for production');
        console.log('✅ Contact form will work for all users');
        console.log('✅ Backend is ready for Vercel deployment');

    } catch (error) {
        console.error('\n❌ Database initialization failed:', error.message);
        
        if (error.code === 'ETIMEDOUT') {
            console.error('\n🔧 Connection timeout solutions:');
            console.error('   1. Check Railway database is running');
            console.error('   2. Verify network connectivity');
            console.error('   3. Try again in a few minutes');
            console.error('   4. Check Railway dashboard for service status');
        } else if (error.code === 'ENOTFOUND') {
            console.error('\n🔧 DNS resolution error:');
            console.error('   1. Verify DB_HOST in .env file');
            console.error('   2. Check Railway connection details');
        } else if (error.code === 'ER_ACCESS_DENIED_ERROR') {
            console.error('\n🔧 Authentication error:');
            console.error('   1. Verify DB_USER and DB_PASS');
            console.error('   2. Check Railway database credentials');
        }
        
        process.exit(1);
    } finally {
        if (connection) {
            try {
                await connection.end();
                console.log('\n🔌 Connection closed');
            } catch (err) {
                console.error('Error closing connection:', err.message);
            }
        }
    }
}

// Run the initialization
initializeRailwayDB();