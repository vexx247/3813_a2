# 3813ICT Assignment2 

## GIT 

This project uses Git for version control management. First create a GitHub project, clone from the local to the previous branch. Save the data to the front end and everything is working properly and merged into the master. Use the following command to complete the version control work. Set name and email to be GitHub username and email

Git config --global user.name "vexx247"
Git config --global user.email "528643470@qq.com"
Cd 3813 - a2
Git add
Git commit -m
Git push -u origin master

## Data Structures
![Image text](https://github.com/vexx247/3813_a2/blob/master/img/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202019-10-03%20%E4%B8%8B%E5%8D%881.55.07.png)

## REST API
---
[Users](users.md) <br/>
[Groups](groups.md)

## Angular Architecture
![Image text](https://github.com/vexx247/3813_a2/blob/master/img/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202019-10-03%20%E4%B8%8B%E5%8D%881.27.36.png)

Angular front end has a few components like login, groups and users, all the components located within the app shell, it also include groups, users and message services to do the data CRUD mapping, the message service is purely used for information or debguging purpose. 
The models in Angular has user, group and channel which are reflected with the backend entities.

## State Change

fs module is used on server side to read file, transfer string into object with JSON.Parse method, and then modify the object and write back into the file located on hard drive. The parsed object can be sent back to frontend Angular with relavent api call.


