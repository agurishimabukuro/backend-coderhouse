const express = require('express');
const app = express();
const PORT = 8080;
const {engine} = require('express-handlebars');

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/',(req, res) => {
    const datos = {
        nombre : 'Aguri',
        apellido : 'Shimabukuro',
        edad : 26,
        email : 'email@email.com',
        telefono : '1111112223333',
    };

    res.render('datos',datos);

});

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})