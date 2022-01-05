const express = require('express');
const app = express();
app.use(express.json());//parsing json
//-----CHANGE THIS PART WITH MYSQL DATABASE LATER-----{
let userList = [
{
    id: 1,
    name: "Padro",
    age: 19,
    married: false,
},
{
    id: 2,
    name: "Paulo",
    age: 20,
    married: false,
},
{
    id: 3,
    name: "Jennifer",
    age: 28,
    married: true,
},

];
//-----CHANGE THIS PART WITH MYSQL DATABASE LATER-----}

app.get('/users', (req,res)=>{
res.status(200).json(userList);//set a default status 
});

app.post("/user", (req,res) =>{
//Grab data sent by client
//Add data to userList
//Return new List
const newUser = req.body;
userList.push(newUser);
res.json(userList);
});
//put for update
app.put("/users", (req, res)=>{//update the name
//Grab the new name
// loop through list and update the names
//return the new list
const newName = req.body.newName;
for(let i = 0; i<userList.length;i++){
    userList[i].name = newName;
}
res.json(userList); 
});

app.delete("/users", (req, res) =>{
// Get the id 
//delete user with id
//Return list
//what if the id did't exist? we must handle it with a catch error
const id = req.params.id;
let foundId = false;
for(let i =0 ; i<userList.length; i++){
    if(userList[i].id == id){
        userList.splice(i,1);//splice is set to remove the index n times (n=1)
        foundId = true;
    }
}
if(!foundId){
    res.status(404).json({error: "User id not found"});
}else{
    res.json(userList);
}
// this function will remove the object which has id = specific id number as the input 
//for example if we type: http://localhost:3001/users/3 - the program will delete the object where id=3
});

app.listen('3001', () =>{//so here the server will check in 3001
console.log("Server is running on port 3001");
});
