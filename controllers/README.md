# Defines your app routes and their logic

This is the folder where you will be defining all the routes that your app will serve. Your controllers will handle web requests, serve your templates to the user and interact with your models to process and retrieve data. It’s the glue which connects and controls your web app.

Usually you will have at least one file for each logical part of your application. For example, one file to handle comments action, another file to handle requests about users and so on. It’s a good practice that all routes from the same controller begin with the same prefix. For example /comments/all and /comments/new.

It’s sometimes hard to decide what should go into a controller and what should go into the model. A best practice is that a controller should never directly access the database. It should never call methods like “write”, “update”, “fetch” which most database drivers provide. Instead it should rely on model methods. For example if you have a car model, and the you want to mount 4 wheels to the car, the controller will not call db.update(id, {wheels: 4}) but instead it will call something like car.mountWheels(id, 4).

### Structure 

As all routes and their controllers will be store here, they need to be well organized, so every route must have its own folder, for example: A client route, this route, will have the responsibility of viewing, creating and updating data from a client, so there must be a **client** folder and inside that folder we should have a clientHandler.js that will import our functions and handlers to expecific methods. Example: createClient -> router.post // updateClient -> router.put

### Setting up a route

To setup a route, on our index.js "root" file, we must first import the methods from the controller folders (client folder) then pick a route in whitch the'll live in . These will be exported inside the controllers folders by the name "controller name" then Handler, clientHandler in the case of the client.

```
const client = require('./pokemon/pokemonHandler')

router.use('/client', client.router)
```

If we would like to add a middleware to our route in a more generic way, this is where we should add it. Please note that if we do this, all methods inside the client router will have this middleware. In the case of your router.get router.post and router.put would have to get through the logMiddleware function.

```
router.use('/client', logMiddleware, client.router)
```

### Setting up a handler inside a controller folder

All the handler does is match the routes to the HTTP methods and their functions. If we would like to add a middleware to a expecific route and method this is where we would do it. 

```
router.get('/:id', getFunction)
router.post('/', createFunction)
router.put('/:id', updateFunction)
```

And for example: If we only wanted authed clients to edit a user.

```
router.get('/:id', getFunction)
router.post('/', createFunction)
router.put('/:id', checkAuthMiddleware, updateFunction)
```

### Setting up the functions

For example, using one of our models to access a database and get some data.

Please note that here, we are using the res.render method, this "invokes" a view by the name client and sends a data json that we got from consulting our db, this could also return a json if we were making an API.

```
const clientModel = require('../../models/client')

const root = async (req, res) => {
  try {
    const name = req.params.id
    const client = await clientModel.get(id)
    if (client === 'Not found')
      res.status(404).send('Client Not Found')
    else {
      const content = 'Name ' + client.name + ' powerlevel: ' + client.powerLevel
      res.render('client', { title: client.name, message: content })
    }
  }
  catch (err) {
    console.log(err)
    res.status(500).send('Error')
  }
}

module.exports = root

```