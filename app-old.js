const http = require('http');

http.createServer((req, res)=>{

   res.write(200, {'Content-Type':'application/json'});//esta es la respuesta
   let datos = {
     nombre:  'Gerardo',
     Apellido: 'guevara',
     edad: 28,
     url: req.url
   }

   res.write(JSON.stringify(datos));
   res.end();// indica que la respuesta ya termino
})
.listen(7000,()=>{
  console.log('App iniciada en puerto 7000');
});
