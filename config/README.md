# Holds all types of configurations 

Configures workers, view engines, static files, global middlewares, router start points etc.

#### Example of global middlewares
###### If you dont setup a especific route for a middleware, it will be "active" for all routes after that point in the code, for example, bodyParser here will be running on every single request received
```
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
```
#### Router start point configuration
Uses the router that is being exported from /controllers/index.js
```
app.use(require('../controllers'))
```