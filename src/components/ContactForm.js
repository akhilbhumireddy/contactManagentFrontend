import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import axios from "axios";
import "./ContactForm.css";

const ContactForm = ({ fetchContacts }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    jobTitle: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    await axios.post(
      "https://contactmanagementbackend.onrender.com/api/contacts",
      formData
    );
    fetchContacts();
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      jobTitle: "",
    });
  };

  return (
    <Box
      component="form"
      className="contact-form"
      sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
    >
      <TextField
        label="First Name"
        name="firstName"
        onChange={handleChange}
        value={formData.firstName}
        className="contact-input"
      />
      <TextField
        label="Last Name"
        name="lastName"
        onChange={handleChange}
        value={formData.lastName}
        className="contact-input"
      />
      <TextField
        label="Email"
        name="email"
        onChange={handleChange}
        value={formData.email}
        className="contact-input"
      />
      <TextField
        label="Phone"
        name="phone"
        onChange={handleChange}
        value={formData.phone}
        className="contact-input"
      />
      <TextField
        label="Company"
        name="company"
        onChange={handleChange}
        value={formData.company}
        className="contact-input"
      />
      <TextField
        label="Job Title"
        name="jobTitle"
        onChange={handleChange}
        value={formData.jobTitle}
        className="contact-input"
      />
      <Button
        variant="contained"
        className="contact-button"
        onClick={handleSubmit}
      >
        Add Contact
      </Button>
    </Box>
  );
};

export default ContactForm;
