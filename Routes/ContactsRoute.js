const express = require("express");
const data = require("../Data/data");
const router = express.Router();
const {getContacts, createContact, getContact,specificContact,updateContact,deleteContact}=require('../Controllers/ContactController')

// ===========  Using Controllers =====================

// Handling GET and POST Together for '/' parameter
router.route("/").get(getContacts).post(createContact);

// Handling GET,PUT and Delete Together for '/:id' parameter
router.route("/:id").get( getContact).put( updateContact).delete(deleteContact );


// Handling POST for Specific ID Method using Router and Controller
router.route("/:id").post(specificContact);


module.exports = router;


// Actual Way of calls Using Router
//------------------------------------

// router.route("/").get((req, res) => {
//   res.status(200).json(data({id:"Default ID",name:"Get Method Call"}));});

// router.route("/:id").get((req, res) => {
//   res.status(200).json(data({id:`Sent ID is ${req.params.id}`,name:"Get Specific ID"}));});