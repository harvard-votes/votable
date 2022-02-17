const express = require("express");
const cors = require("cors");
const pool = require("./db");
const PORT = 8000;

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ROUTES //

// Add contact
app.post("/add-contact", async (req, res) => {
    try {
        const { last_name, first_name, email, phone_number, house, suite, mailbox_center,
            mailbox_number, class_year, city, state, should_contact, contact_status,
            pte_status, registration_status, stage_of_voting_process } = req.body;

        const newContact = await pool.query(
            "INSERT INTO contacts (last_name, first_name, email, phone_number, house, \
                suite, mailbox_center, mailbox_number, class_year, city, state, should_contact, \
                contact_status, pte_status, registration_status, stage_of_voting_process) \
             VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16) RETURNING *",
            [last_name, first_name, email, phone_number, house, suite, mailbox_center,
                mailbox_number, class_year, city, state, should_contact, contact_status,
                pte_status, registration_status, stage_of_voting_process]
        );

        res.json(newContact.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
});

// Get all contacts
app.get("/contacts", async (req, res) => {
    try {
        const { query } = req.query;

        const contacts = query ?
            await pool.query(
                "SELECT * FROM contacts WHERE last_name || '^' || first_name || \
            '^' || email || '^' || phone_number || '^' || house || '^' || \
            suite || '^' || mailbox_center || '^' || mailbox_number || '^' || \
            class_year || '^' || city || '^' || state || '^' || \
            should_contact || '^' || contact_status || '^' || pte_status || \
            '^' || registration_status || '^' || stage_of_voting_process ILIKE $1",
                [`%${query}%`]
            ) : await pool.query("SELECT * FROM contacts");

        res.json(contacts.rows);
    } catch (error) {
        console.error(error.message);
    }
});

// Get contact
app.get("/contacts/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const contact = await pool.query("SELECT * FROM contacts WHERE id = $1", [id]);

        res.json(contact.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
});

// Update contact
app.put("/edit-contact/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { last_name, first_name, email, phone_number, house, suite, mailbox_center,
            mailbox_number, class_year, city, state, should_contact, contact_status,
            pte_status, registration_status, stage_of_voting_process } = req.body;

        const updateContact = await pool.query(
            "UPDATE contacts SET (last_name, first_name, email, phone_number, house, \
                suite, mailbox_center, mailbox_number, class_year, city, state, should_contact, \
                contact_status, pte_status, registration_status, stage_of_voting_process) \
                = ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16) \
                WHERE id = $17 RETURNING *",
            [last_name, first_name, email, phone_number, house, suite, mailbox_center,
                mailbox_number, class_year, city, state, should_contact, contact_status,
                pte_status, registration_status, stage_of_voting_process, id]
        );

        res.json(updateContact.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
});

// Delete contact
app.delete("/contacts/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteContact = await pool.query("DELETE FROM contacts WHERE id = $1", [id]);
        res.json("Contact deleted!");
    } catch (error) {
        console.error(error.message);
    }
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}!`));