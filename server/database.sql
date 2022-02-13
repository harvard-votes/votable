CREATE DATABASE contacts;

CREATE TABLE contacts(
    id SERIAL PRIMARY KEY,
    last_name TEXT,
    first_name TEXT,
    email TEXT,
    phone_number TEXT,
    house TEXT,
    suite TEXT,
    mailbox_center TEXT,
    mailbox_number TEXT,
    class_year TEXT,
    city TEXT,
    state TEXT,
    should_contact BOOLEAN,
    contact_status TEXT,
    pte_status TEXT,
    registration_status TEXT,
    stage_of_voting_process TEXT
);