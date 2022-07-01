const express= require('express');
const app= express();

app.get('/', (req,res) => {
    res.send('This should print on the page');
});

app.post('/', (res,req) => {
    res.send('I should see it on the postman');
});

app.listen(4000);