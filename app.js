const express=require('express')
const app=express()
const fs = require("fs");
 const fs2 = require("fs").promises;

let files = fs.readdirSync("D:/");

app.get("/", (req, res) => {
  res.send(`${ans}</div>`);
});

let ans
files.forEach(async (fileName) => {
  try {
    	const stat = await fs2.lstat(`D:/${fileName}`);
    	const isFile = stat.isFile();
    	
    	if (!isFile) {
      	ans += `<h2 style="margin:20px;"><img src='https://media.istockphoto.com/vectors/file-folder-in-flat-on-white-background-vector-id1175215972?k=6&m=1175215972&s=612x612&w=0&h=SJQ5O2BikSn33YYYVsjNKGfmgDGknf4QSvWQnmtHDP8=' width="50px" height="50px"> <u>${fileName}</u></h2>`;
     
    } else {
      ans+= `<h2 style="margin:20px;"><img src='https://i.pinimg.com/originals/7f/d2/e4/7fd2e46b2da9819e667fb75caf475cf7.png' width="50px" height="50px"> ${fileName}</h2>`;
    }
  } catch (error) {
    console.log(error);
  }
});

app.listen(3000)