const express = require('express');
const app = express();
const path = require('path');
const petsitterRouter = require ('../routes/petsitterRouter');
const utilidades = require ('../helpers/utilidades');
const setupSwagger = require('../config/swagger');

console.log(`INICIANDO`);


app.use(express.static(path.join(__dirname, '../../frontend')));


app.use(express.json());
app.use('/api', petsitterRouter);


  app.get('/ui/*', (req, res) => {
    const filePath = req.url.replace('/ui', '');

    const absolutePath = path.join(__dirname, `../../frontend${filePath}`);
    


    if (utilidades.fileExists(absolutePath)) {
        res.sendFile(absolutePath);
      } else {
        res.status(404).sendFile(path.join(__dirname, '../../frontend/error404.html'));
      }


  });

setupSwagger(app);

const PORT = process.env.PORT || 3000;
// const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor esta corriendo en el puerto ${PORT}`);
});


/*function fileExists(filePath) {
    try {
      return fs.existsSync(filePath);
    } catch (err) {
      return false;
    }
  }*/

module.exports = app;