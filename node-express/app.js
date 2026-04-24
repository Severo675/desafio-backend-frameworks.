const express = require('express');
const app = express();
app.use(express.json());

app.get('/',(req, res) => {
    res.send(" Está prestando, AMÉM!!!");
});
const UserRoutes = require('./routes/UserRoutes');
app.use(UserRoutes);

app.listen(3000, () => {
    console.log(" Servidor rodando... ");
});
