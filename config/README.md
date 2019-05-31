# Holds all types of configurations 

Configures workers, view engines, static files, global middlewares, router start points etc.

#### Example of global middlewares
```
//bodyParser will be running on every single request received
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
```
#### Router start point configuration

```
app.use(require('../controllers'))
```