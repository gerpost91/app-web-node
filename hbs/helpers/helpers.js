const hbs = require('hbs');

hbs.registerHelper('getAnio',()=>{
  return new Date().getFullYear();
})

hbs.registerHelper('Mayuscula',(text)=>{
  return text.toUpperCase();
})
