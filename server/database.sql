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
    contact_status TEXT,
    ptv_status TEXT,
    registration_status TEXT,
    stage_of_voting_process TEXT
);

CREATE TABLE scripts(
    id SERIAL PRIMARY KEY,
    title TEXT,
    description TEXT,
    timeline DATE,
    tags TEXT[],
    body TEXT,
    time_created TIMESTAMP WITH TIME ZONE,
    last_modified TIMESTAMP WITH TIME ZONE
);





CREATE TABLE team(
    id SERIAL PRIMARY KEY,
    first_name TEXT,
    last_name TEXT,
    email TEXT,
    phone_number TEXT,
    hy TEXT,
    state TEXT,
    role TEXT,
    start_date TEXT,
    end_date TEXT,
    organizing_lead TEXT,
    notes TEXT,
    house TEXT,
    year TEXT
);





