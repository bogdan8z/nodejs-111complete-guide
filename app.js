import { createServer } from 'http';
import { someText, handler } from './routes.js';

console.log(someText);
//event listener (for each request):
const server = createServer(handler);

server.listen(3000, (aa, bb) => {
    console.log('ss '+ JSON.stringify(server.address()));
});
   
