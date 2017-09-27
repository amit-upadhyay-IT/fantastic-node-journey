## Create certificate

1. Create a key (a .pem file)

```
openssl genrsa -out amit-key.pem 2048
```

The name of the key file is 'amit-key.pem', you can have key with whatever name you want. The above command is going to create a RSA private key which is 2048 bit long.

2. Now we create our csr file from our key.

```
openssl req -new -sha256 -key amit-key.pem -out amit-csr.pem

```
When you enter above command you will be asked some informations about company, etc. This is a certificate file using which we are trying to tell that I am a valid server trust me on all these basis. Now a 'amit-csr.pem' file is created based on the 'amit-key.pem' file.


3. Now create a certificate file (cert file):

```
openssl x509 -req -in amit-csr.pem -signkey amit-key.pem -out amit-cert.pem
```


4. We need all these files generated to work with our certificates. Once you have these three files then you are going to send this infomation to a public authority and then they are going to give you another file which says that "you are a valid user(every body can trust it)".

In case we don't have that then we need to create a `.pfx` file.

```
openssl pkcs12 -export -in amit-cert.pem -inkey amit-key.pem -certfile amit-cert.pem -out amit.pfx

```

Finally we are going to certify that the certificate we just created is valid. With the help of above command we have created a self signed certificate. You can read more about pfx file [here](https://nodejs.org/api/tls.html#tls_perfect_forward_secrecy).

5. Now we are going to create a TCP server using tls module.

Remember: I am telling you the very core concepts of node.js. You need worry about how to do these thing when you are working with express app. They are already doing all these.
