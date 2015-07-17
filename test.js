var crypto = require('crypto');
var keypair = require('./index.js');
var test = require('tape');

test('keypair', function (t) {
  var pair = keypair();
  t.ok(pair.private, 'private key');
  t.assert(/BEGIN RSA PRIVATE KEY/.test(pair.private), 'private header');
  t.ok(pair.public, 'public key');
  t.assert(/BEGIN RSA PUBLIC KEY/.test(pair.public), 'public header');
  t.end();
});

test('test against crypto library', function(t) {
  var pair = keypair();
  var testString = 'Hello, world'
  var encrypted = crypto.publicEncrypt(pair.public, new Buffer(testString));
  var decrypted = crypto.privateDecrypt(pair.private, encrypted);
  t.equal(decrypted.toString(), testString);
  t.end();
});

test('ensure OpenSSH line is generated when the option is passed', function(t) {
  var pair = keypair({openSSH: true});
  t.ok(pair.openSSH, 'OpenSSH');
  t.end();
});
