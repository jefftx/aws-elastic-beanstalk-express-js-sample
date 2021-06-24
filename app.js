const express = require('express');
const app = express();
const port = 8080;

<<<<<<< HEAD
app.get('/', (req, res) => res.send('This is my tutorial-Learning about AWS CI/CD'));
=======
app.get('/', (req, res) => res.send('This is my first tutorial'));
>>>>>>> 350ae17fc3ff935fffb7af80d727b72737b35962

app.listen(port);
console.log(`App running on http://localhost:${port}`);
