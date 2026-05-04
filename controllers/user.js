const User =require("../Models/user");

module.exports.renderLoginForm=(req,res)=>{
    res.render("users/login.ejs");
}
module.exports.signup =async (req,res,next)=>{
    try{
    let {username,email,password} = req.body;
    const newUser =new User({email,username});
    const registredUser = await User.register(newUser,password);

    req.login(registredUser,(err)=>{
        if(err){
           return next(err);
        }
        req.flash("success","Welcome to wanderlust");
        res.redirect(res.locals.redirectUrl || "/listings");
    })

    
    }catch(e){
         req.flash("error",e.message);
         res.redirect("/signup");
    }
}

module.exports.renderSignupForm =(req,res)=>{
    res.render("./users/signup")
}

module.exports.login=(req, res) => {
    req.flash("success", "Welcome to Wanderlust! You are logged in");
     let redirectUrl = res.locals.redirectUrl || "/listings";
     res.redirect(redirectUrl);
}

module.exports.logout =(req,res,next)=>{
    req.logout((err)=>{
        if(err){
        return next(err);
        }
        req.flash("success","you are logged out successfully");
        res.redirect("/listings");
    })
}