"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var port = 4000;
app.get('/', function (request, response) {
    response.send('Hello World!');
});
app.get('/bsm', function (request, response) {
    response.send('<br>BSM GENERATION\n MENTALIDADES:\n<br> Persistência<br>\nResponsabilidade Pessoal<br>\n' +
        '\nOrientação ao Futuro<br>\n Mentalidade de Crescimento<br><br> HABILIDADES:\n<br>Trabalho em Equipe\n' +
        'Atenção aos Detalhes<br>\n Proatividade<br>\n Comunicação');
});
app.get('/objetivos', function (request, response) {
    response.send('Desejo e desejei aprender:<br><br>Diagramas no Database\n<br> Banco de Dados \n <br>Linguagem MYSQL\n<br> Introdução ao Node.js');
});
app.listen(port, function () {
    console.log("Port ".concat(port, " is running. "));
});
