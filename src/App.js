import React, { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm";
import ContactsTable from "./components/ContactsTable";
import EditDialog from "./components/EditDialog";
import axios from "axios";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);

  const fetchContacts = async () => {
    const { data } = await axios.get(
      "https://contactmanagementbackend.onrender.com/api/contacts"
    );
    setContacts(data);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleEdit = (contact) => {
    setSelectedContact(contact);
    setEditDialogOpen(true);
  };

  const handleDelete = async (id) => {
    await axios.delete(
      `https://contactmanagementbackend.onrender.com/api/contacts/${id}`
    );
    fetchContacts();
  };

  return (
    <div>
      <ContactForm fetchContacts={fetchContacts} />
      <ContactsTable
        contacts={contacts}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      {selectedContact && (
        <EditDialog
          open={editDialogOpen}
          onClose={() => setEditDialogOpen(false)}
          contact={selectedContact}
          fetchContacts={fetchContacts}
        />
      )}
    </div>
  );
};

export default App;
