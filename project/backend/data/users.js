import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    address: '123 Admin St, Admin City, AC 12345',
    phone: '123-456-7890',
    isAdmin: true
  },
  {
    name: 'John Doe',
    email: 'john@example.com',
    password: bcrypt.hashSync('123456', 10),
    address: '456 User St, User City, UC 67890',
    phone: '234-567-8901',
    isAdmin: false
  },
  {
    name: 'Jane Doe',
    email: 'jane@example.com',
    password: bcrypt.hashSync('123456', 10),
    address: '789 User Ave, User City, UC 67890',
    phone: '345-678-9012',
    isAdmin: false
  }
];

export default users;