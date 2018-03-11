# KotoCash

:dollar: Minimal [Koto](https://koto.cash/) library for Node.js

```
npm install koto-cash --save
```

> Note: This library has been succeeded by the Zcash library [zcash](https://github.com/montyanderson/stdrpc).

## API

### Koto.auto()

Returns a new `Koto` instance, after reading the username and password from `HOME/.koto/koto.conf`. You can then use all the RPC commands as normal.

``` javascript
const rpc = Koto.auto();

rpc.z_listaddresses().then(addresses => {
  console.log(addresses);
});
```

### new Koto(options)

Returns a new `Koto` instances, with the specified options.

#### options

Type: `object`

###### username

The RPC username.

Type: `string`

###### password

The RPC password.

Type: `string`

###### host

The RPC host.

Type: `string`

###### port

The RPC port.

Type: `number`

``` javascript
const Koto = require("koto-cash");

const rpc = new Koto({
  username: "__username__",
  password: "__password__"
});

rpc.z_listaddresses().then(addresses => {
  console.log(addresses);
});
```

``` javascript
[ 'zkNZ2Ap2YTYejG4pHbWTzxUfMazgj8rMksrn5A7obLSokYSbVWYuptkkeBydLe9F1SUkZ4e4wpcrFdSKVV2uJYUtXafnLgP' ]
```
