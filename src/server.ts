import * as express from 'express';

const app = express();
const port = 4000;

app.get('/', (request, response) => {
    response.send('Hello World!');
})

app.get('/bsm', (request, response) => {
    response.send('<br>BSM GENERATION\n MENTALIDADES:\n<br> Persistência<br>\nResponsabilidade Pessoal<br>\n' +
    '\nOrientação ao Futuro<br>\n Mentalidade de Crescimento<br><br> HABILIDADES:\n<br>Trabalho em Equipe\n' +
    'Atenção aos Detalhes<br>\n Proatividade<br>\n Comunicação');
})

app.get('/objetivos', (request, response) => {
    response.send('Desejo e desejei aprender:<br><br>Diagramas no Database\n<br> Banco de Dados \n <br>Linguagem MYSQL\n<br> Introdução ao Node.js')
})

app.listen(port, () => {
    console.log(`Port ${port} is running. `);
    
})