const express = require("express");
const fs = require("fs");
const users = require("./MOCK_DATA.json");
let app = express();

app.use(express.urlencoded({ extended: true }));

function filing(res,usersArr,msg){
  fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err,data)=>{
    return res.status(201).end(msg)
  })  
}

function idFinder(id){
  for (let index = 0; index < users.length; index++) {
    const element = users[index];
    if (element.id == id) {
      return index;
    }
  }
  return false;
}

app.post("/api/user/post",(req,res)=>{
  const body = req.body;
  filing(res,users.push(body),"User Created")
  
})

app.patch("/api/user/patch",(req,res)=>{
  const body = req.body;
  const id = req.body.id;
    if(idFinder(id)!= false){
      let index = idFinder(id)
      users[index].email = body.email;
      users[index].first_name = body.first_name;
      users[index].last_name = body.last_name;
      users[index].gender = body.gender;        
      filing(res,users,"User Updated")   
    }
    return res.status(304).send()
})

app.get("/api/user/get",(req,res)=>{
  const body = req.body;
  const id = req.body.id;
  if (idFinder(id)!= false) {
      let index = idFinder(id)  
      return res.status(200).send(users[index])
    }
  return res.status(404).send()
})

app.delete("/api/user/delete",(req,res)=>{
  const body = req.body;
  const id = req.body.id;
    if (idFinder(id)!= false) {
      let index = idFinder(id)    
        users.splice(index, 1);
    }
filing(res,users,"deleted");
})

app.listen(1200,()=>{
  console.log("server started")
})