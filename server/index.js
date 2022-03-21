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
            mailbox_number, class_year, city, state, contact_status,
            ptv_status, registration_status, stage_of_voting_process } = req.body;

        const newContact = await pool.query(
            "INSERT INTO contacts (last_name, first_name, email, phone_number, house, \
                suite, mailbox_center, mailbox_number, class_year, city, state, \
                contact_status, ptv_status, registration_status, stage_of_voting_process) \
             VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15) RETURNING *",
            [last_name, first_name, email, phone_number, house, suite, mailbox_center,
                mailbox_number, class_year, city, state, contact_status,
                ptv_status, registration_status, stage_of_voting_process]
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
            '^' || contact_status || '^' || ptv_status || \
            '^' || registration_status || '^' || stage_of_voting_process ILIKE $1 \
            ORDER BY last_name ASC, first_name ASC",
                [`%${query}%`]
            ) : await pool.query("SELECT * FROM contacts ORDER BY last_name ASC, first_name ASC;");

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
            mailbox_number, class_year, city, state, contact_status,
            ptv_status, registration_status, stage_of_voting_process } = req.body;

        const updateContact = await pool.query(
            "UPDATE contacts SET (last_name, first_name, email, phone_number, house, \
                suite, mailbox_center, mailbox_number, class_year, city, state, \
                contact_status, ptv_status, registration_status, stage_of_voting_process) \
                = ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15) \
                WHERE id = $16 RETURNING *",
            [last_name, first_name, email, phone_number, house, suite, mailbox_center,
                mailbox_number, class_year, city, state, contact_status,
                ptv_status, registration_status, stage_of_voting_process, id]
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

// Add script
app.post("/scripts/create", async (req, res) => {
    try {
        const { title, description, timeline, tags, body } = req.body;

        const newScript = await pool.query(
            "INSERT INTO scripts (title, description, timeline, tags, body, time_created, last_modified) \
             VALUES($1, $2, $3, $4, $5, NOW(), NOW()) RETURNING *",
            [title, description, timeline, tags, body]
        );

        res.json(newScript.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
});

// Get all scripts
app.get("/scripts", async (req, res) => {
    try {
        const allScripts = await pool.query("SELECT * FROM scripts ORDER BY last_modified DESC");
        res.json(allScripts.rows);
    } catch (error) {
        console.error(error.message);
    }
});

// Get script
app.get("/scripts/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const script = await pool.query("SELECT * FROM scripts WHERE id = $1", [id]);

        res.json(script.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
});

// Update script
app.put("/scripts/edit/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, timeline, tags, body } = req.body;

        const updateScript = await pool.query(
            "UPDATE scripts SET (title, description, timeline, tags, body, last_modified) \
             = ($1, $2, $3, $4, $5, NOW()) WHERE id = $6 RETURNING *",
            [title, description, timeline, tags, body, id]
        );

        res.json(updateScript.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}!`));