import { User } from './models/User';

// Initialize an empty User
const user = new User({});

console.log(user);

// Set user information later on
user.set({ name: 'Mariola' });
user.set({ age: 19 });
const userName = user.get('name');
const userAge = user.get('age');

const userData = { name: userName, age: userAge };

console.log(userData);
