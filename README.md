# 3813ICT Assignment2 

## GIT 

This project uses Git for version control management. First create a GitHub project, clone from the local to the previous branch. Save the data to the front end and everything is working properly and merged into the master. Use the following command to complete the version control work.<br/> Set name and email to be GitHub username and email<br/>

Git config --global user.name "vexx247"<br/>
Git config --global user.email "528643470@qq.com"<br/>
Cd 3813 - a2<br/>
Git add<br/>
Git commit -m<br/>
Git push -u origin master<br/>

## Data Structures
![Image text](https://github.com/vexx247/3813_a2/blob/master/img/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202019-10-03%20%E4%B8%8B%E5%8D%881.55.07.png)
The user entity uses the username as the primary key and stores the array of group IDs to which the user belongs. It also stores the email address and another tag to indicate if they are a group administrator. A group entity has an ID as its primary key and group name.
## REST API
---

group

URL
:api/groups</br>
Method:

  GET</br>
  URL Params</br>

  None
Data Params</br>

  None

Success Response:</br>
 `[{ "id": 1, "name": "group1" }, { "id": 2, "name": "group2" }, ]`
 
Error Response:</br>

  Code: 404 NOT FOUND <br />
  Content: `{ error : "Groups are not found" }`

    
Get a Group
----
  Returns json data about one group based on id.

URL:

  api/groups/:id</br>
Method:

  GET</br>
  


  Required:
 
   id=[integer]</br>

Data Params:

  None</br>

Success Response:

  Code: 200 <br />
    Content:{ "id": 1, "name": "group1" }
 
Error Response:

  Code: 404 NOT FOUND <br />
    Content:{ error : "Group doesn't exist" }

  OR

  Code: 401 UNAUTHORIZED <br />
    Content: { error : "You are unauthorized to make this request." }
    
 
 
Add a Group
  ----
  
  Returns json data about the added group.

URL

  api/groups

Method:

  POST
  URL Params

  None
  Data Params

  Content: { "id": 5, "name": "g5" }
Success Response:

  Code:200 <br />
    Content: { "id": 5, "name": "g5" }
 
Error Response:

  Code:404 NOT FOUND <br />
    Content: { error : "Group couldn't be add, group with the same id already exist" }

  OR

  Code: 401 UNAUTHORIZED <br />
    Content:{ error : "You are unauthorized to make this request." }
    
  
Delete a Group
----
  Returns json data about success.

URL

  api/groups/:id

Method:

  DELETE
  
URL Params

   Required:

 id=[integer]
 Data Params

  None
  
Success Response:

  Code:200 <br />
    Content:{"isSuccess":"true"}
 Error Response:

  Code: 404 NOT FOUND 
    Content:{ error : "Group couldn't be found" }

  OR

  Code: 401 UNAUTHORIZED <br />
    Content:{ error : "You are unauthorized to make this request." }
Get All Users
----
  Returns json data about all users in the system.

URL

  api/users

Method:

  `GET`
  
URL Params

  None

Data Params

  None

Success Response:

  Code:200 <br />
    Content:[{"username":"user1","email":"user1@user1.au","groupList":[],"adminGroupList":["g1","g2"],"ofGroupAdminsRole":true},      {"username":"","email":"paul@com.au","groupList":["g1","g2"],"adminGroupList":[],"ofGroupAdminsRole":true}]`
 
* **Error Response:**

  Code: 404 NOT FOUND <br />
    Content: `{ error : "Users are not found" }`

  OR

  Code:401 UNAUTHORIZED <br />
    Content:{ error : "You are unauthorized to make this request." }
    

 


## Angular Architecture

![Image text](https://github.com/vexx247/3813_a2/blob/master/img/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202019-10-03%20%E4%B8%8B%E5%8D%881.27.36.png)
![Image text](https://github.com/vexx247/3813_a2/blob/master/Assignment2.png)


    





