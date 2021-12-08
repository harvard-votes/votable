# Overview Civic Engine

The user is taken to the login page. The user is then prompted to sign in or create an account using their Google account, or using their email. After signing in, the user is taken to the homepage where they can view their current turf sheet. The turf sheet is the organizer/volunteer's main point of entry in contacting their list of students. The turf sheet has information on the student's place of residence, their phone number, email, and other important items that can help a volunteer create a point of contact when inquiring about voting actions. The volunteer can also track their contact status and the voting status of the student, especially when denoting the pledge to engage or voter registration status.

The volunteer/organizer can update information on the user by using the pen tool at the end of each row. The pen tool enables individuals to quickly make changes to data like updated phone numbers or a change in the individuals home state/state of voter registration. Finally, there is delete functionality that allows an entire row to be eliminated from the database.

# Log In Page

The login page has fields to take in inputs for Username and Password. If the input is invalid in the case of an invalid password or combination that is not in the database, a modal will pop up warning the user about the error in their input fields.

# Forgot password

If the user forgets their password they will be directed to use the forgot password page which email a reset password link to their original email using google firebase authentication/password reset features.

# Registration Page

The registration page has fields forst first name, last name, email, and password to enable a first time user to create an account to use civic engine. They can also sign up directly using their google account using authentication via google firebase.

# Turf Sheet

The turf sheet is the primary item of use in CivicEngine. It contains information on the students name, email, phone number, house, suite number, and voter registration.

# Edit Page

Using the pen tool, the user is directed to an edit page. Where they can edit any of the fields contained on the turf sheet.

# About Page

Information on Civic Engine and the development team.

# Available Scripts

In the project directory, you can run:

### `npm start`
