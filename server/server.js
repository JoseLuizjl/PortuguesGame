const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'joseluiz',
  password: '9k8h5f4w',
  database: 'my_user_db',
});

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados');
});

app.use(bodyParser.json());

app.use(cors());

app.all('/api/verify-email', (req, res) => {
  if (req.method === 'GET') {
    res.status(405).json('API');
  } else if (req.method === 'POST') {
    const { email } = req.body;
    const sql = 'SELECT COUNT(*) AS count FROM usuarios WHERE email = ?';

    db.query(sql, [email], (err, result) => {
      if (err) {
        console.error('Erro ao verificar o email:', err);
        res.status(500).json({ error: 'Erro do servidor' });
      } else {
        const count = result[0].count;
        if (count > 0) {
          res.json({ valid: true });
        } else {
          res.json({ valid: false });
        }
      }
    });
  } else {
    res.status(405).json({ error: 'Método não suportado.' });
  }
});

app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});
