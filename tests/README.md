# Tests everything which is in the other folders

Every project needs tests, and you need all tests to be together. To help with managing them, you will separate them in several sub-folders.

* controllers
* helpers
* models
* middlewares
* integration
* ui

Controllers, helpers, models and middlewares are pretty clear. They test the code from their respective counterparts at the root of your project. In each folder you should have one file for each file in the original folders and it usually has the exact same name. This makes it easier to find and maintain your tests.

In the 4 folders above, most of your tests will be unit tests, which means that you are testing your code isolated from the rest of the application. However, the integration folder contains test which will ensure that all your application parts work correctly together. For example, it will have tests which will check that the right middlewares are loaded at the right time. These tests are usually slower than your unit tests.

The UI tests in the ui folder are similar to the integration tests because they also ensure that everything works well together. However, they are usually executed in the browser and they simulate the behaviour of a real person working with your application. Usually, they are even slower than the integration tests.

It’s good practice that your unit tests in the controllers, helpers, models and middlewares folders cover as much code as possible. Try to test every edge case. Your integration tests don’t need to be this extensive. You’ve already covered the functionality. You only need to ensure that all different parts of your application work together. The UI tests don’t need to test every edge case either, but they need to ensure that every UI component is working.