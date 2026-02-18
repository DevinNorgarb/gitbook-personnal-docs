# CORS Errors

## What the heck is CORS? <a href="#what-the-heck-is-cors" id="what-the-heck-is-cors"></a>

**Cross-origin resource sharing** (**CORS**) is a mechanism that allows sharing resources outside of the domain from which the resource is first shared.[1](https://dhanrajsp.me/blog/the-tale-of-bypassing-cors#user-content-fn-1)

Suppose a user visits _`http://www.example.com`_ and the page attempts a cross-origin request to fetch the user's data from _`http://service.example.com`_. A CORS-compatible browser will attempt to make a cross-origin request to _`service.example.com`_ as follows.

*   The browser sends the GET request with an extra `Origin` HTTP header to _`service.example.com`_ containing the domain that served the parent page:

    ```
    Origin: http://www.example.com
    ```

The server at _`service.example.com`_ may respond with:

*   The requested data along with an **Access-Control-Allow-Origin (ACAO)** header in its response indicating the requests from the origin are allowed. For example in this case it should be:

    ```
    Access-Control-Allow-Origin: http://www.example.com
    ```
*   The requested data along with an **Access-Control-Allow-Origin (ACAO)** header with a wildcard indicating that the requests from all domains are allowed:

    ```
    Access-Control-Allow-Origin: *
    ```
* An error if the server does not allow a cross-origin request

When performing certain types of cross-domain Ajax requests, modern browsers that support CORS will initiate an extra "_**preflight**_" request to determine whether they have permission to perform the action. _Cross-origin requests are preflighted this way because they may have implications to user data._

```
OPTIONS /
Host: service.example.com
Origin: http://www.example.com
Access-Control-Request-Method: PUT
```

If _`service.example.com`_ is willing to accept the action, it may respond with the following headers:

```
Access-Control-Allow-Origin: http://www.example.com
Access-Control-Allow-Methods: PUT, DELETE
```

The browser will then make the actual request. If _`service.example.com`_ does not accept cross-site requests from this origin then it will respond with an error to the OPTIONS request and the browser will not make the actual request.

\
