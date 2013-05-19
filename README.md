# keypair

Generate a RSA PEM key pair from pure JS

[![browser support](https://ci.testling.com/juliangruber/keypair.png)](https://ci.testling.com/juliangruber/keypair)

[![Build Status](https://travis-ci.org/juliangruber/keypair.png?branch=master)](https://travis-ci.org/juliangruber/keypair)

## Usage

```js
var keypair = require('keypair');

var pair = keypair();
console.log(pair);
```

outputs

```
$ node example.js
{ public: '-----BEGIN RSA PUBLIC KEY-----\r\nMIGJAoGBAM3CosR73CBNcJsLv5E90NsFt6qN1uziQ484gbOoule8leXHFbyIzPQRozgEpSpi\r\nwhr6d2/c0CfZHEJ3m5tV0klxfjfM7oqjRMURnH/rmBjcETQ7qzIISZQ/iptJ3p7Gi78X5ZMh\r\nLNtDkUFU9WaGdiEb+SnC39wjErmJSfmGb7i1AgMBAAE=\r\n-----END RSA PUBLIC KEY-----\n',
  private: '-----BEGIN RSA PRIVATE KEY-----\r\nMIICXAIBAAKBgQDNwqLEe9wgTXCbC7+RPdDbBbeqjdbs4kOPOIGzqLpXvJXlxxW8iMz0EaM4\r\nBKUqYsIa+ndv3NAn2RxCd5ubVdJJcX43zO6Ko0TFEZx/65gY3BE0O6syCEmUP4qbSd6exou/\r\nF+WTISzbQ5FBVPVmhnYhG/kpwt/cIxK5iUn5hm+4tQIDAQABAoGBAI+8xiPoOrA+KMnG/T4j\r\nJsG6TsHQcDHvJi7o1IKC/hnIXha0atTX5AUkRRce95qSfvKFweXdJXSQ0JMGJyfuXgU6dI0T\r\ncseFRfewXAa/ssxAC+iUVR6KUMh1PE2wXLitfeI6JLvVtrBYswm2I7CtY0q8n5AGimHWVXJP\r\nLfGV7m0BAkEA+fqFt2LXbLtyg6wZyxMA/cnmt5Nt3U2dAu77MzFJvibANUNHE4HPLZxjGNXN\r\n+a6m0K6TD4kDdh5HfUYLWWRBYQJBANK3carmulBwqzcDBjsJ0YrIONBpCAsXxk8idXb8jL9a\r\nNIg15Wumm2enqqObahDHB5jnGOLmbasizvSVqypfM9UCQCQl8xIqy+YgURXzXCN+kwUgHinr\r\nutZms87Jyi+D8Br8NY0+Nlf+zHvXAomD2W5CsEK7C+8SLBr3k/TsnRWHJuECQHFE9RA2OP8W\r\noaLPuGCyFXaxzICThSRZYluVnWkZtxsBhW2W8z1b8PvWUE7kMy7TnkzeJS2LSnaNHoyxi7Ia\r\nPQUCQCwWU4U+v4lD7uYBw00Ga/xt+7+UqFPlPVdz1yyr4q24Zxaw0LgmuEvgU5dycq8N7Jxj\r\nTubX0MIRR+G9fmDBBl8=\r\n-----END RSA PRIVATE KEY-----\n' }
```

## API

### keypair([opts])

Get an RSA PEM key pair.

`opts` can be

* `bits`: the size for the private key in bits. Default: **1024**.
* `e`: the public exponent to use. Default: **65537**.

## Installation

With [npm](http://npmjs.org) do

```bash
$ npm install keypair
```

## Kudos

To [digitalbazaar](https://github.com/digitalbazaar) for their
[forge](https://github.com/digitalbazaar/forge) project, this library is merely a
wrapper around some of forge's functions.

## License

BSD
