/* eslint-disable no-undef */

/* require("dotenv").config(); */
import dotenv from 'dotenv';
dotenv.config();


console.log(`The server will run on port ${process.env.SERVER_PORT}`);
console.log(`I am ${process.env.MY_NAME}, wilder in ${process.env.MY_CITY} and i love ${process.env.MY_LANGUAGE}`);
