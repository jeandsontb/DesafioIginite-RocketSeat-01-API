const express = require('express');
const cors = require('cors');
const { v4: uuidV4 } = require('uuid');

const app = express();
app.use(cors());
app.use(express.json());

const users = [];

const checkUserExistsAccount = (req, res, next) => {
  const { username } = req.headers;

  const userFilter = users.find(user => user.username === username.toLowerCase());

  if(!userFilter) {
    return res.status(404).json({error: 'username does not exists'});
  }

  req.user = userFilter
  return next();
}

app.post('/users', (req, res) => {
  const { name } = req.body;
  const { username } =req.headers;
  const userName = username.toLowerCase();

  const usernameExists = users.some((name) => name.username === username);

  if(usernameExists) {
    return res.status(400).json({error: 'Username already in use'});
  }

  const dataUser = {
    id: uuidV4(),
    name,
    username: userName,
    todos: []
  }

  users.push(dataUser);

  return res.status(201).json(dataUser);
})

app.get('/todos', checkUserExistsAccount, (req, res) => {
  const { user } = req;

  return res.json(user.todos);
})

app.post('/todos', checkUserExistsAccount, (req, res) => {
  const { title, deadline } = req.body;
  const { user } = req;
  
  const totosInsert = {
    id: uuidV4(),
    title,
    done: false,
    deadline: new Date(deadline),
    created_at: new Date()
  }

  user.todos.push(totosInsert);

  return res.status(201).json(totosInsert);
})

app.put('/todos/:id', checkUserExistsAccount, (req, res) => {
  const { title, deadline } = req.body;
  const { id } = req.params;
  const { user } = req;

  const updateUser = user.todos.filter(todo => todo.id === id)

  if(updateUser.length > 0) {
    updateUser[0].title = title;
    updateUser[0].deadline = deadline;
  } else {
    return res.status(404).json({error: 'Todo does not found'});
  }
  
  return res.status(200).json({message: 'Updated with of success'})
})

app.patch('/todos/:id/done', checkUserExistsAccount, (req, res) => {
  const { id } = req.params;
  const { user } = req;

  const updateDone = user.todos.filter(todo => todo.id === id );

  if(updateDone.length > 0) {
    updateDone[0].done = true;
  } else {
    return res.status(404).json({errors: 'Updated faill'});
  }

  return res.status(200).json({message: 'updated success'});
})

app.delete('/todos/:id', checkUserExistsAccount, (req, res) => {
  const { id } = req.params;
  const { user } = req;

  for(let i=0; i<user.todos.length; i++) {
    console.log(user.todos[i].id)
    if(user.todos[i].id === id) {
      user.todos.splice(i, 1);
    }
  }

  return res.status(204).json({message: 'Todo removed with success'});

})

module.exports = app;