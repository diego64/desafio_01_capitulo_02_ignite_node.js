<h1 align="center">
    <img alt="Ignite" title="Ignite" src=".github/ignite.png" />
</h1>

<h2 align="center"> Desafio 01 - Introdução ao SOLID </h2>

</br>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Sobre o desafio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Rotas da aplicação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Rodando a aplicação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Testes da aplicação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

## 📦 Tecnologias

- [Node.js](https://nodejs.org/en/)
- [Jest.js](https://jestjs.io/pt-BR/)
- [ESLint](https://eslint.org/)

## 📦 Sobre o desafio

Essa será uma aplicação de listagem e cadastro de usuários. Para que a listagem de usuários funcione, o usuário que solicita a listagem deve ser um admin (mais detalhes ao longo da descrição).

## 📦 Rotas da aplicação

### POST `/users`

A rota deve receber `name`, e `email` dentro do corpo da requisição para que seja possível cadastrar um usuário.

### PATCH `/users/:user_id/admin`

A rota deve receber, nos parâmetros da rota, o `id` de um usuário e transformar esse usuário em admin.

### GET `/users/:user_id`

A rota deve receber, nos parâmetros da rota, o `id` de um usuário e devolver as informações do usuário encontrado pelo corpo da resposta.

### GET `/users`

A rota deve receber, pelo header da requisição, uma propriedade `user_id` contendo o `id` do usuário e retornar uma lista com todos os usuários cadastrados. O `id` deverá ser usado para validar se o usuário que está solicitando a listagem é um admin. O retorno da lista deve ser feito apenas se o usuário for admin.

## 📦 Rodando a aplicação

Após fazer o clone da aplicação, rode o comando `yarn install` ou `npm install` para fazer a isntalação de todas as depedencias da aplicação. 

A aplicação está configurada para rodar na `https://localhost:3333`, utilize o insomnia, Postman ou outro programa que faça requisições a API para poder realizar as rotas.

Utilize o comando `yarn test` para que os testes possam ser executados.

OBS: O projeto veio com o ESlint configurado mas estou tendo um problema que não estou conseguindo usar, por este motivo as duas primeiras linhas dos arquivos estão desativando a ferramenta de análise de código estática.

## 📦 Testes da aplicação

- Teste do model
- Testes do repositório
- Testes de useCases
- Testes das rotas