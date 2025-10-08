const mysql = require('mysql2/promise');
require('dotenv').config();

async function checkBackendStatus() {
  console.log('🔍 DailyMoney Backend Status Check\n');
  
  try {
    // 1. Check environment variables
    console.log('1. ✅ Environment Configuration:');
    console.log(`   - DB_HOST: ${process.env.DB_HOST || 'localhost'}`);
    console.log(`   - DB_USER: ${process.env.DB_USER || 'root'}`);
    console.log(`   - DB_PASS: ${process.env.DB_PASS ? '***' + process.env.DB_PASS.slice(-4) : 'NOT SET'}`);
    console.log(`   - DB_NAME: ${process.env.DB_NAME || 'dailymoney_contacts'}`);
    console.log(`   - PORT: ${process.env.PORT || 4000}\n`);
    
    // 2. Test MySQL Connection
    console.log('2. 🔌 Testing MySQL Connection...');
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASS || '',
      database: process.env.DB_NAME || 'dailymoney_contacts'
    });
    console.log('   ✅ MySQL Connection: SUCCESS\n');
    
    // 3. Check Database and Table
    console.log('3. 🗃️ Checking Database Structure...');
    const [databases] = await connection.query('SHOW DATABASES LIKE "dailymoney_contacts"');
    if (databases.length > 0) {
      console.log('   ✅ Database "dailymoney_contacts": EXISTS');
      
      const [tables] = await connection.query('SHOW TABLES LIKE "enquiries"');
      if (tables.length > 0) {
        console.log('   ✅ Table "enquiries": EXISTS');
        
        const [tableInfo] = await connection.query('DESCRIBE enquiries');
        console.log('   ✅ Table Structure:');
        tableInfo.forEach(col => {
          console.log(`      - ${col.Field}: ${col.Type} ${col.Null === 'NO' ? 'NOT NULL' : ''} ${col.Key} ${col.Extra}`);
        });
      } else {
        console.log('   ❌ Table "enquiries": NOT FOUND');
      }
    } else {
      console.log('   ❌ Database "dailymoney_contacts": NOT FOUND');
    }
    
    // 4. Test Database Operations
    console.log('\n4. 🧪 Testing Database Operations...');
    
    // Insert test record
    const [insertResult] = await connection.query(
      'INSERT INTO enquiries (name, email, phone, company, message) VALUES (?, ?, ?, ?, ?)',
      ['Status Check User', 'status@test.com', '+91 9999999999', 'Test Company', 'Backend status check test']
    );
    console.log(`   ✅ INSERT: Record created with ID ${insertResult.insertId}`);
    
    // Fetch recent records
    const [recentRecords] = await connection.query('SELECT * FROM enquiries ORDER BY created_at DESC LIMIT 3');
    console.log(`   ✅ SELECT: Found ${recentRecords.length} recent records`);
    recentRecords.forEach((record, index) => {
      console.log(`      ${index + 1}. ${record.name} (${record.email}) - ${record.created_at}`);
    });
    
    await connection.end();
    
    console.log('\n🎉 BACKEND STATUS: ALL SYSTEMS OPERATIONAL! 🎉');
    console.log('✅ MySQL Database: Connected and Working');
    console.log('✅ Database Schema: Properly Configured');
    console.log('✅ Database Operations: Insert & Select Working');
    console.log('✅ Environment Configuration: Loaded Successfully');
    console.log('\n📝 Your backend is ready to handle DailyMoney contact enquiries!');
    
  } catch (error) {
    console.error('❌ Backend Status Check Failed:', error.message);
    console.error('💡 Please check your MySQL server and credentials');
  }
}

checkBackendStatus();