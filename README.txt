This is a step by step note to help myself walk through remembering how to create a backend for an application

STEPS:
    1) npm init
    2) then npm install express, dotenv, mongoose and colors packages
    3) create a backend folder and in it create a server.js file that will hold all the logic
    4) go to package.json and create two scripts
        4a)create a start script that points node to server.js
        4b)create a server script that points nodemon to server.js
    5) go to server file and require express and the dotenv and chain cthe config() to the dotenv const    
    6) after initializing express you have to create an app const that calls the express function you created
    7) To test and see if the server is created you chain a listen method to the app const and pass the port as the first arg and a console.log function as the second
    8) I want to create the folder structure
        8a)This is important!!! One way to structure your backend is by creating:
            8a-1) A routes folder that houses a file that takes care of the routing logic
                8a-1.I: First step in that file is to require express and express router
                8a-1.II: Second step is to 

            8a-1)