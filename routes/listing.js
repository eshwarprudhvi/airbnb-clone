const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");

const {storage} = require("../cloudConfig.js");


const multer= require("multer");
const upload = multer({storage});
const ExpressError = require("../utils/ExpressError.js");
const {listingSchema} = require("../schema.js");
const Listing = require("../Models/listing");
const {isLoggedIn, isOwner,validateListing} = require("../middlware.js");

const listingController = require("../controllers/listings.js");



router.route("/")
    .get(wrapAsync(listingController.index))
    .post(isLoggedIn,upload.single("listing[image]"),validateListing, wrapAsync(listingController.createListing));
    // .post(upload.single("listing[image]"),(req,res)=>{
    //     res.send(req.file);
    // })


//new route
router.get("/new",isLoggedIn,listingController.renderNewForm)
router.route("/:id")
    .get( wrapAsync(listingController.showListing))
    .put(isLoggedIn,isOwner,upload.single("listing[image]"),validateListing,wrapAsync(listingController.updateListing))
    .delete(isLoggedIn,isOwner,wrapAsync(listingController.destroyListing))





//edit route
router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(listingController.renderEditForm));


module.exports=router;
