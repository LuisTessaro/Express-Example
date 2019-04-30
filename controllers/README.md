# Defines your app routes and their logic

This is the folder where you will be defining all the routes that your app will serve. Your controllers will handle web requests, serve your templates to the user and interact with your models to process and retrieve data. It’s the glue which connects and controls your web app.

Usually you will have at least one file for each logical part of your application. For example, one file to handle comments action, another file to handle requests about users and so on. It’s a good practice that all routes from the same controller begin with the same prefix. For example /comments/all and /comments/new.

It’s sometimes hard to decide what should go into a controller and what should go into the model. A best practice is that a controller should never directly access the database. It should never call methods like “write”, “update”, “fetch” which most database drivers provide. Instead it should rely on model methods. For example if you have a car model, and the you want to mount 4 wheels to the car, the controller will not call db.update(id, {wheels: 4}) but instead it will call something like car.mountWheels(id, 4).