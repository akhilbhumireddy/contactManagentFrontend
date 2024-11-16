import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Paper,
} from "@mui/material";
import "./ContactsTable.css";

const ContactsTable = ({ contacts, onEdit, onDelete }) => (
  <TableContainer component={Paper} className="contacts-table-container">
    <Table className="contacts-table">
      <TableHead>
        <TableRow>
          <TableCell className="table-header">First Name</TableCell>
          <TableCell className="table-header">Last Name</TableCell>
          <TableCell className="table-header">Email</TableCell>
          <TableCell className="table-header">Phone</TableCell>
          <TableCell className="table-header">Company</TableCell>
          <TableCell className="table-header">Job Title</TableCell>
          <TableCell className="table-header">Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {contacts.map((contact) => (
          <TableRow key={contact.id} className="table-row">
            <TableCell className="table-cell">{contact.firstName}</TableCell>
            <TableCell className="table-cell">{contact.lastName}</TableCell>
            <TableCell className="table-cell">{contact.email}</TableCell>
            <TableCell className="table-cell">{contact.phone}</TableCell>
            <TableCell className="table-cell">{contact.company}</TableCell>
            <TableCell className="table-cell">{contact.jobTitle}</TableCell>
            <TableCell className="table-cell">
              <Button
                className="action-btn edit-btn"
                onClick={() => onEdit(contact)}
              >
                Edit
              </Button>
              <Button
                className="action-btn delete-btn"
                onClick={() => onDelete(contact.id)}
              >
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default ContactsTable;
