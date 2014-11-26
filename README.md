# Langmaster.io v2 - AngularJS #
> Web application for smarter memorizing vocabulary of a foreign language

**Beta version in progress**

This is an AngularJS rewrite of [Langmaster.io](http://langmaster.io) ([GitHub](https://github.com/samuelmatis/langmaster.io)).

### Technologies:
##### Front-end
  - AngularJS 1.3
  - Angular UI router 0.2
  - Restangular 1.4
  - Angular socket-io 0.6
  - Lo-Dash 2.4
  - Bootstrap sass 3.1

##### Back-end
  - Node.JS 0.10
  - Express 4.0
  - Mongoose 3.8
  - Passport 0.2
  - Lo-Dash 2.4
  - Socket.io 1.0

### Installation

```sh
$ git clone https://github.com/samuelmatis/langmaster-v2-angular
$ cd langmaster-v2-angular
$ npm install
$ grunt build
```

Built application is located in the `dist` folder

### Development

Serve the application (dev version):
```sh
$ grunt serve
```

Serve the application (production version):
```sh
$ grunt serve:dist
```

License
----

MIT
