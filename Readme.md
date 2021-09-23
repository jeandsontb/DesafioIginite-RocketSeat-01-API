<h1 align="center">
  API CRUD DE USUÁRIOS
</h1>

<h4 align="center"> 
	Esta API foi desenvolvida no desafio do curso Ignite Node.JS da RocketSeat 
</h4>

<p align="center">
  <img alt="Repository size" src="https://img.shields.io/static/v1?label=Last%20commit&message=August&color=yellowgreen&style=for-the-badge&logo=Slack">
</p>

## 💻 Sobre o Projeto

O desafio consiste em criar um API de usuários armazenando o nome e username como fazer todo o CRUD de usuários:
  * Criar um novo todo
  * Listar todos os todos
  * Alterar um title e deadline de um todo existente
  * Marcar um todo como feito
  * Excluir um todo
Tudo isso para cada usuário em específico (o username será passado pelo header).

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js][nodejs]
- [Express][express]
- [UUID][uuid]
- [Vscode][vscode]

## 💡 Como executar o projeto

Nesse repositório está a aplicação é necessário clonar o repositório para a sua máquina e seguir as informações abaixo:

BACKEND:

```bash

01 - Acessar a pasta do projeto no terminal e rodar o comando -  npm install

02 – Rodar o comando " yarn dev " ou " npm run dev " para startar a aplicação

## Rotas para api

# Rota padrão
* http://localhost:3300

* Criar um usuário - POST /users
  - passar o objeto name e no headers passar o username
  {
	  "name": "Jeandson Tenorio"
  }

* Mostrar os usuários - GET /todos

* Inserir todo para o usuário - POST /todos
  - passar o objeto para adicionar todo
  {
    "title": "Verificar o estudo",
    "deadline": "2021-09-26"
  }

* Alterar um todo - PUT /todos/ passando o id do todo
  - passar o objeto para alterar o todo
  {
	"title": "Estudar",
	"deadline": "2021-09-30"
  }

* Alterar para um todo realizado - PATCH /todos/ passando o id do todo

* Deletar um todo do usuário - DELETE /todos/ passando o id do todo

Observação: Com excessão da rota POST /users , todas as outras deve passar o username no headers da requisição.

```
```

## 📝 Feito por Jeandson Tenorio 👋🏽 [contato!](https://www.linkedin.com/in/jeandson/)

[nodejs]: https://nodejs.org/
[express]: https://expressjs.com/pt-br/
[uuid]: https://www.npmjs.com/package/uuid
[Vscode]: https://code.visualstudio.com/