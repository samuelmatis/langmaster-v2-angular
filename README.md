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

The MIT License (MIT)

Copyright (c) 2014 Samuel Matis

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
