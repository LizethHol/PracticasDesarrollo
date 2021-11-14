//Llegamos el modulo http 
const http=require('http');

//Establecemos la url o IP de nuestro servidor
const hostname= '127.0.0.1';

//Establecemos el puerto de escucha
const port = 3000;

const server = http.createServer((rew, res) =>{
    //El servidor respondera un codigo 2000
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hola Mundo\n');
});

server.listen(port, hostname,()=>{
    console.log(`El servidor se esta ejecutando en http://${hostname}:${port}/`);
});
