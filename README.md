# Contact Management - Mini Feature of a CRM

## Objective

To build a Contact Management feature that enables users to perform CRUD operations on contact information, enhancing efficiency and usability in managing customer/client details.

## Tech Stack

- **Frontend:** ReactJS with Material UI (MUI)
- **Backend:** NodeJS
- **Database:** Choice of PostgreSQL, MySQL, or MongoDB

## Completion Instructions

### Functionality

#### Must Have

1. **Frontend:**
   - Contact Form with fields: First Name, Last Name, Email, Phone Number, Company, and Job Title (using MUI components).
   - Table displaying all contacts with pagination, sorting, and action buttons for editing/deleting.
2. **Backend:**
   - API Endpoints:
     - `POST /contacts`: Create a new contact.
     - `GET /contacts`: Retrieve all contacts.
     - `PUT /contacts/:id`: Update a contact.
     - `DELETE /contacts/:id`: Delete a contact.
   - Input validation and error handling.
3. **Database:**
   - Store contact details and ensure CRUD operations work seamlessly.

#### Nice to Have

- Responsive design for mobile and desktop.
- Advanced error handling (e.g., duplicate entries).
- Search functionality in the table.

### Guidelines to Develop the Project

#### Must Have

- Modular code structure for frontend and backend.
- Use Material UI for a consistent and clean UI.
- Ensure data validation and appropriate error messages for failed operations.

#### Nice to Have

- Use TypeScript for improved type safety.
- Implement reusable MUI components for form inputs and buttons.

### Submission Instructions

#### Must Have

1. **Code Repository:**
   - Provide a GitHub (or similar) repository link with the complete codebase.
2. **ReadMe File:**
   - Setup instructions to run the project, including database schema.
   - Brief description of the project and technical decisions.
   - List of challenges and solutions faced during the assignment.

#### Nice to Have

- Include a demo video showcasing the features.

## Resources

### Design Files

- Use Material UI documentation for guidance

### APIs

- Define backend endpoints for contact management:
  - `POST /contacts`
  - `GET /contacts`
  - `PUT /contacts/:id`
  - `DELETE /contacts/:id`

### Third-Party Packages

- **Frontend:**
  - `@mui/material` for UI components
- **Backend:**
  - `express` for creating APIs
  - `body-parser` for request parsing
  - Database package: `pg`, `mysql2`, or `mongoose` (based on your chosen database)
