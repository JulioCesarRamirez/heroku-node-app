const http = require("http");

http
  .createServer((req, res) => {
    let salida = {
      nombre: "Julio",
      edad: 26,
      url: req.url,
    };
    // res.write("Hola mundo");
    res.write(JSON.stringify(salida));
    res.end();
  })
  .listen(4000);
console.log("Escuchando el puerto 4000");
