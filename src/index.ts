import { User } from './models/User';

// Initialize an empty User
const user = new User({ name: 'mariola', age: 32 });

user.on('change', () => {});
user.on('click', () => {});

console.log(user);
