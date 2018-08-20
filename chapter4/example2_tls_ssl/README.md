# Secure Network Communication - TLS/SSL

The `tls` module provides an implementation of the **Transport Layer Security (TLS)** and **Secure Socket Layer (SSL)** protocols that is built on top of `OpenSSL`. 

The `TLS/SSL` is a `public/private key` infrastructure (PKI). For most common cases, each client and server must have a private key. Read [here](https://nodejs.org/api/tls.html#tls_tls_ssl_concepts)

- To create a private key, on Command Line:
> openssl genrsa -out ryans-key.pem 2048
- Certificates are containers for the public/private key. This is usually either self-signed or signed by a Certification Authority.
- To create the certificate, we first need a "Client Signing  Request" (CSR) file:
>openssl req -new -sha256 -key ryans-key.pem -out ryans-csr.pem
- To create a self signed certificate with the CSR,
> openssl x509 -req -in ryans-csr.pem -signkey ryans-key.pem -out ryans-cert.pem
- Alternatively, you can get your certificate signed by a Certification Authority.

## Communication over HTTP vs Communication over HTTPS
In HTTPS the communication between server and client is encrypted. The communication between the server and client goes on based on a secure encrypted stream, i.e. the server and client only they can understand things. The encryption happen on the server and the client using a certificate. In the browser you can see the certificate details too by clicking on the 'https'.

#### Why is this important? Where is it used?

There is something called IP sniffing, so people can sniff your IP address and see what packets are being transmitted from your machine to the outside (server) machine.

For example: You have AWS cloud server that you are trying to push your data to (which is a secure server). But if you are making your data from your client to your server go via a http (or a plain protocol where there is no encryption involved) anybody who can see your packets are able to decode what you are trying to send it along with that packet.
The best example for this is [Fidler](), it is basically a web debugging proxy. These modern debugging tool are so awesome that you can debug anything on the client side. It's always best to have server side validation as well as client side validation irrespective of your server being RESTFUL api.:W

The next level of security hacking that can happen is that when you are connected to a coffee-shop WiFi, where somebody is sniffing all your connection that is going from your machine through the router and they can identify what is happening. The tool like Fidler does exactly like that. It can inspect all your web request that leave your browser and then which goes to your server. It is inbetween the browser and your server. So this is where the Secure Socket Layer communication comes into picture. So using SSL security layer, you can send data from client to server in encrypted stream and that is what we are trying to acheive using th 'tls' module.

Some of the companies only have their login page with TLS/SSl secured (i.e. https). They don't want all the pages in the application to have https. The reason is that because it takes time for encryption and decryption from the client and server, we will probably end up wasting few milliseconds on each request.

[Here](https://github.com/ZiCog/node-tls-example) is a more elegant way of setting up the tls/ssl.

[tls-client.js](https://github.com/ZiCog/node-tls-example/blob/master/tls-client.js)

[tls-server.js](https://github.com/ZiCog/node-tls-example/blob/master/tls-server.js)

### How does tls/ssl work?

[Link](https://security.stackexchange.com/questions/20803/how-does-ssl-tls-work)
