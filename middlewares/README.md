# Express middlewares which process the incoming requests before handling them down to the routes

In this folder, you will store all your Express middlewares. The purpose of a middleware is to extract a common controller code, which should be executed on multiple requests and usually modifies the request and/or the response objects.

Just like a controller, a middleware should never directly access the database. Instead it should use your models for such tasks.

### Example

What differentiates a regular route to a middleware is the parameter next. next() refers to: If this function gets called run the "next" step on that route.

```
module.exports = (req, res, next) => {
    console.log(`${req.method} ON ${req.url}`)
    next()
}
```