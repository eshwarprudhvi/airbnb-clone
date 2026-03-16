if(process.env.NODE_ENV!="production"){
    require("dotenv").config();
}


const express  = require("express");
const app = express();
const mongoose = require("mongoose");
const ejs= require("ejs");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const localStrategy = require("passport-local");
const User = require("./Models/user.js");
const MongoStore = require("connect-mongo");

const ExpressError = require("./utils/ExpressError.js");
//importing models

const listingRouter= require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");

//ATLAS 
const dbUrl =process.env.ATLASDBURL;
//set engine
app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"views"))
app.engine("ejs",ejsMate);
//read url content
app.use(express.urlencoded({extended:true}));
//metod override 
app.use(methodOverride("_method"));
async function main() {
  await mongoose.connect(dbUrl);
}
//use static files
app.use(express.static(path.join(__dirname,"/public")))

main().catch(err=>{
    console.log(err);
});

app.get("/",(req,res)=>{
    res.redirect("/listings")
})

const store = MongoStore.create({
    mongoUrl: dbUrl,
    crypto: {
        secret: process.env.SECRET 
    },
    touchAfter: 24 * 3600
})

const sessionOptions = {
    store:store,
    secret: process.env.SECRET || "mysupersecret",
    resave:false,
    saveUninitialized:true,
    cookie:{
        expires:Date.now()+ 7*24*60*60*1000,
        maxAge:7*24*60*60*1000,
        httpOnly:true,

    }
}
store.on("error",()=>{
    console.log("Error in Mongo session store",err);
})
//session
app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

app.use((req,res,next)=>{
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
})


passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/demouser",async (req,res)=>{
    let fakeUser = new User({
        email:"student@gmail.com",
        username:"delta-student",

    })
    let registeredUser = await User.register(fakeUser,"hello world");
    res.send('user registered');
})

app.use("/listings/:id/reviews", reviewRouter);
app.use("/listings", listingRouter); 
app.use("/",userRouter);


app.all(/(.*)/,(req,res,next)=>{
    next(new ExpressError(404,"page not found")); 
});



app.use((err,req,res,next)=>{
    let {statusCode=500 ,message="something went wrong"} =err;
    res.status(statusCode).render("error",{ message })

    // res.status(statusCode).send(message);   
})

const port = process.env.PORT || 8080;
app.listen(port,()=>{
    console.log(`app is listening on the port ${port}`);
})
