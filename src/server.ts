import { config } from 'dotenv'
import express, { Request, Response } from 'express';

config();
const server = express();

server.get('/', (req: Request, res: Response)=> {
    return res.send('Hello TS world')
        
})

server.listen(
    process.env.PORT,
    () => { console.log('Server running at: localhost:' + process.env.PORT)}
);