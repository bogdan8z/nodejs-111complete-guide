import { writeFile } from 'fs';

const requestHandler = (req, res) =>{
    const url = req.url;
    const method = req.method;
    var HTTP_OK = 200;
    var header = {
        contentType: 'text/html',
        transferEncoding: 'chunked',
        maxAge: 1000
    };
    if(url === '/'){
        // res.write('<form method="POST" action="/message"><input type="text" name="message"><button type="submit">go</button></form>');
        // return res.end();
        //res.writeHead(HTTP_OK, header);
        res.write('<form>Welcome to the World of Node Server!1xxaaaxxxzz</form>');
       return res.end();
    }
    
    if(url === '/message' && method == 'POST' ){
        const body = [];
        req.on('data',(chunk)=>{
            body.push(chunk);
        });
        return req.on('end', () =>{
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            writeFile('msg.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location','/');
                return res.end();
            });
        });
    }
    
    res.write('aa');
    res.end();
}

export const handler = requestHandler;
export const someText = 'test hard coded text2';