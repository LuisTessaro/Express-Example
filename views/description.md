Provides templates which are rendered and served by your routes

This folder contains all the templates which are rendered by your application. This is the place where usually the designers in your team will work.

You would like to have one sub-folder for templates corresponding to each of your controllers. This way, you will group the templates for the same tasks together.

Choosing a template language can be confusing because there are so many choices. Our favorite template languages, and the ones we use all the time, are Jade and Mustache. Jade is great for generating html pages. It makes writing html tags much shorter and more readable. It also uses JavaScript for conditions and iteration. Mustache on the other hand, is focused on rendering any kind of template and it provides the minimum logical operators as possible with very little way of processing your data. This makes it excellent for writing very clean templates, which are focused on presenting your data instead of processing it.

A best practice for writing good templates is to avoid doing any processing in the templates. If your data needs to be processed before it is presented, do it in your controller. Also, avoid adding too much logic, especially if this logi can be moved to the controller.