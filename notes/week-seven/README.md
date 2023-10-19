## WHAT IS JSON?

Javascript Object Notation!

It is a way of representing an Object Literal as a string.

Why would we even want that?

Usually for data transfer. You will here the term serialization/deserialization.

## WHAT IS AJAX?

Asynchronous JavaScript and XML

Ajax, is not a technology in itself, but rather an approach to using a number of existing technologies together, including HTML or XHTML, CSS, JavaScript, DOM, XML, XSLT, and most importantly the XMLHttpRequest object.

## WHAT IS FETCH?

The Fetch API provides a JavaScript interface for accessing and manipulating parts of the protocol, such as requests and responses. It also provides a global fetch() method that provides an easy, logical way to fetch resources asynchronously across the network

alternatives....
XMLHttpRequest
Axios
JQuery

## HOW ARE WE GOING TO PUT IT ALL TOGETHER

1.  Create an express server
2.  Serve public content from the server
3.  Create API endpoins that serve json data
4.  Use FETCH to load data into the web page
5.  Render the data as HTML
6.  Expand our API to handle GET/:id and DELETE/:id
