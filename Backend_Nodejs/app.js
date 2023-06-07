const express = require('express');
const cors = require('cors'); 
const Log = require('./modules/middleware/Logger.js');
const Auth = require('./modules/middleware/Auth.js');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(Log);
app.use(Auth);

// Set up the routes
const addUser = require('./modules/users/post.js');
app.post('/users', addUser);
const updateUser = require('./modules/users/put.js');
app.put('/users/:username', updateUser);

const login = require('./modules/users/login.js');
app.post('/login', login);

const logout = require('./modules/users/logout.js');
app.post('/logout', logout);

const getStudent = require('./modules/students/get');
app.get('/students', getStudent);

const addStudent = require('./modules/students/post');
app.post('/students', addStudent);

const updateStudent = require('./modules/students/update');
app.put('/students/:id', updateStudent);

const deleteOneStudent = require('./modules/students/delete.js');
app.delete('/students/:id', deleteOneStudent);

const getOneStudene = require('./modules/students/getOne');
app.get('/students/:id', getOneStudene);

// Start the server
const port = 3000;
app.listen(port, () => {
console.log(`Server is running on port ${port}`);
});
  