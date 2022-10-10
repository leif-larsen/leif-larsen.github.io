---
title: "24 Days of Hello World   Nodejs"
date: "2015-12-06"
---

Today we move into a technology, rather than a language itself. Originally this post was going to be about JavaScript, but I thought it would be better to show off Node.js. Node.js is an open-source, cross-platform runtime environment, created to develop server-side web applications.

Node is designed to optimize an applications throughput for real-time applications. It does this by utilizing non-blocking I/O API, and an event-driven architecture. To execute code it relies on Google V8 JavaScript engine, and most of the basic modules are written in JavaScript.

**History**

Node.js was initially released in 2009. It was created by Ryan Dahl, as well as other developers at Joyent. The inspiration behind Node was file upload progress bar, from Flickr. Since the progress bar always had to query the server to know how much of the file had uploaded, Ryan Dahl thought there had to be a better way.

By 2011 “npm” was introduced. This is a package manager, which allows publishing and sharing open-source Node.js libraries. It was designed to simplify installation, uninstallation and updates of libraries. 2011 was also the year when Node was built to support Windows.

**Typical uses**

Some of the typical applications Node.js is used for is creating REST APIs, creating Real-Time services, building microservices and tooling. Not really a surprise there, based on what it is designed to do.

**Example Hello World**

To run this example you will need Node.js installed. If you go to its official page ([nodejs.org](https://nodejs.org/en/)) there should be download links to the OS your using on the front page. Download it and install it with default settings. You can verify that the installation succeeded by opening a command prompt and run

node -v

Which, if correctly installed, should output the currently installed version.

Next we want to create a file, called HelloWorld.js, which should look like this:

var http = require("http"); http.createServer(function(request, response) { response.writeHead(200, {"Content-type": "text/plain"}); response.write("Hello, World!"); response.end; }).listen(8888);

This creates a basic server, which responds to requests with “Hello, World!”. If you open a browser, and go to “[localhost:8888](http://localhost:8888)“, you should get “Hello, World!” in you browser windows.

Node.js is a technology I’ve been meaning to learn for quite some time now. For now it looks like next year might be the year I actually find time to learn it properly. Have you used Node.js? For what purpose?
