<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

## Parcial explicacion
Este es un tabajo como se ve basado en el framework de nest el cual es una página de venta de organos con cliente, proveedor y organos.
A continuación una explicacion de como funciona el código:
Se tienen 3 entidades:
## Auth
auth(el inicio de sesion y login que crea una entidad llamada cliente y le asigna el rol: "cliente" y para hacer la entrega de este parcial tambien asgina el rol de "admin").
## Organs
organs(el cual tiene el CRUD, entidad y dtos para crear organos, ademas de tener una relacion oneToMany con suppliers).
## Suppliers
suppliers(el cual tiene el CRUD, entidad y dtos, lo que hace el create de esta clase es crear un cliente con el rol de "supplier" que tambien lo añade al repositorio de "suppliers" con el cuel se podra, borrar,actualizar y demas)
## Consideraciones
Este entregable tiene varios guards, con los cuales:

Para auth(client)
-Solo el admin puede ver todos los usuarios
-Solo el admin y el cliente con el mismo id pueden buscar un cliente con id
-Solo el admin y el cliente con el mismo id pueden actualizar la info con id
-Solo el admin puede borrar clientes

Para organos(organs)
-Solo los proveedores y admin pueden crear organos
-Solo puede actualizar organos los proveedores y admin
-Solo pueden borrar organos los proveedores y admin

Para proveedores(suppliers)
-Solo el admin puede ver todos los proveedores
-Solo el admin o proveedor con mismo id pueden buscar un cliente con id
-Solo el admin o proveedor con mismo id puede actualizar datos 
-Solo el admin puede borrar proveedores
## Requerimientos
En el enunciado se pidieron 2 cosas, una opcion de relocalización para clientes y una forma para garantizar la calidad de los organos, para lo cual se tiene lo siguiente: Para obtener la opcion de relocalización se hizo un método que lo que hace es cambiar la localización de los clientes por medio del siguiente url: localhost:3000/auth/country/id del cliente y para garantizar la calidad de los organos se tiene un nuevo parametro isgoodQ, el cual es un boolean que al crearse se inicia en true, y al cabo de 24h cambia a false con un trigger en la base de datos o si se necesita el admin lo puede cambiar




