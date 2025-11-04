// Test backend without MySQL to isolate the issue
const express = require('express');
const cors = require('cors');

const app = express();
const port = 4000;

// CORS configuration
const corsOptions = {
  origin: [
    "http://localhost:5173", 
    "http://localhost:3000",
    "https://daily-money.vercel.app"
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"]
};

app.use(cors(corsOptions));
app.use(express.json());

// Basic health check
app.get('/', (req, res) => {
  res.json({ 
    status: 'Backend is working!',
    message: 'Server running without MySQL - ready to connect database',
    timestamp: new Date().toISOString()
  });
});

// Test contact form endpoint (without database)
app.post('/api/enquiries', (req, res) => {
  const { name, email, phone, company, message } = req.body;
  
  console.log('📧 Contact Form Submission Received:');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Phone:', phone);
  console.log('Company:', company);
  console.log('Message:', message);
  
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }
  
  // Simulate successful database insertion
  res.json({ 
    success: true,
    message: 'Enquiry received successfully!',
    id: Math.floor(Math.random() * 1000),
    data: { name, email, phone, company, message }
  });
});

// Test recent enquiries (mock data)
app.get('/api/enquiries/recent', (req, res) => {
  const mockData = [
    {
      id: 1,
      name: 'Test User 1',
      email: 'test1@example.com',
      phone: '+91 9876543210',
      company: 'Test Company',
      message: 'Test enquiry 1',
      created_at: new Date().toISOString()
    },
    {
      id: 2,
      name: 'Test User 2',
      email: 'test2@example.com',
      phone: '+91 9876543211',
      company: 'Another Company',
      message: 'Test enquiry 2',
      created_at: new Date().toISOString()
    }
  ];
  
  res.json(mockData);
});

app.listen(port, '0.0.0.0', () => {
  console.log('✅ Backend server running successfully!');
  console.log(`🌐 Server URL: http://localhost:${port}`);
  console.log('🔗 Test endpoints:');
  console.log(`   GET  http://localhost:${port}/`);
  console.log(`   POST http://localhost:${port}/api/enquiries`);
  console.log(`   GET  http://localhost:${port}/api/enquiries/recent`);
  console.log('');
  console.log('📝 Next step: Connect MySQL database');
  console.log('💡 Your backend code is correct - just need to start MySQL service');
});

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Server shutting down...');
  process.exit(0);
});