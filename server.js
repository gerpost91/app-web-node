const express = require('express')
const app = express();
const hbs = require('hbs');
// configurando puerto para Heroku
const port = process.env.PORT || 3000;
app.use(express.static(__dirname + '/public'));
// declara una carpeta como publica en este caso la carpeta public
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
// express hbs motor de plantillas, el app hace referencia a express porque lo complementa

//usando un helper para optimizar la fecha
require('./hbs/helpers/helpers');



app.get('/',  (req, res) => {
  res.render('home');
})

app.get('/info',  (req, res) => {
  res.render('info');
})
//La comento porque puede dar conflicto al llamar a los servicios
// esta parte tambien se puede usar para reenderizar el home.hbs

// esta funcion indica que todas las peticiones que pasen por / ejecutaran este callback, esta funcion fue edita a su forma arrow funtion.
// diferencia entre express y http en http se escuchan todas las peticiones en express no, estas son filtradas y para usarse se deben crear abajo crearemos la la ruta para datos como ejemplo



app.get('/datos',  (req, res) => {
  res.send ('Hola soy gerardo');
});


app.listen(port , ()=>{
  console.log(`Escuchando peticiones en ${port}`);
});
