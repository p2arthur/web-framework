import { User } from './models/User';

const user = new User({ name: 'marcola', age: 19 });

user.set({ name: 'jumentin', age: 32 });
const userData = user.get('name');

console.log(userData);
