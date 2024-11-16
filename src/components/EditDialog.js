import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";
import axios from "axios";
import "./EditDialog.css";

const EditDialog = ({ open, onClose, contact, fetchContacts }) => {
  const [formData, setFormData] = useState(contact || {});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    await axios.put(
      `https://contactmanagementbackend.onrender.com/api/contacts/${contact.id}`,
      formData
    );
    fetchContacts();
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} className="edit-dialog">
      <DialogTitle className="edit-dialog-title">Edit Contact</DialogTitle>
      <DialogContent className="edit-dialog-content">
        <TextField
          label="First Name"
          name="firstName"
          value={formData.firstName || ""}
          onChange={handleChange}
          fullWidth
          margin="dense"
          className="edit-dialog-input"
        />
        <TextField
          label="Last Name"
          name="lastName"
          value={formData.lastName || ""}
          onChange={handleChange}
          fullWidth
          margin="dense"
          className="edit-dialog-input"
        />
        <TextField
          label="Email"
          name="email"
          value={formData.email || ""}
          onChange={handleChange}
          fullWidth
          margin="dense"
          className="edit-dialog-input"
        />
        <TextField
          label="Phone"
          name="phone"
          value={formData.phone || ""}
          onChange={handleChange}
          fullWidth
          margin="dense"
          className="edit-dialog-input"
        />
        <TextField
          label="Company"
          name="company"
          value={formData.company || ""}
          onChange={handleChange}
          fullWidth
          margin="dense"
          className="edit-dialog-input"
        />
        <TextField
          label="Job Title"
          name="jobTitle"
          value={formData.jobTitle || ""}
          onChange={handleChange}
          fullWidth
          margin="dense"
          className="edit-dialog-input"
        />
      </DialogContent>
      <DialogActions className="edit-dialog-actions">
        <Button onClick={onClose} color="secondary" className="cancel-btn">
          Cancel
        </Button>
        <Button onClick={handleSave} color="primary" className="save-btn">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditDialog;
