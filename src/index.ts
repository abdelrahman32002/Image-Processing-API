import {promises as fsPromises} from 'fs';
import convert from 'csvtojson';
import express from 'express';
//const csv=require('csvtojson');
const app = express();
const port = 3000;
const oldFile = 'users.csv';
const newFile = 'users.json';
app.get('/convert',async (req,res)=>{
  res.send('working on file')
  convert()
.fromFile(oldFile)
.then((jsonArray)=>{
  const newArray = jsonArray.map((user:
    { first_name:string,
      last_name:string,
      phone:string})=>{
    if(user.phone==""){
      user.phone= "missing number";
    }
    return user;
  });
  fsPromises.writeFile(newFile,JSON.stringify(jsonArray));
});
  //  const jsonArray=await convert().fromFile('../users.csv');


});
// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
