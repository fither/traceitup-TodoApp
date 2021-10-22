# Speed Tail - Interview Project
## Description
Speed Tail is an uncompleted Todo Application for you to show your both Vue Javascript Framework skills and programming skills. The project already has a base and some completed features.
Completed features and remaining features, to be completed by you, are explained in the next section. Before diving into details, go ahead and fork this repo. Afterwards, you should
send an e-mail to *teknik@hemenyolda.com* which includes the forked repo's link. This will enable us to track your progress.

## Features
Here are the completed features:

1. List todo items.
2. Create a new todo item.

And the features that are expected to be completed by you:

1. Update a todo item in the list. 
2. Reorder a todo item in the list. 
3. Add a state field to todo item, such as Pending, In Progress and Done.

Detailed descriptions of each remaining features are given in the next section.

### Update a todo item in the list
For this feature, you are expected to create another component similar to ```src/pages/todo/Create.vue```. When user starts editing the todo item, the User Interface (UI) of the item should be 
replaced with a form where the user can edit the item. After user updates the todo item, form should be replaced with the original UI. As it is done at the creation of todo item, you are expected to 
send the updated todo item to the server by a HTTP request. You can find the detailed REST API in the following sections.

### Reorder a todo item in the list
Items in the list shall be reorderable by drag and drop User Experience (UX) logic. You are not expected to send the updated order to the server.

### Add a state field to todo item
Current implementation stores todo item as a string. You are expected to extend the todo item with additional property called state. Hence a todo item should have a name and a state. You are free to
choose possible states as you wish. This state property should also be editable by user like name property. This feature will break most of the other parts and tests. You should firstly
update the tests according to the new logic, then make the updated tests pass. You can implement this feature before others since this will also break them.

## Development Philosophy
We have created a baseline for the project in order to give you a view about the architecture design that we are expecting to observe from the outcome. This architecture design includes
naming conventions, developing with TDD methodology, extracting logics into components and seperating the data management from UI logic. You should examine the whole project and follow 
the conventions that are used in the development. For example, you should use **vuex store** for data management and implement tests similar to already implemented tests. 
Another philosophy and the most important philosophy you are expected to follow is **TDD**. You should complete the remaining features with TDD methodology in mind. That are being said, you are free to change how
the architecture is impletented, like file structure, creating additional object or inserting additional properties into object.

We will be following your repo. In order to help us about tracking your status in the project, we need you to use github actively. This includes meaningfull commit messages and keeping track of
tasks' statuses. You can use github projects feature to track your tasks.

To sum up, these are the factors that we will take into considerations while we are reviewing the project
* Abilitiy of using Vue
* TDD
* Extracting logics into components
* Naming conventions
* Planning and following the tasks
* Atomic commit messages
* Ability of understanding the English

## REST API
You have a basic server that resides in your browser and is implemented by using *Service Worker* technology of the javascript engines. It basically intercepts your request and return some responses.

There is only one endpoint that you can send requests to:

| endpoint | method | description | body example | response example |
|   ---    | ---    |   ---       | ---  |  ---     |
| /todos   | GET    | a list of todo item | -   | ```['todo name 1', 'todo name 2']```
|          | POST   | creates a todo item | ```{"name": "todo name"}``` |   ```{"message":"success"}```
|          | PUT    | updates a todo item | ```{"name": "updated name"}```  | ```{"message":"success"}```

## Final Words
In order to measure the effectiveness of this project, we are happy to listen your feedbacks like difficulties you have encountered, what can be done better, etc.
