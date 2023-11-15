const asyncHandler = require("express-async-handler");
const data = require("../Data/data");
const Contact = require("../Models/contactModel");

//@desc Get all Contacts
//@route GET /contacts
//@access public
const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
});
//@desc Get Specific Contact
//@route GET /contacts/:id
//@access public
const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    const error = new Error("No Contact found");
    error.name = "NotFoundError";
    res.status(404);
    throw error;
  }
  res.status(200).json(contact);
});

//@desc Create a Contact
//@route POST /contacts
//@access public
const createContact = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All Fields are required");
  }
  const contact = await Contact.create({ name, email, phone });
  res.status(201).json(contact);
});

//@desc Post for Specific Contact
//@route POST /contacts/:id
//@access public
const specificContact = asyncHandler(async (req, res) => {
  // console.log(req.body);
  res
    .status(200)
    .json(
      data({ id: `Sent ID is ${req.params.id}`, name: "Post Specific ID" })
    );
});

//@desc update Specific Contact
//@route PUT /contacts/:id
//@access public
const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findByIdAndUpdate(req.params.id, req.body);
  if (!contact) {
    res.status(404);
    throw new Error("not found");
  }
  res.status(200).json(contact);
});

//@desc delete Specific Contact
//@route DELETE /contacts/:id
//@access public
const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("not found");
  }
  await Contact.deleteOne({ _id: req.params.id });

  res.status(200).json({ message: "Contact deleted" });
});

module.exports = {
  getContacts,
  createContact,
  getContact,
  specificContact,
  updateContact,
  deleteContact,
};
