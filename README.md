# Associations_with_sequelize

![image](https://github.com/Montu-Gohain/Associations_with_sequelize/assets/76866991/82cd75ae-f4a4-4ac3-8ac1-0396e748da31)

**purpose** : In production grade projects we often use SQL databases. So To effeciently communicate with the database we use ORM's which reduces writing simple queries on repeat. That's why let's learn how to use Sequelize ORM Step by step , along with creating a CRUD application in Express js With Typescript

**Packages Used :**

> Express, cors, dotenv ,pg, pg-hstore, sequelize, compression , body-parser & nodemon with their types as dev-dependencies

Let's start with this command

```ts
  npm init -y
```

```ts
  npm install express dotenv pg pg-hstore sequelize cors compression body-parser ts-node typescript morgan
```

```ts
  npm install -D nodemon @types/express @types/cors @types/sequelize @types/body-parser @types/compression @types/morgan
```

_Note_ : Since I am using PostgreSQL as my RDBMS , so i've installed pg and pg-hstore , these are database connectors. In case you want to use mysql , then you can use mysql2 connector

---

To execute this project in your local machine we can provide these environment variables and you are quite ready to start the project

```js
//   To Start the project
npm run start

// To run the project in dev Environment
run run dev
```
