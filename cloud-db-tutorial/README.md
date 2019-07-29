# How to setup a free cloud based database server

For you to be able to create a database server cloud instance you will have to create an account on [clever cloud](https://clever-cloud.com/)

Once you are all done creating your account head over to [the console](https://console.clever-cloud.com/)

---

##### Creating you MongoDB instance

What we are looking for here is creating a new addon

1. Make sure you are on the console page
2. Click on personal space
3. Click on the "+ Create..." button
4. Choose "an addon"
5. Pick your favorite database server (in the case of this tutorial we wil be using MongoDB)
6. Choose your kind of server (peanut servers are free and have 500mb of data!)
7. Hit next
8. Pick a name and zone
9. You are all done

![alt text](../readme-images/tutorial-gif.gif)

Get you database server info on the information tab (mongoose uses the **MONGODB_ADDON_URI** field to connect)
