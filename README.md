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
**Get All Groups**
----
  Returns json data about all groups in the system.

* **URL**

  api/groups

* **Method:**

  `GET`
  
*  **URL Params**

  None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `[{ "id": 1, "name": "g1" }, { "id": 2, "name": "g2" }, { "name": "asf", "id": 3 }]`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Groups are not found" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "You are unauthorized to make this request." }`
    
**Get a Group**
----
  Returns json data about one group based on id.

* **URL**

  api/groups/:id

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ "id": 1, "name": "g1" }`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Group doesn't exist" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "You are unauthorized to make this request." }`
    
 
 
**Add a Group**
  ----
  
  Returns json data about the added group.

* **URL**

  api/groups

* **Method:**

  `POST`
  
*  **URL Params**

  None
  
* **Data Params**

  **Content:** { "id": 5, "name": "g5" }

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ "id": 5, "name": "g5" }`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Group couldn't be add, group with the same id already exist" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "You are unauthorized to make this request." }`
    
  
**Delete a Group**
----
  Returns json data about success.

* **URL**

  api/groups/:id

* **Method:**

  `DELETE`
  
*  **URL Params**

   **Required:**

 `id=[integer]`
 
* **Data Params**

  None
  
* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{"isSuccess":"true"}`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Group couldn't be found" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "You are unauthorized to make this request." }`
**Get All Users**
----
  Returns json data about all users in the system.

* **URL**

  api/users

* **Method:**

  `GET`
  
*  **URL Params**

  None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `[{"username":"super","email":"super@com.au","groupList":[],"adminGroupList":["g1","g2"],"ofGroupAdminsRole":true},      {"username":"paul","email":"paul@com.au","groupList":["g1","g2"],"adminGroupList":[],"ofGroupAdminsRole":true}]`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Users are not found" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "You are unauthorized to make this request." }`
    
**Get a User**
----
  Returns json data about a single user.

* **URL**

  api/users/:username

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `username=[string]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{"username":"super","email":"super@com.au","groupList":[],"adminGroupList":["g1","g2"],"ofGroupAdminsRole":true}`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "User doesn't exist" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "You are unauthorized to make this request." }`
    
 
 
**Add a User**
  ----
  
  Returns json data about the added user.

* **URL**

  api/users

* **Method:**

  `POST`
  
*  **URL Params**

  None
  
* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{"username":"myuser","email":"myuser@com.au","groupList":[],"adminGroupList":["g1","g2"],"ofGroupAdminsRole":true}`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "User couldn't be add, user with the same user name already exist" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "You are unauthorized to make this request." }`
    
**Update a User**
----
  Returns json data about the updated user.

* **URL**

  api/users/:username

* **Method:**

  `PUT`
  
*  **URL Params**

   **Required:**

 `username=[string]`
 
* **Data Params**

  **Content:** `{"username":"myuser","email":"myuser@com.au","groupList":[],"adminGroupList":["g1","g2"],"ofGroupAdminsRole":true}`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{"username":"myuser","email":"myuser@com.au","groupList":[],"adminGroupList":["g1","g2"],"ofGroupAdminsRole":true}`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "User couldn't be found" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "You are unauthorized to make this request." }`
  
**Delete a User**
----
  Returns json data about success.

* **URL**

  api/users/:username

* **Method:**

  `DELETE`
  
*  **URL Params**

   **Required:**

 `username=[string]`
 
* **Data Params**

  None
  
* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{"isSuccess":"true"}`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "User couldn't be found" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "You are unauthorized to make this request." }`


## Angular Architecture

![Image text](https://github.com/vexx247/3813_a2/blob/master/img/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202019-10-03%20%E4%B8%8B%E5%8D%881.27.36.png)
![Image text](https://github.com/vexx247/3813_a2/blob/master/Assignment2.png)


    





