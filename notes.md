thender client is the tool for texting node applications 
or 
we can use the postman for this ill use postman for this 

install nodemon for for the alternatives of this 
also add npm run dev in package.json file 
 
 connecting to database 

go to mongodb alts , create new project and then create cluster for deployment give the name to cluster 
then click on create deployment 
user name and password is very important save them before use 
abdul0301 is the password 

mongodb+srv://abdullahsajjad111b:abdul0301@curdapidb.nhrao.mongodb.net/?retryWrites=true&w=majority&appName=CURDapiDB 
this is link to add into my index.js to connect with mongodb 

we can also link with mongodb compass 
for using all of this we first need to install mongoose so that we can use mongodb in our project 
npm i mongoose 

**** this best practice first we have connected to database then we will create to the port ****
after this we will make the model ,, model is something is use to store data , means in which way we can store the data 

@@@@@ we are not allow to pass json to our node js by default directly for this we use middleware on express js 
app.use() this is the method to configure the  