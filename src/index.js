const express=require("express")
const session = require("express-session");
const app=express()
const path=require("path")
const hbs=require("hbs")
const collection=require("./mongodb")
const templatepath=path.join(__dirname,'../templates')  
const file1 = require('../Main/server');

const cfg = require('./config');

app.use(session({
    secret: cfg.secured_key,
    resave: false,
    saveUninitialized: false
}));



app.use(express.static(__dirname + '/public'));


app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.set("view engine", "hbs")
app.set("views",templatepath)


app.get("/", (req,res) =>{
    res.render("login")
    })



app.use(express.static('../Main'))

app.post("/login",async(req,res)=>{
  try{
      const check=await collection.findOne({email:req.body.email})

      if(check.password===req.body.password){
      res.render("home")
      }
      else{
        res.send("Wrong Password")
      }
  }
  catch{
    res.send("Wrong Details")
  }



  })  




  app.listen(3000,()=>{
    console.log("port connected");
    })


// function App() {
//   return (
//     <>
//     <title>MGMCET Library</title>
//     <link rel="stylesheet" href="./public/App.css" />
//     <div className="main">
//       <div className="navbar">
//         <div className="icon">
//           <h1 className="logo">MGMCET</h1>
//         </div>
//         <div className="menu">
//           <ul>
//             <li><a href="#">HOME</a></li>
//             <li><a href="#">BOOKS</a></li>                
//             <li><a href="#">ABOUT</a></li>
//             <li><a href="#">CONTACT US</a></li>
//           </ul>
//         </div>
//       </div> 
//       <div className="content">
//         <h1>Welcome To<br /><span>MGMCET</span> <br />Library</h1>
//         <p className="par">Everything you need for better future and success has already been written.
//           <br /> And guess what?<br />
//           All you have to do is go to the library.</p>
//         <button className="cn"><a href="#">JOIN US</a></button> 
//         <div className="form">
//           <h2>Login Here</h2>
//           <input type="email" name="email" placeholder="Enter Email Here" />
//           <input type="password" placeholder="Enter Password Here" />
//           <button className="btn"><a href="#">Login</a></button>
//           <p className="link">Don't have an account<br />
//             <a href="#">Sign up </a> here</p> 
//         </div>
//       </div>
//     </div>
//   </>
//   );
// }

// export default App;
