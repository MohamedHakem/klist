import { Client } from 'appwrite';

const client = new Client();
console.log('process.env.APPWRITE_PROJECT_ID: ', process.env.APPWRITE_PROJECT_ID);
if (process.env.APPWRITE_PROJECT_ID) client.setProject(process.env.APPWRITE_PROJECT_ID);
