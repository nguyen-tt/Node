/* eslint-disable no-undef */
import dotenv from 'dotenv';
dotenv.config();


console.log(`The server will run on port ${process.env.SERVER_PORT}`);
console.log(`My name is ${process.env.MY_NAME} from ${process.env.MY_CITY} and i learn ${process.env.MY_LANGUAGE}`);