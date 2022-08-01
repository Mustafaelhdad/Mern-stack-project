import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin user',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true
  },
  {
    name: 'Fatma user',
    email: 'fatma@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Mustafa user',
    email: 'mustafa@example.com',
    password: bcrypt.hashSync('123456', 10),
  }
]

export default users