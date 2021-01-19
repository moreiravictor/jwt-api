# teste-sip

## Install:

#### First, install the dependencies:
```bash
~$ npm install
```


#### Start the Mysql service: 
Then, create a user. If you don't want to tweak up the config files, create a user named 'postgres' and use de password 'admin'.

#### Go to the root folder and run the DB Migrations.
 ```bash
~$ npx sequelize db:create
~$ npx sequelize db:migrate
 ```
#### Run the server:
 ```bash
~$ npm start
 ```
 
 ## Routes
 
 ### 1. POST Login (/login)

You must use the token it retrieves to make the other requests sending the header 'x-access-token'
 
 Example Body:
 ```bash
{
    "username": "teste",
    "password": "teste"
}
 ```
  Response:
 ```bash
{
    "auth": true,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE2MTEwODI2MTcsImV4cCI6MTYxMTA4MjkxN30.SACMeP7zniVjgl2WJQOLvonCrh_Q9g05Dcm6-GarSYs"
}
 ```
 
  ### 2. GET Product by ID (/product/:product_id)
 
  Response:
 ```bash
{
    "product_id": 1,
    "image": "src/img/222.jpg",
    "name": "sabbb",
    "value": 222.9
}
 ```
 
   ### 3. GET all Products (/product)
 
  Response:
 ```bash
[
    {
        "product_id": 2,
        "image": "src/img/guitar.jpg",
        "name": "guitar",
        "value": 12343.33
    },
    {
        "product_id": 3,
        "image": "src/img/222.jpg",
        "name": "sabbb",
        "value": 222.9
    },
    {
        "product_id": 1,
        "image": "src/img/222.jpg",
        "name": "sabbb",
        "value": 222.9
    }
]
 ```
 
  ### 4. POST product (/product)
  
   Example Body:
 ```bash
{
    "image": "src/img/image.jpg",
    "name" : "name",
    "value": 222.90
}
 ```
  Response:
 ```bash
{
    "product_id": 1,
    "image": "src/img/image.jpg",
    "name": "name",
    "value": 222.9
}
 ```
 
   ### 5. PATCH product (/product)
  
   Example Body:
 ```bash
{
    "image": "src/img/patch.jpg",
    "name" : "patch",
    "value": 333.34
}
 ```
  Response:
 ```bash
{
    "product_id": 1,
    "image": "src/img/patch.jpg",
    "name" : "patch",
    "value": 333.34
}
 ```
  


