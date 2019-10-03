# A2 Chat Application

## GIT Process Approach

The layout of GIT repo: it's a standard Angular project, and with backend Node/Express in server folder under Angular APP folder.
The angular part has several compoents and routing and node side has all the api file with routing. 

The Process of version control is : Create a remote GitHub project, and clone one on local PC, branch from master for front end, and develop the front end with in-mermory data store, tested all ok, merge back to master, and then push backto remote in GitHub. Do the sam ething for the backend to build all the REST APIs, test each REST API in Postman to make sure they are all working as expected before commit and merge into master.  

## Data Structures

User entity has username as primary key, has stored the array of groups id for which the user belonbgs to. it also stores email address and another flaag to indicate if they are group admin themself.

Group entity has an id as it primary key, and groupname.

## REST API
---
[Users](users.md) <br/>
[Groups](groups.md)

## Angular Architecture

Angular front end has a few components like login, groups and users, all the components located within the app shell, it also include groups, users and message services to do the data CRUD mapping, the message service is purely used for information or debguging purpose. 
The models in Angular has user, group and channel which are reflected with the backend entities.

## State Change

fs module is used on server side to read file, transfer string into object with JSON.Parse method, and then modify the object and write back into the file located on hard drive. The parsed object can be sent back to frontend Angular with relavent api call.


