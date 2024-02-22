// Imports
import { serverMessages } from './messages/index.js';
import { config } from 'dotenv';
import server from './app.js';

// Create a way to access environment variables
process.env.NODE_ENV !== 'production' ? config() : {}

function main(){
    const port = 8080
    server.listen(port, () => serverMessages.up(port))
}

// Start!
main()